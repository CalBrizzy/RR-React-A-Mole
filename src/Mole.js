import React from "react";
import { useEffect } from "react";
import moleImg from './mole.png'

function Mole(props) {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout (() => {
            props.setDisplayMole(false)
        }, randSeconds)
        console.log(timer)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={moleImg} onClick={props.handleClick} alt={''} />
        </div>
    )
}

export default Mole;