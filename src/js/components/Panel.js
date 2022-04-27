import React from "react"

const Panel = () => {
    const handleClick = e => {
        console.log(e.target.style.background)
    }
    return (
        <div style={{position: "absolute", zIndex: 1}}>
            <div 
                onClick={handleClick}
                style={{
                background: "blue",
                height: 50,
                width: 50}}>
            </div>
            <div 
                onClick={handleClick}
                style={{
                background: "yellow",
                height: 50,
                width: 50}}>
            </div>
            <div 
                onClick={handleClick}
                style={{
                background: "white",
                height: 50,
                width: 50}}>
            </div>
        </div>
    )
}

export default Panel