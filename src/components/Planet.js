import React from "react"

function Planet({planet}) {
    const {name, climate, terrain, population} = planet
    return(
        <tr>
            <td>{name}</td>
            <td>{climate}</td>
            <td>{terrain}</td>
            <td>{population}</td>
        </tr>
    );
}

export default Planet;