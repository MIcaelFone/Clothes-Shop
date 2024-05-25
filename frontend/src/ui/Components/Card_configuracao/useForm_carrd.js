import { useState, useEffect } from "react";
import validadeInfo from './validadeInfo';
import axios from "axios";

const useForm_carrd = () =>{
    const [values, setValues] = useState({
        name: '',
        number: '',
        expiry: '',
        cvc: '',
        focus: ''
    });

    const [errors, setErrors] = useState({
        cname: false,
        cnumber: false,
        cexp: false,
        ccvv: false,
        variant: 'danger',
        message: 'Um erro desconhecido ocorreu. Por favor, tente novamente.'
    });
    

    const [allValid, setAllValid] = useState(false);

    useEffect(() => {
        const isValid = Object.values(errors).every(error => error === true);
        console.log("Errors:", errors);
        console.log("isValid:", isValid);
        setAllValid(isValid);
    }, [errors]);

    const handleFocus = e =>{
        setValues({
            ...values,
            focus: e.target.name
        })
    };

    const handleChanges = e =>{
        const { name, value} = e.target
        setValues({
            ...values,
            [name]: value
        });

        // Validação do campo alterado
        const updatedErrors = validadeInfo({ ...values, [name]: value });
        console.log("Updated Errors:", updatedErrors);
        setErrors(updatedErrors);
    };

    const CadastraCartao = async () => {
        try {
            await axios.post("http://localhost:8080/cartao/cadastrarCartao", values)
                .then((response) => {
                    console.log(response.data);
                });
        } catch (error) {
            console.log(error);
        }
    };

    const handleSubmit = e =>{
        e.preventDefault();
        console.log("Valores do formulário:", values); // Verifica os valores antes de chamar a função
        const newErrors = validadeInfo(values);
        console.log("New Errors:", newErrors);
        setErrors(newErrors);

        // Se não houver erros, cadastra o cartão
        if (Object.values(newErrors).every(error => !error)) {
            CadastraCartao();
        }
    };

    return { handleChanges, handleFocus, handleSubmit, values, errors, allValid };
};

export default useForm_carrd;