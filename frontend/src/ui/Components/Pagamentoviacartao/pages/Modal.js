import React from "react";
import { X } from 'lucide-react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';
import useForm_carrd from "./useForm_carrd";

function Modal({ onClose }) {
    const { handleChanges, handleFocus, handleSubmit, CadastraCartao, values, errors, allValid} = useForm_carrd();
  
    const handleAdd = (e) => {
        e.preventDefault(); // Evita que o formulário seja enviado
      
        console.log("Botão Adicionar clicado");
        console.log("allValid:", allValid);
      
        if (allValid) {
          // Chama a função para cadastrar o cartão se todos os campos estiverem válidos
          CadastraCartao();
          onClose(); // Fecha o modal após cadastrar o cartão com sucesso
        }
      };
      
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "rgba(0,0,0,0.3)",
      backdropFilter: "blur(4px)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div className="mt-10" 
        style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
        <button onClick={onClose} 
        style={{ alignSelf: "flex-end" }}><X size={30}/></button>
        <div style={{ backgroundColor: "white", borderRadius: "1rem", padding: "2.5rem", display: "flex", flexDirection: "column", gap: "1.25rem", alignItems: "center", margin: "0 1rem" }}>
          <h1 style={{ fontSize: "1.875rem", fontWeight: "800", color: "black" }}>Adicione aqui o seu cartão!</h1>

          <Cards
            name={values.name}
            number={values.number}
            expiry={values.expiry}
            cvc={values.cvc}
            focused={values.focus}
          />

          <form onSubmit={handleSubmit}>
            
            <div className="Nome">
              <input
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  color: "black",
                  borderColor: "#D1D5DB",
                  borderRadius: "0.375rem",
                  marginBottom: "1rem"
                }}
                type="text" 
                placeholder="Nome completo" 
                name="name"
                value={values.name}
                onChange={handleChanges}
                onFocus={handleFocus} 
                required
              />
            </div>

            <div className="Numero_Cartao">
              <input
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  color: "black",
                  borderColor: "#D1D5DB",
                  borderRadius: "0.375rem",
                  marginBottom: "1rem"
                }}
                type="tel" 
                placeholder="xxxx-xxxx-xxxx-xxxx" 
                name="number"
                value={values.number}
                onChange={handleChanges}
                onFocus={handleFocus}
                required
              />
            </div>

            <div className="Validade">
              <input
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  color: "black",
                  borderColor: "#D1D5DB",
                  borderRadius: "0.375rem",
                  marginBottom: "1rem"
                }}
                type="text" 
                placeholder="xx/xx"
                name="expiry"
                value={values.expiry}
                onChange={handleChanges}
                onFocus={handleFocus} 
                required
              />
            </div>

            <div className="Codigo_Seguranca">
              <input
                style={{
                  width: "100%",
                  padding: "0.75rem 1rem",
                  color: "black",
                  borderColor: "#D1D5DB",
                  borderRadius: "0.375rem",
                }}
                type="tel" 
                placeholder="xxx"
                name="cvc" 
                value={values.cvc}
                onChange={handleChanges}
                onFocus={handleFocus} 
                required
              />
            </div>
            
            <button className="btn btn-primary btn-lg d-flex justify-content-center align-items-center mt-3 ml-3" onClick={handleAdd}>Adicionar</button>
            {errors && <div id="alertMessage" className={`alert alert-${errors.variant}`} role="alert">{errors.message}</div>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Modal;
