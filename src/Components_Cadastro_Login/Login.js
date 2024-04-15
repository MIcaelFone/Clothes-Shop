import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style.css'
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const[Nome, setNome] = useState('');
    const[senha, setSenha] = useState('');

    const userNavegacao = useNavigate();


    useEffect(() =>{
        sessionStorage.clear();
    }, []);

    const LoginUsuario = (e) => {
        e.preventDefault()
        if(validaLogin()){
            fetch(`http://localhost:5000/usuario?nome=${Nome}`).then((res) => {
                return res.json();
            }).then((resp)=>{
                if(Object.keys(resp).length === 0){
                    toast.error("Por favor digite um Nome valido!");
                }else{
                    if(resp.senha === senha){
                        toast.success('Login feito!')
                        sessionStorage.setItem('Nome',Nome);
                        userNavegacao('/Home')

                    }else{
                        toast.error("Por favor digite uma senha valida!")
                    }
                }
            }).catch((err)=>{
                toast.error("Falha no login por causa: " + err.message)
            });

        }
    }

    const validaLogin=()=>{
        let resultado = true;
        if(Nome === null || Nome === ''){
            resultado = false;
            toast.warning("Por favor, adicione um nome correto!")
        }
        if(senha === null || senha === ''){
            resultado = false;
            toast.warning("Por favor, adicione uma senha correta!")
        }
        return resultado;
    }

    return(
        <div className='Login template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={LoginUsuario}>
                    <h3 className='text-center'>Faça o Login</h3>
                    <div className='mb-2'>
                        <label htmlFor='text'>Nome</label>
                        <input type='text' placeholder='Digite o seu nome' className='form-control' id="Nome" onChange={(e) => setNome(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='Digite sua senha' className='form-control' id="senha" onChange={(e) => setSenha(e.target.value)}></input>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-primary'>Fazer Login</button>
                    </div>

                    <div className="d-flex flex-column align-items-center mt-4">
                        <p className="text-right">
                            <Link to="/Cadastro" className="ms-2">Não é cadastrado?</Link>
                        </p>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Login
