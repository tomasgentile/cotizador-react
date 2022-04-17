import { createContext, useState } from "react";
import { getYearDifference, brandIncrement, planIncrement, moneyFormat } from '../helpers'

const QuoterContext = createContext();

const QuoterProvider = ({ children }) => {
    const [data, setData] = useState({
        brand: '',
        year: '',
        plan: ''
    });
    const [error, setError] = useState('');
    const [price, setPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const handleDataChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        });
    }

    const insuranceQuote = () => {
        // Base
        let result = 2000;

        // Obtener diferencia de años
        const difference = getYearDifference(data.year);

        // Resta 3% por cada año
        result -= difference * 0.03 * result;

        // Europeo incrementa 30%
        // Estadounidesnse incrementa 15%
        // Asiatico incrementa 5%
        result *= brandIncrement(data.brand);

        // Básico incrementa 20%
        // Completo incrementa 50%
        result *= planIncrement(data.plan);

        // Formato moneda
        result = moneyFormat(result);

        setLoading(true);
        setTimeout(() => {
            setPrice(result);
            setLoading(false);
        }, 3000);
    }

    return (
        <QuoterContext.Provider
            value={{
                data,
                handleDataChange,
                error,
                setError,
                insuranceQuote,
                price, 
                loading
            }}
        >
            {children}
        </QuoterContext.Provider>
    )
}

export { QuoterProvider };

export default QuoterContext;