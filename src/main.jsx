import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App/App'
import starIcon from './assets/images/icon-star.svg'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className="FAQ-container">
      <h1 className="title"><img src={starIcon}/>FAQs</h1>
      <div className="box-container">
        <App question="Quais tecnologias você sabe utilizar?" answer="Durante o curso de T.I. no SENAI, aprendi a utilizar JavaScript, CSS, HTML e um pouco de Node e React!"/>
        <App question="Quais são seus pontos fortes?" answer="Principalmente a parte visual e criativa, por isso tenho mais afinidade com o Front-end, idealização e design de projetos."/>
        <App question="Quais são os seus objetivos como dev?" answer="Espero poder aplicar minha arte e criatividade em projetos de tecnologia como uma forma de ter estabilidade financeira sem perder minha essência!"/>
        <App question="Quais linguagens você pretende aprender?" answer="Por enquanto pretendo continuar estudando React JS, mas no futuro talvez estude React Native e/ou Angular."/>
      </div>
      
    </div>
  </React.StrictMode>,
)