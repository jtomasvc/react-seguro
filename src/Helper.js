//obtiene la diferencia de años
export function ObtenerDiferencia(year){
    return new Date().getFullYear() - year;
}

//calcula el total a pagar segun la marca
export function calcularMarca(marca){
    let incremento;

    switch(marca){
        case 'Europeo':
            incremento = 1.30;
            break;
        case 'Americano':
            incremento = 1.15;
            break;
        case 'Asiatico':
            incremento = 1.05;
            break;       
        default:
            break;
    }

    return incremento;
}

//calcula el costo del plan

export function costoPlan(plan){
    return(plan === 'basico') ? 1.20 : 1.50;
}

//muestra la primer letra mayuscula

export function primerMayus(texto){
    return texto.charAt(0).toUpperCase() + texto.slice(1);
}