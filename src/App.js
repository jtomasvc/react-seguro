import React, {useState} from 'react';
import Header from './Components/Header';
import Formulario from './Components/Formulario';
import Resumen from './Components/Resumen';
import styled from '@emotion/styled';
import Resultado from './Components/Resultado';

const Contenedor = styled.div`
  max-width: 600px;
  margin: 0 auto;
`;

const Contenedorformulario = styled.div`
  background-color: #FFF;
  padding: 3rem;
`;

function App() {

  const [resumen,guardarResumen] = useState ({
    cotizacion: 0,
    datos: {
      marca: '',
      year: '',
      plan: ''
    }
  });

  //Extraer datos
  const {cotizacion, datos} = resumen;

  return (
    <Contenedor>
      <Header
        titulo='Cotizador de Seguros'
      />

      <Contenedorformulario>
          <Formulario
            guardarResumen = {guardarResumen}
          />
    
          <Resumen
            datos={datos}
          />

          <Resultado
            cotizacion = {cotizacion}
          />
      </Contenedorformulario>
    </Contenedor>  
  );
}

export default App;
