import React from "react";
import SongForm from "./SongForm";

function ListItem ({ song }){
    return (

    <table style={{width: "100%"}}>
        <tr className="songs-header">
            <th className="display">{song.title}</th>
            <th className="display">{song.artist}</th>
            <th className="display">{song.genre}</th>
            <th className="display">{song.rating} / 5</th>
        </tr>
    </table>
    )
}
export default ListItem;