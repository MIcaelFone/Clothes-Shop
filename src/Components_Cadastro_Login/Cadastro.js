import React from "react";
import './style.css'
import { Link } from "react-router-dom";
import { useState } from "react";

function Cadastro(){
    function CadastraUsuario(e){
        e.preventDefault()
        console.log(`Usuario ${nome} foi cadastrado com email ${email} e senha ${senha}`)
    }

    const[nome, setNome] = useState()
    const[email, setEmail] = useState()
    const[senha, setSenha] = useState()


    return(
        <div className='Cadastro template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form onSubmit={CadastraUsuario}>
                    <h3 className='text-center'>Cadastro</h3>
                    <div className='mb-2'>
                        <label htmlFor='text'>Nome</label>
                        <input type='text' placeholder='Digite seu nome' className='form-control' id="nome" onChange={(e) => setNome(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='exemplo@gmail.com' className='form-control' id="email" onChange={(e) => setEmail(e.target.value)}></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='Digite sua senha' className='form-control' id="senha" onChange={(e) => setSenha(e.target.value)}></input>
                    </div>
                    <div className='d-grid mt-3'>
                        <button className='btn btn-primary'>Cadastrar</button>
                    </div>

                    <div className="d-flex flex-column align-items-center mt-4">
                    <p className="text-right">
                         <Link to="/" className="ms-2">Ja possui conta?</Link>
                    </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Cadastro