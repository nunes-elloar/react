import Navbar from "./Navbar"

const Titulo = () => {
    return(
        <h1>Hello React!!!</h1>
    )
}

const Paragrafo = () => {
    return(
        <p>Este é o meu parágrafo</p>
    )
}

const App = () =>{
    return(
        <>
            <Navbar/>
            <Titulo/>
            <Paragrafo/>
        </>
    )
}

export default App;