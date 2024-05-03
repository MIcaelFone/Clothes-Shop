import React from "react";
import '../ui/styles/Login.component.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom"
import axios from "axios";

function Cadastro() {
    const [nome, setNome] = useState("");   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [number, setNumber] = useState("");

    const navigate = useNavigate();

    const IsValido = () => {
        let Continuar = true; 
        let errormessage = "Coloque um";
        if (nome === null || nome === '') {
            Continuar = false;
            errormessage += " nome valido!";
        }
        if (email === null || email === '') {
            Continuar = false;
            errormessage += " email valido!";
        }
        if (senha === null || senha === '') {
            Continuar = false;
            errormessage += " senha valido!";
        }
        if (number === null || number === '') {
            Continuar = false;
            errormessage += " numero valido!";
        }
        if (!Continuar) {
            toast.warning(errormessage);
        }else{
            if(/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email)){

            }else{
                Continuar = false;
                toast.warning("Por favor, adicione um email valido!")
            }
        }
        return Continuar;
    };

    const CadastraUsuario = async(event)=>{
        event.preventDefault(); // Evita o comportamento padrão de envio de formulário
        try{
            await axios.post("http://localhost:8080/usuario/cadastrarusuario",{nome,email,senha,number})
            .then((response)=>{
                console.log(response.data)
            })

        }catch(error){
          console.log(error)
        }
    }

    return (
        <div className="Cadastro template d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="form_container p-5 rounded bg-white">
                <form onSubmit={CadastraUsuario}>
                    <h3 className="text-center">Cadastro</h3>
                    <div className="mb-2">
                        <label htmlFor="text">Nome</label>
                        <input
                            type="text"
                            value={nome}
                            placeholder="Digite seu nome"
                            className="form-control"
                            id="nome"
                            onChange={(e) => setNome(e.target.value)}
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            value={email}
                            placeholder="exemplo@gmail.com"
                            className="form-control"
                            id="email"
                            onChange={(e) => setEmail(e.target.value)}
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="form-control"
                            id="senha"
                            onChange={(e) => setSenha(e.target.value)}
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Numero de telefone</label>
                        <input
                            type="text"
                            value={number}
                            placeholder="(xx) xxxxx-xxxx"
                            className="form-control"
                            id="numero"
                            onChange={(e) => setNumber(e.target.value)}
                        ></input>
                    </div>
                    <div className="d-grid mt-3">
                        <button className="btn btn-primary">Criar conta</button>
                    </div>

                    <div className="d-flex flex-column align-items-center mt-4">
                        <p className="text-right">
                            <Link to="/Login" className="ms-2">
                                Ja possui conta?
                            </Link>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default Cadastro;