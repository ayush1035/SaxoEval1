import React from "react";
import { Route, Link } from "react-router-dom";
class OneImage extends React.Component {


    render() {
        return (
            <div className="col-md-4">
                <div >
                    <Link to={"/details/" + this.props.obj.id}>

                        <div>
                            <img src={this.props.obj.url} alt="Cinque Terre" width="450" height="266" className="thumbnail oneImage" data-atr={this.props.obj.id} />
                            <div className="caption">
                                <p className="p">{this.props.obj.name}</p>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        )
    }

}

export default OneImage