import { useEffect, useState } from 'react'
import Form from './form'

export default function Intro({ isLogged }) {
    const [showForm, setShowForm] = useState(false)
    const [changeText, setChangeText] = useState(false)

    const StatesControle = () => {
        setShowForm(!showForm)
        setChangeText(!changeText)
    }


    return (
        <div className='intro'>
            <h1>Bienvenido a Pedidos Ya</h1>
            <p>Pedidos Ya es una plataforma de pedidos online que te permite hacer pedidos de forma rápida y sencilla.</p>
            {isLogged && (<button className="btn-primary" onClick={StatesControle}> {showForm ? 'Ocultar' : 'Hacer Pedido'}</button>)}

            {showForm && <Form />}
        </div>
    )
}