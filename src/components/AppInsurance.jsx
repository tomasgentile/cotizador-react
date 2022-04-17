import Form from './Form'
import useQuoter from '../hooks/useQuoter'
import Spinner from './Spinner'
import Price from './Price'

const AppInsurance = () => {
    const { price, loading } = useQuoter();

    return (
        <>
            <header className="my-10">
                <h1 className="text-white text-center text-4xl font-black">Cotizador de Seguros de Auto</h1>
            </header>
            <main className="bg-white md:w-2/3 lg:w-2/4 mx-auto shadow rounded-lg p-10">
                <Form />
                {loading ? <Spinner /> : <Price/>}
            </main>
        </>
    )
}

export default AppInsurance