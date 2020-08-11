import React, {Fragment} from 'react';
import styled from '@emotion/styled';
import {primerMayus} from '../../src/Helper';

const ContenedorResumen = styled.div`
    padding: 1rem;
    text-align: center;
    background-color: #00838F;
    color: #FFF;
    margin-top:1rem;
`;

const Resumen = ({datos}) => {
    //extraer de datos
    const {marca,year,plan} = datos;

    if(marca === '' || year === '' || plan === '' )return null;

    return ( 

    <ContenedorResumen>
        <h2>Resumen de Cotizacion</h2>
            <ul>
                <li>Marca: {primerMayus( marca)}</li>
                <li>Plan: {primerMayus( plan)}</li>
                <li>Año del auto: { year}</li>
            </ul>
    </ContenedorResumen>

     );
}
 
export default Resumen;