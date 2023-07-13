import React, { useEffect, useState } from "react"
import Search from "./Search"
import NewPlanetForm from "./NewPlanetForm"
import PlanetList from "./PlanetList"

//once again APP component is unnecessary
//DEL ONE See a table of the planet names from the Star Wars universe.
//-GET request to json to pass information to PlanetList - make a state to hold data array

function Registry() {
    const [planets, setPlanets] = useState([])
    const [newPlanet, setNewPlanet] = useState({
        name: '',
        climate: '',
        terrain: '',
        population: 0
    })

    useEffect(() => {
        fetch('http://localhost:8085/planets')
            .then(res => res.json())
            .then(data => setPlanets(data))
    }, []
    )

    return (
        <div className="registry">
            <Search />
            <div className="content">
                <PlanetList
                    planets={planets} />
                <NewPlanetForm />
            </div>
        </div>
    )
}

export default Registry;