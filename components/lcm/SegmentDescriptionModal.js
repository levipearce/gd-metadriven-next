import {Button,Modal,FormGroup,FormControl,Checkbox,Radio,ControlLabel} from 'react-bootstrap'
import Cookies from "universal-cookie";

function DescriptionModal(props)
{
    if(props.segment=='BASIC'){
    return  <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header className="lcm-alert-header">
                            <Modal.Title>Basic Product Description</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>Basic visualizations<br/>
                            Automated Alerts<br/>
                            Drill Through Reports<br/>
                            KPIs
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.obj.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </span>
    }else{
        return  <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header  className="lcm-alert-header">
                            <Modal.Title>Premium Product Features</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>System of Insight<br/>
                            Market Benchmarks <br/>
                            3rd party data integrations <br/>
                            Integrated SalesForce Campaign Integration<br/>
                            Decision Engines<br/>
                            Data Exploration
                        </Modal.Body>
                        <Modal.Footer>
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
            <DescriptionModal obj={this} segment={this.props.segment} message={this.props.message}/>
        );
    }
}