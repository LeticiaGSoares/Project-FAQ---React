import plusIcon from '../assets/images/icon-plus.svg'
import minusIcon from '../assets/images/icon-minus.svg'

const ButtonModal = ({texto, setModal, modal}) => {
    return(
        <button className='question-title' onClick={() => {setModal(!modal)}}>
            {texto}
            <img src={modal ? minusIcon : plusIcon}/>
        </button>
    )
}

export default ButtonModal