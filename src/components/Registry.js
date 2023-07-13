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
        population: '',
    })

    useEffect(() => {
        fetch('http://localhost:8085/planets')
            .then(res => res.json())
            .then(data => setPlanets(data))
    }, []
    )

    function postOnSubmit(e) {
        e.preventDefault()

        fetch('http://localhost:8085/planets', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newPlanet)
        })

        const newPlanetSet = setPlanets([...planets, newPlanet])

        return newPlanetSet
    }

    return (
        <div className="registry">
            <Search />
            <div className="content">
                <PlanetList
                    planets={planets} />
                <NewPlanetForm newPlanet={newPlanet} setNewPlanet={setNewPlanet} postOnSubmit={postOnSubmit} />
            </div>
        </div>
    )
}

export default Registry;