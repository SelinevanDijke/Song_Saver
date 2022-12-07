import React from "react";
import ListItem from "./ListItem";
// import SongForm from "./SongForm";

function SongList({songs, selectedGenre}) {

    const songItems = songs.map(song => <ListItem key= {song.id} song={song} genre={selectedGenre}/>)
    return (
        <div>
            <h1 class="dislay-title">Seline's Playlist</h1>
            <table style={{width: "100%"}}>
                <tr className="display-header">
                    <th className="display">Title</th>
                    <th className="display">Artist</th>  
                    <th className="display">Genre</th> 
                    <th className="display">Rating</th>   
                </tr> 
            </table>
            {/* <SongForm onSubmit={ onItemTitleAdd} /> */}
            {songItems} 
        </div>
   )
}
export default SongList