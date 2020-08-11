import React, { useState } from 'react';
import styled from '@emotion/styled';
import {ObtenerDiferencia,calcularMarca,costoPlan} from '../../src/Helper';

const Campo = styled.div`
    display: flex;
    margin-bottom: 1rem;
    align-items: center;
`;

const Label = styled.label`
    flex: 0 0 100px;
`;

const Select = styled.select`
    display: block;
    width: 100%;
    padding: 1rem;
    border: 1px solid #E1E1E1;
    -webkit-appearance: none;
`;

const InputRadio = styled.input`
    margin: 0 1rem;
`;

const Boton = styled.button`
    background-color: #00838F;
    font-size: 16px;
    width: 100%;
    padding: 1rem;
    color: #FFF;
    text-transform: uppercase;
    font-weight:bold;
    border:none;
    transition:background-color .3s ease;
    margin-top: 2rem;

    &:hover{
        background-color: #26C6DA;
        cursor: pointer;
    }
`;

const Error = styled.div `
    background-color:red;
    color:white;
    padding: 1rem;
    width:100%;
    text-align:center;
    margin-bottom:2rem;
`;

const Formulario = ({guardarResumen}) => {
    
    const [datos, guardarDatos] = useState ({
        marca: '',
        year: '',
        plan: ''
    });

    const [error,guardarError] = useState(false);

    //Extraer los valores del formularo
    const {marca,year,plan} = datos

    //Leer los datos del formulario
    const ObtenerInformacion= e => {
        guardarDatos({
            ...datos,
            [e.target.name] : e.target.value
        })
    }

    //Cuando el usuario presiona submit
    const cotizarSeguro = e => {
        e.preventDefault();

        if(marca.trim()=== ''|| year.trim()===''
        ||plan.trim()=== ''){
            guardarError(true);
            return;
        }

        guardarError(false);

        //una base de 2000
        let resultado  = 2000;

        //Obtener la diferencia de años
        const diferencia = ObtenerDiferencia(year);

        //por cada año se resta el 3% del valor
        resultado -= ((diferencia * 3) * resultado) / 100;
        console.log(resultado);

        // americano 15%,asiatico5%,europeo30%
        resultado = calcularMarca(marca) * resultado;
        console.log(resultado);

        //basico aumenta 20%
        //completo 50%
        const incrementoplan = costoPlan(plan);
        resultado = parseFloat(incrementoplan * resultado).toFixed(2);

        console.log(resultado);

        //total
        guardarResumen({
            cotizacion: resultado,
            datos
        });
    }

    return ( 
        <form
            onSubmit={cotizarSeguro}    
        >
            {error ? <Error>Todos los campos son obligatorios</Error> : null}
            <Campo>
                <Label>Marca</Label>
                <Select
                    name="marca"
                    value={marca}
                    onChange={ObtenerInformacion}
                >
                    <option value="">--Seleccione--</option>
                    <option value="Americano">--Americano--</option>
                    <option value="Europeo">--Europeo--</option>
                    <option value="Asiatico">--Asiatico--</option>
                </Select>
            </Campo>

            <Campo>
                <Label>Año</Label>
                <Select
                    name="year"
                    value={year}
                    onChange={ObtenerInformacion}
                >

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
                    checked={plan === "basico"}   
                    onChange={ObtenerInformacion} 
                /> Básico

                <InputRadio
                    type="radio"
                    name="plan"
                    value="completo"
                    checked={plan === "completo"}  
                    onChange={ObtenerInformacion} 
                /> Completo
            </Campo>

            <Boton type="submit">Cotizar</Boton>
        </form>
     );
}
 
export default Formulario;