import React from "react";
import SongList from "./SongList"
import SongSort from "./SongSort";

export class SongOverview extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        songs: [
            { id: 1, title: "Breaking the Law", artist: "Judas Priest", genre: "NWOBHM", rating: 4},
            { id: 2, title: "Best Time", artist: "Helloween", genre: "Power Metal", rating: 3},
            { id: 3, title: "Tomorrow", artist: "Europe", genre: "Hard Rock", rating: 5},
            { id: 4, title: "Old Number Seven", artist: "The Devil Makes Three", genre: "Bluegrass", rating:  1},
            { id: 5, title: "Take It Easy", artist: "The Eagles", genre: "Rock", rating:  2}
        ]
      }
    }

    addItemToPlaylist = (title, artist, genre, rating) => {
      this.setState({
        songs:[
          ...this.state.songs,
          {id: this.state.songs.length + 1,
          title: title,
          artist: artist,
          genre: genre,
          rating: rating,
          }
        ]
      })
    }

        
  sortSongs = (e) => {
    const selectedValue = e.target.value
    this.setState({sort:selectedValue})

    switch (selectedValue) {
      case "AZ": this.setState({
        songs:this.state.songs.sort((a,b)=>(a.title > b.title ?1: -1))})
      break

      case "ZA": this.setState({
        songs:this.state.songs.sort((a,b)=>(a.title > b.title ?-1: 1))})
      break

      case "HTL": this.setState({
        songs:this.state.songs.sort((a,b)=>(a.rating > b.rating ?-1: 1))})
      break

      case "LTH": this.setState({
        songs:this.state.songs.sort((a,b)=>(a.rating > b.rating ?1: -1))})
      break

      default:
      console.log("The Switch Is Working!")
    }
  }

    render() {
      return (
        <div className="overview">
          <SongList 
          songs={this.state.songs}
          addTitleToList={this.addItemToPlaylist}
          />
          
          <SongSort 
            sorting={this.state.sort} 
            sortThePlaylist={this.sortSongs} 
            />
        </div>
      );
    }
  }
  
  export default SongOverview;