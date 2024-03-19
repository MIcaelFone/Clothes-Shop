import React from "react";

function Cadastro(){
    return(
        <div className='Cadastro template d-flex justify-content-center align-items-center vh-100 bg-primary'>
            <div className='form_container p-5 rounded bg-white'>
                <form>
                    <h3 className='text-center'>Cadastro</h3>
                    <div className='mb-2'>
                        <label htmlFor='text'>Nome</label>
                        <input type='text' placeholder='Digite seu nome' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='email'>Email</label>
                        <input type='email' placeholder='exemplo@gmail.com' className='form-control'></input>
                    </div>
                    <div className='mb-2'>
                        <label htmlFor='password'>Senha</label>
                        <input type='password' placeholder='digite sua senha' className='form-control'></input>
                    </div>
                    <div className='d-grid'>
                        <button className='btn btn-primary'>Cadastrar</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default Cadastro