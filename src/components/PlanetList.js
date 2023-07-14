import React from "react"
import Planet from "./Planet"

//DEL ONE See a table of the planet names from the Star Wars universe.
//{planets} is full data set
//map planets, in the map function body send data to <Planet />

//search input will have to be used to filter through planets
//      planets.filter(planet => planet.toLowerCase().includes(searchInput).toLowerCase()))


function PlanetList({ planets, searchInput }) {
    //console.log(searchInput)

    const filteredPlanets = planets.filter((p) => {
        return p.name.toLowerCase().includes(searchInput.toLowerCase()) ||
            p.climate.toLowerCase().includes(searchInput.toLowerCase()) ||
            p.terrain.toLowerCase().includes(searchInput.toLowerCase()) ||
            p.population.toLowerCase().includes(searchInput.toLowerCase())
    })

    console.log(filteredPlanets)
    //const planetKeys = Object.keys(planets)
    //const planetValues = Object.values(planets)

    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {filteredPlanets.map((planet) =>
                    <Planet
                        key={planet.id}
                        planet={planet} />)}
            </tbody>
        </table>
    );
}

export default PlanetList;