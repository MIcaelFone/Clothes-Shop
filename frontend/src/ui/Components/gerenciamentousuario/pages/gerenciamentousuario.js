import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { toast } from 'react-toastify';
import "../styles/gerenciamento.css"; // Import the CSS file

function GerenciamentoRoupa() {
    const [usuario, setUsuario] = useState([]);
    
    useEffect(() => {
        axios.get('http://localhost:8080/usuario/listarusuarios')
            .then(response => {
                setUsuario(response.data.data);
            })
            .catch(error => {
                console.log(error);
            });
    }, []);

    const deletarusuario = async (remover) => {
        try {
            const resposta_delete = await axios.delete("http://localhost:8080/usuario/deletarusuario", { data: { idusuario: remover } });
            if (resposta_delete.status === 200) {
                toast.success("Usuário removido com sucesso!");
                setUsuario(usuario.filter(user => user.id !== remover)); // Remove the user from the state
            }
        } catch (error) {
            toast.error("Erro para remover usuário!");
        }
    };

    return (
        <div className="gerenciamento-roupa-container">
            {usuario.length > 0 ? (
                usuario.map((user, index) => (
                    <div className="gerenciamento-roupa-card-container" key={index}>
                        <Card className="gerenciamento-roupa-card">
                            <Card.Body>
                                <Card.Text>Nome: {user.nome}</Card.Text>
                                <Card.Text>Email: {user.email}</Card.Text>
                                <Card.Text>Telefone: {user.telefone}</Card.Text>
                                <Button variant="danger" onClick={() => deletarusuario(user.idusuario)}>Deletar</Button>
                            </Card.Body>
                        </Card>
                    </div>
                ))
            ) : (
                <h1>Não possui nenhum usuário cadastrado</h1>
            )}
        </div>
    );
}

export default GerenciamentoRoupa;
