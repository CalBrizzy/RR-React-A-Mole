import React from "react";
import { useEffect } from "react";
import MoleHill from './molehill.png'

function EmptyHill(props) {
    useEffect (() => {
        let randSeconds = Math.ceil(Math.random() * 5000)
        let timer = setTimeout (() => {
            props.setDisplayMole(true)
        }, randSeconds)
        console.log(timer)

        return () => clearTimeout(timer)
    })

    return (
        <div>
            <img style={{'width': '10vw'}} src={MoleHill} onClick={props.handleClick} alt={''} />
        </div>
    )
}

export default EmptyHill;