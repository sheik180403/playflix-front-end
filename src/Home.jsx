import NavBar from "./NavBar/NavBar"
import Metal from "./metal"
import Tv from "./List/TvShows"
import { Gta } from "./metal"
import { useState } from "react"

function Home() {

    const [gta, setGta] = useState('true')
    const [metal, setMetal] = useState('false')

    const GtaClick = () => {
        setGta(true);

    }


    return (
        <>

            <NavBar />
            <Tv />
        </>
    )
}

export default Home