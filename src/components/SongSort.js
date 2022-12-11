import React from 'react'

function SongSort ({sorting, sortThePlaylist}) {

    return (
        <form className="sortering">
            <h1> Select a way to sort the songs</h1>
        <select name="sorting" onChange={sortThePlaylist}
        >
            <option value="">Please choose a way!</option>
            <option value="AZ">Title from A - Z</option>
            <option value="ZA">Title from Z - A</option>
            <option value="HTL">Rating from 5 - 1</option>
            <option value="LTH">Rating from 1 - 5</option>
           
        </select>
        </form>
    )

}


export default SongSort;