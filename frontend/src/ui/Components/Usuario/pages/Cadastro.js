import React from "react";
import '../styles/Login.component.css'
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
function Cadastro() {
    const [nome, setNome] = useState("");   
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [confirmaSenha,setConfirmaSenha]=useState("")
    const [number, setNumber] = useState("");

   
    const IsValidonome = (nome) => {

        const pattern = new RegExp("^[A-Za-z]");
        if (!pattern.test(nome) && nome!==""){
            toast.warning("Nome inválido!Nome contém apenas letras.Ex:Micael")
            return false;
        }   
        if (nome === null || nome === '') {
            toast.error("Nome não pode ficar vazio")
            return false
        }  
        return true

    } 
    const IsValidoemail = (email) =>{
        const pattern=/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/
        if(!pattern.test(email) && email!==""){
           toast.warning("Email inválido")
           return false
        }
        
        if (email === null || email === '') {
            toast.error("Email não pode ficar vazio")
            return false
        }
        return true
    } 
    const IsValidosenha = (senha)=>{
        const senhaPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
        if(!senhaPattern.test(senha) && senha!==""){
            toast.warning("Senha inválida! A senha precisa ter no mínimo 8 dígitos com uma letra minúscula e um caracter especial.")
            return false
        }
        if (senha === null || senha === '') {
            toast.error("Senha não pode ficar vazia")
            return false
        }
        if(senha!==confirmaSenha && confirmaSenha!==""){
            toast.warning("As duas senhas são diferentes")
            return false
        }
        return true

    }
    const Isnumbervalido = (number)=>{  
        const telefonePattern = new RegExp("^\\(?\\d{2}\\)?\\s?\\d{4,5}\\-?\\d{4}$");
        if(!telefonePattern.test(number) && number!==""){
            toast.warning("Telefone inválido")
            return false
        }
        if(number==="" || number === null ){
           toast.error("Telefone não pode ficar vazio")
           return false
        }
        return true

    };

    const Handlename=(event)=>{
        const value=event.target.value
        setNome(value)
        IsValidonome(value)

    }
    const Handleemail=(event)=>{
        const value=event.target.value
        setEmail(value)
        IsValidoemail(value)
    }
    const Handlesenha=(event)=>{
        const value=event.target.value
        setSenha(value)
        IsValidosenha(value)
    }
    
    const handleConfirmaSenha=(event)=>{
        const value=event.target.value;
        setConfirmaSenha(value)
    }
    const Handletelefone =(event)=>{
        const value=event.target.value
        setNumber(value)
        Isnumbervalido(value)
    }
    const CadastraUsuario = async(event) => {
        event.preventDefault(); // Evita o comportamento padrão de envio de formulário
    
        if(IsValidonome(nome) && IsValidoemail(email) && IsValidosenha(senha) && Isnumbervalido(number)){
            try {
                await axios.post("http://localhost:8080/usuario/cadastrarusuario", {nome, email, senha, number})
                .then((response) => {
                    console.log(response.data);
                });
            } catch(error) {
                console.log(error);
            }
        }
        else {
            toast.error("Dados inválidos")
        }
    };
    

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
                            onChange={Handlename}
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
                            onChange={Handleemail}
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Senha</label>
                        <input
                            type="password"
                            placeholder="Digite sua senha"
                            className="form-control"
                            id="senha"
                            onChange={Handlesenha}
                        ></input>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Confirma Senha</label>
                        <input
                            type="password"
                            value={confirmaSenha}
                            placeholder="Digite sua senha"
                            className="form-control"
                            id="senha"
                            onChange={handleConfirmaSenha}
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
                            onChange={Handletelefone}
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