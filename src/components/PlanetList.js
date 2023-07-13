import React from "react"
import Planet from "./Planet"

//DEL ONE See a table of the planet names from the Star Wars universe.
//{planets} is full data set
//map planets, in the map function body send data to <Planet />

function PlanetList({ planets }) {
    return (
        <table>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Climate</th>
                    <th>Terrain</th>
                    <th>Population</th>
                </tr>
                {/** Render a list of <Planet> components here. */
                    planets.map((planet) =>
                        <Planet
                            key={planet.id}
                            planet={planet} />)}
            </tbody>
        </table>
    );
}

export default PlanetList;