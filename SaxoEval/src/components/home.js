import React from "react";
import OneImage from "./oneImage.js"
class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            alldata: []
        }

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
            this.setState({ alldata: data })
        }).catch(function (err) {
            console.log("nahi mila" + err)
        })

    }
    render() {
       return (
            <div>
                <h1 className="heading">Hospitals in Gurugram</h1>
                <br />
                <div id="homeDiv">
                    {this.state.alldata.map(item => <OneImage key={item.id} obj={item} />)}
                </div>
                <br />
            </div>


        )
    }

}

export default Home