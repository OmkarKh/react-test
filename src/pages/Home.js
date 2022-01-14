//Components
import Dropdown from '../components/Dropdown'
import Information from '../components/Information'
//Hooks
import { useEffect, useState } from 'react'

export default function Home({ setShowNav }) {
    const [dvalue, setDvalue] = useState('')

    useEffect(() => {
        setShowNav(true)
    })


    return (
        <div>
            <Dropdown setDvalue={setDvalue} />
            <Information dvalue={dvalue} />
        </div>
    )
}