import React from "react"
import PadsData from "./components/padsData"
import Pad from "./components/pad"

export default function App() {
    const [pads, setPads] = React.useState(PadsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} id={pad.id} toggle={toggle} color={pad.color} on={pad.on}/>
    ))

    function toggle(id){
        setPads(prevPads=>prevPads.map(item=>{
            return item.id === id ? {...item,on:!item.on} : item
        }))
    }
    function turnAllPadsOff() {
        console.log("Turning off")
        setPads(prevPads => prevPads.map(pad => ({
            ...pad,
            on: false
        })))
    }
    function turnAllPadsOn() {
        console.log("Turning off")
        setPads(prevPads => prevPads.map(pad => ({
            ...pad,
            on: true
        })))
    }
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
            <div className="all-button">
            <button className="all-off" onClick={turnAllPadsOff}>Turn All Off</button>
            <button className="all-on" onClick={turnAllPadsOn}>Turn All On</button>
            </div>
        </main>
    )
}
