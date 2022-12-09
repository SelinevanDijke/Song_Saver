import React from "react"

class SongForm extends React.Component {
    constructor() {
        super()
        this.state = {
            songTitle: "",
            songArtist: "",
            songGenre: "",
            songRating: "",
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    addToPlaylist(e) {
       e.preventDefault();

    }

    render() {
        return (
            <form className="songform" onSubmit={this.addToPlaylist}>
                <input
                    type="text"
                    value={this.state.songTitle}
                    name="songTitle"
                    placeholder="Title"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    value={this.state.songArtist}
                    name="songArtist"
                    placeholder="Artist"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    value={this.state.songGenre}
                    name="songGenre"
                    placeholder="Genre"
                    onChange={this.handleChange}
                ></input>
                <input
                    type="text"
                    value={this.state.songRating}
                    name="songRating"
                    placeholder="Rating"
                    onChange={this.handleChange}
                ></input>
                <button 
                    type="submit"
                    className="formButton"
                    placeholder="Submit"
                >
                   Add to playlist
                </button>
            </form>
        )

    }
   
}

export default SongForm