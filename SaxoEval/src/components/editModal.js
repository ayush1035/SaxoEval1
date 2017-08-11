import React from "react";

class EditModal extends React.Component {
    render() {

        const isShow = this.props.showModal;
        return (
            <div>
                <div style={{ display: isShow ? 'block' : 'none' }} className="modal">
                    <div className="modal-content">
                        <div className="modal-header">
                            <span className="close" onClick={this.props.onCloseModal} >&times;</span>
                            <h2>Edit Hospital Details</h2>
                        </div>
                        <div className="modal-body">
                            <form  >
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={this.props.item.name} onChange={this.props.onChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="address">Address</label>
                                    <input type="text" className="form-control" id="address" name="address" value={this.props.item.address} onChange={this.props.onChangeInput} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={this.props.item.email} onChange={this.props.onChangeInput} />
                                </div>
                                <button type="button" className="btn btn-primary" onClick={this.props.onSaveClick}>Save</button>
                            </form>
                        </div>
                        <div className="modal-footer">
                            <h3></h3>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default EditModal;