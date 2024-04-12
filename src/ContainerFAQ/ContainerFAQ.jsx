import './ContainerFAQ.css'
import starIcon from '../assets/images/icon-star.svg'
import FAQBtn from '../FAQBtn/FAQBtn'

function ContainerFAQ() {

    return (
    <div class="container-FAQ">
        <h1 className='title'><img src={starIcon}/>FAQs</h1>
        <FAQBtn question="Question 1"/>
    </div>
    )
}

export default ContainerFAQ
