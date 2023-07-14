import React from "react"

function Search({ setSearchInput }) {
    return (
        <div>
            <input type="text" onChange={e => setSearchInput(e.target.value)} placeholder="Search..." />
        </div>
    );
}

//placeholder is not moving though data is getting logged

export default Search;