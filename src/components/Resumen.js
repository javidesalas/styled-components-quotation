import React from 'react';
import styled from "@emotion/styled";
import PropTypes from "prop-types";

import {primeraMayuscula} from '../Helper'

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top: 1rem;
`;

const Resumen = ({ data }) => {
    const {marca, year, plan} = data
    return (
			<ContenedorResumen>
				<h2>Resumen de cotización</h2>
				<ul>
					<li>Marca: {primeraMayuscula(marca)}</li>
					<li>Año: {year}</li>
					<li>Plan: {primeraMayuscula(plan)}</li>
				</ul>
			</ContenedorResumen>
		);
};

Resumen.propTypes = {
	datos: PropTypes.object.isRequired,
};

export default Resumen;