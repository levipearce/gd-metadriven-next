import {Button,Modal,FormGroup,FormControl,Checkbox,Radio,ControlLabel} from 'react-bootstrap'
import Cookies from "universal-cookie";

function DescriptionModal(props)
{
    if(props.segment=='BASIC'){
    return  <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Data Product Description</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Body
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.obj.close}>Cancel</Button>
                            <Button onClick={props.obj.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </span>
    }else{
        return  <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Premium Product Features</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Body
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.obj.close}>Cancel</Button>
                            <Button onClick={props.obj.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </span>
    }

}

export default class SegmentDescriptionModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);

    }
    getInitialState() {
        return { showModal: false };
    }

    close() {
        this.setState({ showModal: false });
    }

    open() {
        console.log('Open',this);
        this.setState({ showModal: true });
    }


    render() {
        console.log('SegmentDescriptionModal render',this.state.showModal);

        return (
            <DescriptionModal obj={this} action={this.props.action} domain={this.props.domain} message={this.props.message}/>
        );
    }
}