import React, { useState } from "react"

const SongForm = ({ onSubmit }) => {

    const [songTitle, setSongTitle] = useState("");
    const [songArtist, setSongArtist] = useState("");
    const [songGenre, setSongGenre] = useState("");
    const [songRating, setSongRating] = useState("");

    function addToPlaylist(e) {
        e.preventDefault();

        if (songTitle.length > 0 && songArtist.length > 0 && songGenre.length > 0 && songRating > 0) {
            onSubmit(songTitle, songArtist, songGenre, songRating);
            setSongTitle("");
            setSongArtist("");
            setSongGenre("");
            setSongRating("");
        }
    }

    return (
        <form className="songform">
            <input
                type="text"
                value={songTitle}
                name="songTitle"
                placeholder="Title"
                onChange={(e) => {setSongTitle(e.target.value)}}
            ></input>
            <input
                type="text"
                value={songArtist}
                name="songArtist"
                placeholder="Artist"
                onChange={(e) => {setSongArtist(e.target.value)}}
            ></input>
            <input
                type="text"
                value={songGenre}
                name="songGenre"
                placeholder="Genre"
                onChange={(e) => {setSongGenre(e.target.value)}}
            ></input>
            <input
                type="text"
                value={songRating}
                name="songRating"
                placeholder="Rating"
                onChange={(e) => {setSongRating(e.target.value)}}
            ></input>
            <button 
                type="submit"
                className="formButton"
                placeholder="Submit"
                onClick={(e) => addToPlaylist}
            >
               Add to playlist
            </button>
        </form>
    )
}

export default SongForm