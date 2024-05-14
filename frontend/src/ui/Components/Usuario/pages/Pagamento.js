import React, { useState } from "react";
import Modal from './Modal'

function Pagamento() {

    const [showModal, setShowModal] = useState(false);

    return (
        <div className="h-screen d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center text-5xl font-weight-bold mb-4">
                Pagamento
            </h1>
            <button className="btn btn-primary btn-lg" onClick={() => setShowModal(true)}>Adicione aqui seu cartão!</button>
            {showModal && <Modal onClose={() => setShowModal(false)} />} {/* Corrigido onClose */}
        </div>
    );
}

export default Pagamento;
