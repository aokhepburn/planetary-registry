import React from "react"
import { v4 as uuid } from "uuid"

function NewPlanetForm({ newPlanet, setNewPlanet, postOnSubmit }) {
    const { name, climate, terrain, population } = newPlanet

    function handleOnChange(e) {
        setNewPlanet({ ...newPlanet, [e.target.name]: e.target.value })
    }

    return (
        <form onSubmit={e => postOnSubmit(e)}>
            <input type="text" name="name" value={name} onChange={(e) => handleOnChange(e)} placeholder="Name" />
            <input type="text" name="climate" value={climate} onChange={(e) => handleOnChange(e)} placeholder="Climate" />
            <input type="text" name="terrain" value={terrain} onChange={(e) => handleOnChange(e)} placeholder="Terrain" />
            <input type="text" name="population" value={population} onChange={(e) => handleOnChange(e)} placeholder="Population" />
            <input type="submit" value="Add" />
        </form>
    );
}

/*
Has no value or onChange in form must add both to create a CONTROLLED FORM
Ensure names in form and the keys in the newPlanet state are the same.
Console.log(value) as the onChange event to ensure both are working.

*/


export default NewPlanetForm;