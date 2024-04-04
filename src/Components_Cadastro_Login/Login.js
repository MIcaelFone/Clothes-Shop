import React, { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";

function Login(){

        function LoginUsuario(e){
            e.preventDefault()
            console.log(`Usuario do email ${email} logou com a senha ${senha}`)
        }
        const[email, setEmail] = useState()
        const[senha, setSenha] = useState()


    return(
        <div className='Login template d-flex justify-content-center align-items-center vh-100 bg-white'>
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={LoginUsuario}>
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
                        <Link to={'/Home'} className='btn btn-primary'>Fazer Login</Link>
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