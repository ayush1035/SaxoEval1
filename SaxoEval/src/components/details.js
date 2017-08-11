import React from "react";
import EditModal from './editModal.js'

class Detail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showModal: false,
            alldata: [],
            concerned: {},
            dummy: {}
        }

        this.onCloseModal = this.onCloseModal.bind(this);
        this.onSaveClick = this.onSaveClick.bind(this);
        this.onEditClick = this.onEditClick.bind(this);
        this.onChangeInput = this.onChangeInput.bind(this);
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
            for (let i = 0; i < this.state.alldata.length; i++) {

                if (this.props.match.params.id == this.state.alldata[i].id) {

                    this.setState({ concerned: this.state.alldata[i] });

                    break;
                }
            }
        }).catch(function (err) {
            console.log("nahi mila" + err)
        })
    }
    /**
     * this function handles the edit button and will open a modal on details page
     */
    onEditClick() {
        let temp = Object.assign({}, this.state.concerned)
        this.setState({
            dummy: temp
        })
        this.setState({
            showModal: true
        })

    }
    /** 
     * this function handles the close button on the modal and will close the modal on details page
    */
    onCloseModal() {
        this.setState({
            showModal: false
        });

        let temp = Object.assign({}, this.state.concerned)
        this.setState({
            dummy: temp
        })
    }
    /**
     * this will handle the save button on the modal and hence will close the modal
     */
    onSaveClick() {
        this.setState({
            showModal: false
        });
        let temp = Object.assign({}, this.state.dummy)
        this.setState({
            concerned: temp
        })
        fetch('http://localhost:3000/postData', {
            method: 'post',
            body: JSON.stringify(this.state.dummy),
            headers: new Headers({
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            console.log("done");
        }).catch(function (err) {
            console.log("nahi mila" + err)
        })


    }
   
    /**
     * this will update the state as soon as the input in the modal is changed
     */
    onChangeInput(ev) {
        let targetType = ev.target.name;
        let value = ev.target.value;
        let temp = this.state.dummy;
        temp[targetType] = value;

        this.setState({
            dummy: temp
        })
    }


    render() {


        return (
            <div className="container detail">
                <div className="row">
                    <div className="col-xs-12 col-sm-6 col-md-6">
                        <div className="well well-sm">
                            <div className="row">
                                <div className="col-sm-6 col-md-12 " >
                                    <img src={this.state.concerned.url} alt="" className="img-rounded img-responsive" />
                                </div>
                                <div className="col-sm-6 col-md-8">
                                    <h4>
                                        {this.state.concerned.name}</h4>
                                    <small><cite title="San Francisco, USA">   {this.state.concerned.address}<i className="glyphicon glyphicon-map-marker">
                                    </i></cite></small>
                                    <p>
                                        <br />
                                        <i className="glyphicon glyphicon-envelope"></i>   {this.state.concerned.email}
                                        <br />


                                    </p>

                                    <div className="btn-group">

                                        <button type="button" className="btn btn-primary " onClick={this.onEditClick}>
                                            <span></span><span >Edit</span>
                                        </button>
                                        <EditModal item={this.state.dummy} showModal={this.state.showModal} onSaveClick={this.onSaveClick} onCloseModal={this.onCloseModal} onChangeInput={this.onChangeInput} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        )
    }
}
export default Detail