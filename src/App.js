import React, {useState} from "react";
import styled from "@emotion/styled";

import Header from "./components/Header";
import Formulario from "./components/Formulario"
import Resumen from "./components/Resumen"
import Resultado from "./components/Resultado";
import Spinner from './components/Spinner'

const Contenedor = styled.div`
	max-width: 600px;
	margin: 0 auto;
`;

const ContenedorFormulario = styled.div`
	background-color: #fff;
	padding: 3rem;
`;

function App() {
	const [resumen, setResumen] = useState({
		cotizacion: 0,
		
	})

	const [cargando, setCargando] = useState(false)

	return (
		<Contenedor>
			<Header titulo="Cotizador de Seguros" />

			<ContenedorFormulario>
				<Formulario
					setResumen={setResumen}
					setCargando={setCargando}
				/>
				{cargando && <Spinner cargando={cargando} />}
				{(resumen.data && !cargando) && <Resumen data={resumen.data} /> }

				{!cargando && <Resultado cotizacion={resumen.cotizacion} />}
			</ContenedorFormulario>
		</Contenedor>
	);
}

export default App;
