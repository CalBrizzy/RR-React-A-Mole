import React, { useState } from "react";
import Mole from './Mole'
import EmptySlot from './EmptySlot'

function MoleContainer(props) {
    let [ mole, setMole ] = useState(false)

    let handleClick = () => {
        props.setScore(props.score + 1)
        setMole(false)
    }

    let summonMole = () => {
        if (mole === false) {
            return <EmptySlot setDisplayMole={setMole} />
        } else {
            return <Mole setScore={props.setScore} setDisplayMole={setMole} handleClick={handleClick} />
        }
    }

    return (
        <div style={{'display': 'inline-block', 'width':'30vw'}}>
            {summonMole()}
        </div>
    )
}

export default MoleContainer;