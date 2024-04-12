import ShowMore from "./Question"
import ShowAnswer from './ShowAnswer'
import React from 'react'
import './FAQBtn.css'

const FAQBtn = (props) => {
    const [isActive, setActive] = React.useState(false)

    return (
        <>
            <div className="FAQ-Btn">
                {props.question}
            </div>
        </>
    )
}

export default FAQBtn