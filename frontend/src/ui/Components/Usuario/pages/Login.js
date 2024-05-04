import React, { useState } from "react";
import '../styles/Login.component.css'
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const usenavigate = useNavigate()

    const ProceedLogin = (e) => {
        e.preventDefault(); // Evita o comportamento padrão de envio de formulário
        if (validate()) {
            fetch("http://localhost:5000/usuario")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Erro ao obter dados do servidor");
                }
                return res.json();
            })
            .then((usuarios) => {
                const usuarioEncontrado = usuarios.find(user => user.email === email && user.senha === senha);
                if (usuarioEncontrado) {
                    sessionStorage.setItem("Email", email); // Definindo o email na sessão
                    toast.success("Login feito com sucesso!");
                    usenavigate('/Home');
                } else {
                    toast.error("Credenciais inválidas");
                }
            })
            .catch((err) => {
                toast.error("Falha ao fazer login: " + err.message);
            });
        }
    };
    
    
        
    const validate = () => {
        let resultado = true;
        if(email === '' || email === null){
            resultado = false;
            toast.warning("Por favor, adicione um email válido");
        }
        if(senha === '' || senha === null){
            resultado = false;
            toast.warning("Por favor, adicione uma senha válida");
        }
        return resultado;
    }

    return(
        <div className='Login template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={ProceedLogin}>
                    <h3 className='text-center'>Faça o Login</h3>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='exemplo@gmail.com' className='form-control' id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='digite sua senha' className='form-control' id="senha" onChange={(e) => setSenha(e.target.value)}></input>
                    </div>
                    <div className='d-grid'>
                        <button type="submit" className='btn btn-primary'>Fazer Login</button> {/* Correção: substituído Link por button e adicionado type="submit" */}
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

export default Login;
