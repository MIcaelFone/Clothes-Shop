import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { InputGroup } from 'react-bootstrap';
import "../styles/cadastro_produto.css"
import imagemRoupas from '../../../../assests/roupas-masculinas-estilosas-com-jeans-e-camiseta.webp';
import { toast } from "react-toastify";
import axios from 'axios';


const isNomeValid=(nome)=>{
    const pattern = new RegExp("^[A-Za-z]");
    if (!pattern.test(nome) && nome!==""){
        toast.warning("Nome inválido")
    }if(nome==="") {
        toast.error("Nome não pode ficar vazio")
    }
}

const isdescricaoValid=(descricao)=>{
    const pattern= new RegExp("[A-Za-z]+");
    if (!pattern.test(descricao) && descricao!==""){
        toast.warning("descrição inválida")
    }if(descricao==="") {
        toast.error("Descrição não pode ficar vazia")
    }
   
}

const ismarcaValid=(marca)=>{
    const pattern= new RegExp("[A-Za-z]+");
    if (!pattern.test(marca) && marca!==""){
        toast.warning("Marca inválida")
    }if(marca==="") {
        toast.error("Marca não pode ficar vazio")
    }
}

const isprecoValid=(preco)=>{
    const pattern= new RegExp('^[0-9]*\.?[0-9]*$');
    if (!pattern.test(preco) && preco!==""){
        toast.warning("Preco inválido")
    }if(preco==="") {
        toast.error("Preco não pode ficar vazio")
    }
};
function Tela_cadastro_produto() {
    
    const [nome,setNome]=useState('')
    const [descricao,setDescricao]=useState('')
    const [marca,setMarca]=useState('')
    const [imagem,setImagem]=useState('')
    const [preco,setPreco]=useState('')
    const [moda,setModa]=useState('moda_masculina')
    const handleChangeverificationname=(e)=>{
        const value= e.target.value
        setNome(value)
        isNomeValid(value)
    };
    const handleChangeverificationdescricao=(e)=>{
        const value= e.target.value
        setDescricao(value)
        isdescricaoValid(value)
        
    };
    const handleChangeverificationmarca=(e)=>{
        const value= e.target.value
        setMarca(value)
        ismarcaValid(value)

    };
    
    const handleChangepreco=(e)=>{
        const value=  e.target.value;
        setPreco(value);
        isprecoValid(value)

    };
    const handleImages = (event) => {
        const files = Array.from(event.target.files);
        setImagem(files);
    };
    
    const Cadastroproduto = async (event) => {    
        event.preventDefault()
        try{
            await axios.post("http://localhost:8080/produto/cadastrarproduto",{nome,marca,descricao,preco,imagem,moda})
            
            .then((response)=>{
                console.log(response.data)
            })

        }catch(error){
          console.log(error)
        }
    };
    return (
        <>
            <div style={{backgroundImage: `url(${imagemRoupas})`}}>
                
                <div className="Cadastro template d-flex justify-content-center align-items-center  bg-white">
                    
                    <div className="form_container p-3 rounded bg-white">
                            
                            <center><h2>Cadastro de produto</h2> </center>
                            
                            <form onSubmit={Cadastroproduto}>
                                
                                <label htmlFor='nome_produto'>Nome do produto</label>
                                
                                <Form.Control type="text" name='nome' placeholder="Nome do produto" id='nome_produto' required  value={nome} onChange={handleChangeverificationname}  />                    
                                
                                <label htmlFor='marca'>Marca</label>
                                
                                <Form.Control type="text" id="marca" name='marca' placeholder="Marca" required  value={marca} onChange={handleChangeverificationmarca}/>
                                
                                <label htmlFor='marca'>Preço</label>
                                
                                <InputGroup className="mb-2">
                                    <InputGroup.Text placeholder='Preço do produto'  value={preco} onChange={handleChangepreco} >$</InputGroup.Text>
                                    <Form.Control aria-label="Amount (to the nearest dollar)" name='preco' placeholder='123.50' value={preco} onChange={handleChangepreco} required />                          
                                </InputGroup>
                                                                       
                                <label htmlFor='moda'>Tipo de moda</label>
                                
                                <Form.Select value={moda} onChange={(e)=>setModa(e.target.value)}>
                                    <option value={"moda_masculina"}>Moda masculina</option>
                                    <option value={"moda_feminina"} >Moda feminina</option>
                                </Form.Select>
                                <Form.Group controlId="formFileMultiple" className="mb-2">
                                    <Form.Label>Insira multiplas imagem do produto</Form.Label>
                                    <Form.Control type="file"  multiple onChange={handleImages} required/>
                                </Form.Group>
                                <Form.Group className="mb-2" controlId="exampleForm.ControlTextarea1" >
                                    <Form.Label>Descrição do produto</Form.Label>
                                    <Form.Control as="textarea" rows={3} required  value={descricao} onChange={handleChangeverificationdescricao} />
                                </Form.Group>

                                <div className='d-grid'>
                                    <button type="submit" className='btn btn-primary' >Cadastrar produto</button> {/* Correção: substituído Link por button e adicionado type="submit" */}
                                </div>
                             
                            </form>
                         </div>
                    </div>
                
                </div>
        </>
    );
}

export default Tela_cadastro_produto;