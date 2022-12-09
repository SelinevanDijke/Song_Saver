import React from "react";
import SongList from "./SongList"

class SongOverview extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        songs: [
            { id: 1, title: "Breaking the Law", artist: "Judas Priest", genre: "NWOBHM", rating: 4 },
            { id: 2, title: "Best Time", artist: "Helloween", genre: "Power Metal", rating: 3.5},
            { id: 3, title: "Tomorrow", artist: "Europe", genre: "Hard Rock", rating: 5}
        ]
      }
    }

    // addSong = (song) => {
    //                       // do something to change the state
    // }
  
    render() {
      return (
        <div className="overview">
          <SongList 
          songs={this.state.songs} 
          />
        </div>
      );
    }
  }
  
  export default SongOverview;