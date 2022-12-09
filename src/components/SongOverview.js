import React from "react";
import SongList from "./SongList"

export class SongOverview extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        songs: [
            { id: 1, title: "Breaking the Law", artist: "Judas Priest", genre: "NWOBHM", rating: 4},
            { id: 2, title: "Best Time", artist: "Helloween", genre: "Power Metal", rating: 3.5},
            { id: 3, title: "Tomorrow", artist: "Europe", genre: "Hard Rock", rating: 5}
        ]
      }
    }

    addItemToPlaylist = (title, artist, genre, rating) => {
      console.log("functie check")

      this.setState ({
        
        songs:[    
          ...this.state.songs,
          {id: this.state.songs.length + 1,
            title: title,
            artist: artist,
            genre: genre,
            rating: rating,
        }]
      })
    }

    render() {
      return (
        <div className="overview">
          <SongList 
          songs={this.state.songs}
          addTitleToList={this.addItemToPlaylist}
          />
        </div>
      );
    }
  }
  
  export default SongOverview;