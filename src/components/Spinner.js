import React from 'react';
import './spinner.css'
import PropTypes from 'prop-types'

const Spinner = ({ cargando }) => (
	<div className={cargando ? "sk-circle" :  "hide"}>
		<div className="sk-circle1 sk-child"></div>
		<div className="sk-circle2 sk-child"></div>
		<div className="sk-circle3 sk-child"></div>
		<div className="sk-circle4 sk-child"></div>
		<div className="sk-circle5 sk-child"></div>
		<div className="sk-circle6 sk-child"></div>
		<div className="sk-circle7 sk-child"></div>
		<div className="sk-circle8 sk-child"></div>
		<div className="sk-circle9 sk-child"></div>
		<div className="sk-circle10 sk-child"></div>
		<div className="sk-circle11 sk-child"></div>
		<div className="sk-circle12 sk-child"></div>
	</div>
);

Spinner.propTypes = {
	cargando: PropTypes.bool.isRequired,
};

export default Spinner;