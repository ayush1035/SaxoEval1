import React from "react";
import OneImage from "./oneImage.js"

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alldata: [],
            filter: [],
        }
        this.search = this.search.bind(this);
        this.newSearch = this.newSearch.bind(this);
    }
    /**
     * this fetches the data as soon as the component gets mounted
     */
    componentDidMount() {
        fetch('http://localhost:3000/getData', {
            method: 'get'
        }).then((response) => {
            return response.json()
        }).then((data) => {
            this.setState({ alldata: data, filter: data })
        }).catch(function (err) {
            console.log("nahi mila" + err)
        })

    }
    /**
     * 
     * @param {* this event gets fired when we hit the search input and on every change in the search input the state gets updated } event 
     */
    newSearch(event) {
        this.setState({
            searchData: event.target.value
        })
    }
    /**
     * this event handler filters the data and shows the result
     * @param {*  this event gets fired when we hit the search button } event
     * 
     */
    search(event) {
        event.preventDefault();
        let toSearch = this.state.searchData;
        if (toSearch) {

            var filteredEvents = this.state.alldata.filter(function (event) {

                return event.name.toLowerCase().includes(toSearch.toLowerCase());
            });

            this.setState({ filter: filteredEvents });
        }
    }
    render() {
        return (
            <div>
                <form onSubmit={this.search}>
                    <input type="text" name="focus" required className="search-box" placeholder="Search your nearest Hospital" onChange={this.newSearch} />
                    <button className="close-icon" type="reset"></button>
                    <button type="button" className="btn btn-primary searchBtn" onClick={this.search}>Search</button>
                </form>
                <br />

                {this.state.filter.map(item => <OneImage key={item.id} obj={item} />)}

                {this.state.filter.length === 0 && <h2 className="heading">No Results Found.</h2>}
                <br />
            </div>
        )
    }

}

export default Search