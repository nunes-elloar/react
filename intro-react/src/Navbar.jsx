import "./style.css"
const Botao = () => {
    return(
        <button className="botao">Enviar</button>
    )
}

const Navbar = () => {
    return(
        <nav>
            <a href="" className="link">Link 1</a>
            <a href="" className="link">Link 2</a>
            <Botao/>
        </nav>
    )
}

export default Navbar;