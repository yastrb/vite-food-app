import React from 'react'

const HeroImage = (props) => {
    return (
        <div >
            <img src={props.src} alt={props.alt}></img>
        </div>
    )
}

export default HeroImage