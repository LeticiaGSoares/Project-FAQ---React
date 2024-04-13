import './App.css'
import Box from '../Box/Box'
import ButtonModal from '../ButtonModal/ButtonModal'
import Modal from '../Modal/Modal'
import React from 'react'

const App = (props) => {
    const [modal, setModal] = React.useState(false)

    return (
        <Box>
            <ButtonModal texto={props.question} setModal={setModal} modal={modal}/>
            <Modal texto={props.answer} setModal={setModal} modal={modal}/>
        </Box>
    )
}

export default App