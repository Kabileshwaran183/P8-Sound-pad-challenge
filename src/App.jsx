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
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
