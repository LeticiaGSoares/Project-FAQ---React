const Modal = ({texto, modal}) => {
    if(modal){
        return (
            <p>{texto}</p>
        )
    }
    return null
}

export default Modal