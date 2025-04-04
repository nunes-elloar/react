import perfilCriador from "../assets/image-avatar.png"

const Criador = () => {
    return(
        < >
        <div className="criador">
        <img className="imagemC" src={perfilCriador}/>
        <p className="textoCriador">Creactian of <u className="destaque">Jules Wyvern</u></p>
        </div>
        </>
    )
}
export default Criador;