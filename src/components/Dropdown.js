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
                <option value='RTX 3060'>RTX 3060</option>
                <option value='RTX 3060Ti'>RTX 3060Ti</option>
                <option value='RX 6700XT'>RX 6700XT</option>
                <option value='RTX 3070'>RTX 3070</option>
            </select>
        </div >
    )
}
