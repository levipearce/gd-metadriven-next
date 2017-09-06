
import {Button, ContextBox, Modal, Breadcrumb} from 'react-bootstrap'
export default class InsightActionModal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {showModal: false}
    }

    getInitialState() {
        console.log("Creating Initial State", this);
        return {showModal: false};
    }

    close() {
        console.log("Close;", this);
        this.setState({showModal: false});
    }

    open() {
        console.log("IAM Open", this);
        this.setState({showModal: true});
    }
    render(){
        return
        <Modal show={this.state.showModal} onHide={this.close}>{children}</Modal>
    }
}