import { useCallback, useMemo, useRef } from "react"
import useQuoter from "../hooks/useQuoter"
import { brands, plans } from '../constants'


const Price = () => {
    const { price, data } = useQuoter();
    const { brand, year, plan } = data;
    const yearRef = useRef(year);

    const [brandName] = useCallback(
        brands.filter(name => name.id === Number(brand)),
        [price]
    );
    const [planName] = useMemo( () =>
        plans.filter(p => p.id === Number(plan)),
        [price]
    );

    if (price === 0) {
        return null;
    }

    return (
        <div className="bg-gray-100 text-center mt-5 p-5 shadow">
            <h2 className="text-gray-600 font-black text-3xl">Resumen</h2>
            <p className="my-2"><span className="font-bold">Marca: </span>{brandName.name}</p>
            <p className="my-2"><span className="font-bold">Plan: </span>{planName.name}</p>
            <p className="my-2"><span className="font-bold">Año del auto: </span>{yearRef.current}</p>
            <p className="my-2 text-2xl"><span className="font-bold">Total cotización: </span>{price}</p>
        </div>
    )
}

export default Price