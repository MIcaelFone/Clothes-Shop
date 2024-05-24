import React, { useState } from "react";

const ProductPage = () => {

    const [images, setImages] = useState({
        img1: "https://imgnike-a.akamaihd.net/768x768/0136111E.jpg",
        img2: "https://imgnike-a.akamaihd.net/768x768/0136111EA1.jpg",
        img3: "https://imgnike-a.akamaihd.net/768x768/0136111EA3.jpg",
        img4: "https://imgnike-a.akamaihd.net/768x768/0136111EA6.jpg"
    });

    const [activeImg, setActiveImg] = useState(images.img1);

    const [amount, setAmount] = useState(1);

    return (
        <div className="d-flex flex-column flex-lg-row gap-4">
            <div className="d-flex flex-column gap-3">
                <img src={activeImg} alt="" className="w-100 h-auto rounded mb-3"/>
                <div className="d-flex justify-content-between">
                    <img src={images.img1} alt="" className="img-thumbnail cursor-pointer" style={{ width: "60px", height: "60px" }}
                    onClick={() => setActiveImg(images.img1)}/>
                    <img src={images.img2} alt="" className="img-thumbnail cursor-pointer" style={{ width: "60px", height: "60px" }}
                    onClick={() => setActiveImg(images.img2)}/>
                    <img src={images.img3} alt="" className="img-thumbnail cursor-pointer" style={{ width: "60px", height: "60px" }}
                    onClick={() => setActiveImg(images.img3)}/>
                    <img src={images.img4} alt="" className="img-thumbnail cursor-pointer" style={{ width: "60px", height: "60px" }}
                    onClick={() => setActiveImg(images.img4)}/>
                </div>
            </div>

            {/* SOBRE O PRODUTO */}
            <div className="d-flex flex-column">
                <div>
                    <span className="text-primary fw-semibold">Teste</span>
                    <h1 className="fs-1 fw-bold">Tenis Feio</h1>
                </div>
                <p className="text-muted">
                Lorem ipsum dolor sit amet. Non quia adipisci ut architecto sunt et enim perferendis. Ut dolores nemo et pariatur sunt vel nobis unde aut voluptas iusto sit enim quas. Qui exercitationem ducimus non deserunt nihil ea aspernatur nihil est quibusdam totam ut mollitia assumenda.
                </p>
                <div>
                    <h6 className="fs-4 fw-semibold">R$ 9.99</h6>
                </div>
                <div className="d-flex flex-row align-items-center gap-3">
                    <div className="d-flex flex-row align-items-center">
                        <button className="bg-light px-3 rounded text-dark fs-1" onClick={() => setAmount((prev) => Math.max(prev - 1, 1))}>-</button>
                        <span className="py-2 px-3 rounded">{amount}</span>
                        <button className="bg-light px-3 rounded text-dark fs-1" onClick={() => setAmount((prev) => prev + 1)}>+</button>
                    </div>
                    <button className="bg-primary text-white fw-semibold py-2 px-3 rounded">Adicione ao carrinho</button>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
