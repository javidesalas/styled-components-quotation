import React, {useState} from 'react';
import styled from "@emotion/styled";
import PropTypes from 'prop-types'

import { calcularDiferenciaYear, calcularDiferenciaMarca, calcularDiferenciaPlan } from "../Helper";

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;
const Label = styled.label`
    flex: 0 0 100px
`;
const Select = styled.select`
	display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #e1e1e1;
    -webkit-appearance: none
`;

const InputRadio = styled.input`
    margin: 0 1rem
`;

const Button = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #fff;
    text-transform: uppercase;
    font-weight: bold;
    border: none;
    margin-top: 2rem;
    transition: background-color .3s ease;

    &:hover {
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div`
	background-color: #AA0000;
	font-size: 16px;
	width: 100%;
	padding: 1rem;
	color: #fff;
	text-transform: uppercase;
	border: none;
	margin-bottom: 2rem;
    text-align: center
`;


const Formulario = ({setResumen, setCargando}) => {

    const [data, setData] = useState({
        marca: '',
        year: '',
        plan:''
    })

    const {marca, year, plan} = data

    const [error, setError] = useState(false)
    
    const handleForm = e => {
        setData({
            ...data,
            [e.target.name] : e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()

        if (marca.trim() === "" || year.trim() === "" || plan === "") {
					setError(true);
					return;
				}

        setError(false)

        let resultado = 2000

        const diferencia = calcularDiferenciaYear(year)

        resultado -= diferencia * 0.03 * resultado

        resultado *= calcularDiferenciaMarca(marca)

        resultado *= calcularDiferenciaPlan(plan)

        resultado = parseFloat(resultado).toFixed(2)

        setCargando(true)

        setTimeout(() => {
            setCargando(false)

            setResumen({
                cotizacion: resultado,
                data,
            });

        }, 3000)

        



        
    }

    return (
        <div>
            {error && <Error> Todos los campos deben ser rellenados</Error>}
                <form
                onSubmit={handleSubmit}
                >
					<Campo>
						<Label>Marca</Label>
						<Select name="marca" value={marca} onChange={handleForm}>
							<option value="">--Seleccione una opción--</option>
							<option value="americano">Americano</option>
							<option value="europeo">Europeo</option>
							<option value="asiatico">Asiático</option>
						</Select>
					</Campo>
					<Campo>
						<Label>Año</Label>
						<Select name="year" value={year} onChange={handleForm}>
							<option value="">-- Seleccione --</option>
							<option value="2021">2021</option>
							<option value="2020">2020</option>
							<option value="2019">2019</option>
							<option value="2018">2018</option>
							<option value="2017">2017</option>
							<option value="2016">2016</option>
							<option value="2015">2015</option>
							<option value="2014">2014</option>
							<option value="2013">2013</option>
							<option value="2012">2012</option>
						</Select>
					</Campo>
					<Campo>
						<Label>Plan</Label>
						<InputRadio
							type="radio"
							name="plan"
							value="basico"
							onChange={handleForm}
						/>
						Básico
						<InputRadio
							type="radio"
							name="plan"
							value="completo"
							onChange={handleForm}
						/>
						Completo
					</Campo>
					<Button type="submit">Cotizar</Button>
				</form>
			</div>
		);
};

Formulario.propTypes = {
	setResumen: PropTypes.func.isRequired,
	setCargando: PropTypes.func.isRequired,
};

export default Formulario;