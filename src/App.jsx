import React from "react"
import PadsData from "./components/padsData"
import Pad from "./components/pad"

export default function App() {
    const [pads, setPads] = React.useState(PadsData)

    const buttonElements = pads.map(pad => (
        <Pad key={pad.id} color={pad.color} on={pad.on}/>
    ))
    
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}
