import React from "react";
import '../styles/cadastro.css'
import { Link,useNavigate} from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

function Cadastro() {
    const [nome, setNome] = useState("");  
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erronome,seterronome]=useState("");
    const [erroemail,seterroemail]=useState("");
    const [confirmaSenha,setConfirmaSenha]=useState("")
    const [errosenha, setErrosenha] = useState("");
    const [erroconfirmaSenha, setErroconfirmaSenha] = useState("");
    const [errotelefone,seterrotelefone]=useState("")
    const usenavigate = useNavigate()
    const [number, setNumber] = useState("");

    const IsValidonome= (nome) => {
        const pattern =  /^[A-Za-z\s]+$/;
        if (nome !== "" && !pattern.test(nome)) {
            seterronome("Nome deve conter apenas letras. Ex: Micael");
            return false;
        }
        if (nome === "") {
            toast.error("Nome não pode ficar vazio");
            return false;
        }
        seterronome("");
        return true;
    };
    const IsValidoemail = (email) =>{
        const pattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if(!pattern.test(email) && email!==""){
            seterroemail("Email inválido")
           return false
        }        
        if (email === null || email === '') {
            toast.error("Email não pode ficar vazio")
            return false
        }
        seterroemail("") 
        return true
    } 
    const IsValidosenha = (senha) => {
        const senhaPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$");
        if (!senhaPattern.test(senha) && senha !== "") {
            setErrosenha("Senha inválida! A senha precisa ter no mínimo 8 dígitos com uma letra minúscula e um caracter especial.");
            return false;
        }
        if (senha === "") {
            toast.error("Senha não pode ficar vazia");
            return false;
        }
        setErrosenha("");
        return true;
    };
    const Isconfirmsenha = (senha, confirmaSenha) => {
        if (senha !== confirmaSenha && confirmaSenha !== "" && senha !== "") {
            setErroconfirmaSenha("As duas senhas são diferentes");
            return false;
        }
        setErroconfirmaSenha("");  
        return true;
    };
    const Isnumbervalido = (number)=>{  
        const telefonePattern = new RegExp("^\\(?\\d{2}\\)?\\s?\\d{4,5}\\-?\\d{4}$");
        if(!telefonePattern.test(number) && number!==""){
        seterrotelefone("Telefone inválido")
            return false
        }
        if(number==="" || number === null ){
            toast.error("Telefone não pode ficar vazio")
           return false
        }
        seterrotelefone("") 
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
        Isconfirmsenha(value,confirmaSenha)
    }
    
    const handleConfirmaSenha=(event)=>{
        const value=event.target.value;
        setConfirmaSenha(value)
        Isconfirmsenha(senha,value)
    }
    const Handletelefone =(event)=>{
        const value=event.target.value
        setNumber(value)
        Isnumbervalido(value)
    }
    const CadastraUsuario = async(event) => {
        event.preventDefault(); // Evita o comportamento padrão de envio de formulário
        if(IsValidonome(nome) && IsValidoemail(email) && Isconfirmsenha(senha,confirmaSenha) && Isnumbervalido(number)){
            try {
                var iscadastroValid=false
                await axios.post("http://localhost:8080/usuario/verficandoCadastro", { nome, email,number }).then((resposta) =>{
                    if (resposta.status===204){
                        console.log("Entrou na verificaçaoo")
                        iscadastroValid=true
                        console.log(iscadastroValid)
                        return;
                    }
                    
                })
                if(iscadastroValid){
                    await axios.post("http://localhost:8080/usuario/cadastrarusuario", { nome, email, senha, number }) .then(function (resposta) {
                        if (resposta.status===201){
                            toast.success("Cadastro realizado com sucesso")
                            usenavigate ("/Login")
                            return;
                        }
                    })
      
                } 
            }catch (error) {
                console.error(error);
                toast.error("Cadastro já existente");
            }
        } else {
            toast.error("Dados inválidos");
        }
    };

    return (
        <div className="Cadastro template d-flex justify-content-center align-items-center vh-100 bg-white">
            <div className="form_container p-5 rounded bg-white">
                <form onSubmit={CadastraUsuario}>
                    <h3 className="text-center">Cadastro</h3>
                    <div className="mt-4">
                        <label htmlFor="text">Nome</label>
                        <input type="text"  value={nome} placeholder="Digite seu nome" className="form-control" id="nome" onChange={Handlename}></input>
                        {erronome && <span className="text-danger">{erronome}</span>}                  
                    </div>
                    <div className="mt-4">
                        <label htmlFor="email">Email</label>
                        <input type="email" value={email} placeholder="exemplo@gmail.com" className="form-control" id="email" onChange={Handleemail}></input>
                        {erroemail && <span className="text-danger">{erroemail}</span>}    
                    </div>
                    <div className="mt-4 " >
                        <label htmlFor="password">Senha</label>
                        <input type="password" placeholder="Digite sua senha" className="form-control" id="senha" onChange={Handlesenha} ></input>
                        {errosenha && <span className="text-danger">{errosenha}</span>}    
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password">Confirma Senha</label>
                        <input type="password"  value={confirmaSenha} placeholder="Digite sua senha"  className="form-control" id="confirmasenha" onChange={handleConfirmaSenha}></input>
                        {erroconfirmaSenha && <span className="text-danger">{erroconfirmaSenha}</span>}    
                    </div>
                    <div className="mt-4">
                        <label htmlFor="password">Numero de telefone</label>
                        <input type="text" value={number} placeholder="(xx) xxxxx-xxxx" className="form-control"  id="numero" onChange={Handletelefone} ></input>
                        {errotelefone && <span className="text-danger">{errotelefone}</span>}
                    </div>
                    <br></br>
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