import { useState } from 'react'
import Intro from './components/intro'
import './home.css'

export default function Home({ isLogged }) {


    return (
        <>
            <Intro isLogged={isLogged} />
        </>
    )
}