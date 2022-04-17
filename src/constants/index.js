export const brands = [
    {id: 1, name: 'Europeo'},
    {id: 2, name: 'Estadounidense'},
    {id: 3, name: 'Asiatico'}
];

// Toma el año actual
const yearMax = new Date().getFullYear();
// Genera un array con los ultimos 20 años
export const years = Array.from(new Array(20), (value, index) => yearMax - index);

export const plans = [
    {id: 1, name: 'Básico'},
    {id: 2, name: 'Completo'}
];