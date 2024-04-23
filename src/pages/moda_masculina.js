import React from "react";
import TelaVenda from "../UI/Components/moda/TelaVenda";

function ModaMasculina() {
    const moda_masculina = {
        titulo: 'Moda masculina',
        filtros: [
            {
                titulo: 'Tamanho',
                options: ['P', 'M', 'G', 'GG'],
            },
            {
                titulo: 'Marca',
                options: ['Nike', 'Adidas', 'Lacoste'],
            },
            {
                titulo: 'Preco',
                options: ['Abaixo de 50 reais', '50,00-100,00', '100,00-200,00', 'Acima 200,00'],
            }
        ]
    };

    return (
        <div>
            <h1>{moda_masculina.titulo}</h1>
            {moda_masculina.filtros.map((filtro, index) => (
                <TelaVenda key={index} titulo={filtro.titulo} options={filtro.options} />
            ))}
        </div>
    );
}

export default ModaMasculina;
