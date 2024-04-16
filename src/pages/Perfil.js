import React, { useRef } from "react";
import { Link } from "react-router-dom";
import '../ui/styles/Perfil.component.css';
import imgPerfil from '../assests/pngwing.com.png';


//Tela
function Perfil(){
    const imageRef = useRef(null);

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        imageRef.current.src = imageUrl;

    }
    return(
        <>
            <div className='Perfil template d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-50 rounded bg-white'>
                    <form>

                            <div className="Profile">
                            <label htmlFor="inputImagem" className="Imagem">
                                <img src={imgPerfil} alt="" ref={imageRef}/>
                                <input type="file" id="inputImagem" className="Colocar_Imagem" onChange={handleImageChange} style={{ display: 'none' }} />
                                
                            </label>
                            </div>
                        
                        <h3 className='text-center'>Alterar Informações</h3>
                        <div className='mb-2'>
                            <label htmlFor='text'>Nome</label>
                            <input type='text' placeholder='Digite seu nome' className='form-control' id="nome"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email'>Email</label>
                            <input type='email' placeholder='exemplo@gmail.com' className='form-control' id="email"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Senha</label>
                            <input type='password' placeholder='Digite sua senha' className='form-control' id="senha"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'>Numero de telefone</label>
                            <input type='text' placeholder='(xx) xxxxx-xxxx' className='form-control' id="numero"></input>
                        </div>
                        <div className='d-grid mt-3'>
                            <Link to={'/Home'} className='btn btn-primary'>Salvar Alterações</Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
        
    )
}


export default Perfil;