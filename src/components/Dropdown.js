import { useEffect, useState } from 'react'
import './Dropdown.css'

export default function Dropdown({ setDvalue }) {
    const [dropValue, setDropValue] = useState('RTX 3060')
    useEffect(() => {
        setDvalue(dropValue)
    }, [dropValue])

    return (
        <div className="dropdown">
            <select value={dropValue} onChange={(e) => setDropValue(e.target.value)}>
                <option>RTX 3060</option>
                <option>RTX 3060Ti</option>
                <option>RX 6700XT</option>
                <option>RTX 3070</option>
            </select>
        </div >
    )
}
