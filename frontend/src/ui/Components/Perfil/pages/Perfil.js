import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { FormattedMessage, useIntl } from "react-intl";
import '../styles/Perfil_component.css';
import imgPerfil from '../../../../assests/pngwing.com.png';

// Tela
function Perfil() {
    const imageRef = useRef(null);
    const intl = useIntl();
    
    var token = localStorage.getItem("token");
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));
    var json = JSON.parse(jsonPayload)
    const exp_time = json.exp / 60000
    console.log(exp_time)

    const handleImageChange = (event) => {
        const file = event.target.files[0];
        const imageUrl = URL.createObjectURL(file);
        imageRef.current.src = imageUrl;
    }

    return (
        <>
            <div className='Perfil template d-flex justify-content-center align-items-center vh-100 bg-white'>
                <div className='form_container p-50 rounded bg-white'>
                    <form>
                        <div className="Profile">
                            <label htmlFor="inputImagem" className="Imagem">
                                <img src={imgPerfil} alt="" ref={imageRef} />
                                <input type="file" id="inputImagem" className="Colocar_Imagem" onChange={handleImageChange} style={{ display: 'none' }} />
                            </label>
                        </div>
                        <h3 className='text-center'><FormattedMessage id="profile_alterar_informacao" /></h3>
                        <div className='mb-2'>
                            <label htmlFor='text'><FormattedMessage id="formLabels_name" /></label>
                            <input type='text' placeholder={intl.formatMessage({ id: 'formLabels_enterYourName' })} className='form-control' id="nome"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='email'><FormattedMessage id="FormLabels_email" /></label>
                            <input type='email' placeholder={intl.formatMessage({ id: 'FormLabels_exampleEmail' })} className='form-control' id="email"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='password'><FormattedMessage id="FormLabels_password" /></label>
                            <input type='password' placeholder={intl.formatMessage({ id: 'FormLabels_enterYourPassword' })} className='form-control' id="senha"></input>
                        </div>
                        <div className='mb-2'>
                            <label htmlFor='numero'><FormattedMessage id="FormsLabels_phoneNumber" /></label>
                            <input type='text' placeholder='(xx) xxxxx-xxxx' className='form-control' id="numero"></input>
                        </div>
                        <div className='d-grid mt-3'>
                            <Link to={'/Home'} className='btn btn-primary'><FormattedMessage id="profile_savechanges" /></Link>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Perfil;
