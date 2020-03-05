import React, { Component } from "react";
import axios from "axios";

const ContentContext = React.createContext();

const reducer = (state,action) =>{
    switch (action.type){
        case "SEARCH_TRACKS":
            return {
                // ...state,
                trackList: action.payload,
                heading: 'Search Results',
            }
        default:
            return ""
    }
}
class ContextProvider extends Component {
    state = {
        trackList: [],
        heading: "Top 10 Results",
        dispatch: action => this.setState( (state) => reducer(state,action) )
    };

    componentDidMount() {
        console.log(`${process.env.REACT_APP_MM_KEY}`);
        axios
            .get(
                `https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=it&f_has_lyrics=1&apikey=${process.env.REACT_APP_MM_KEY}`
            )
            .then(res =>
                this.setState({ trackList: res.data.message.body.track_list })
            )
            .catch(err => console.log(err));
    }

    render() {
        return (
            <ContentContext.Provider value={this.state}>
                {this.props.children}
            </ContentContext.Provider>
        );
    }
}

const ContextConsumer = ContentContext.Consumer;
export { ContextConsumer, ContextProvider };
