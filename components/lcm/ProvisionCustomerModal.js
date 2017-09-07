import {Button,Modal,FormGroup,FormControl,Checkbox,Radio,ControlLabel} from 'react-bootstrap'
import Cookies from "universal-cookie";

function DataEntryModal(props)
{
    return  <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Provision Customer to {props.domain}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <form>

    <FormGroup>
      <Radio name="radioGroup" inline>
        Basic
      </Radio>
        {' '}
        <Radio name="radioGroup" inline>
        Premium
      </Radio>
    </FormGroup>

    <FormGroup controlId="formControlsSelect">
      <ControlLabel>Customer</ControlLabel>
      <FormControl componentClass="select" placeholder="select">
        <option value="select">GlobalEx Corporation</option>
        <option value="other">ACME Corporation</option>
      </FormControl>
    </FormGroup>
                                <FormGroup>
                                    <ControlLabel>Customer Users</ControlLabel>
      <Checkbox>
        Alan Smith - SW Regional Manager
      </Checkbox>
                                    {' '}
                                    <Checkbox>
        Bob Burns - NE Regional Manager
      </Checkbox>
                                    {' '}
                                    <Checkbox>
        Sally Fields - NA Product Manager
      </Checkbox>
    </FormGroup>

                            </form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.obj.close}>Cancel</Button>
                            <Button onClick={props.obj.provision}>Provision</Button>
                        </Modal.Footer>
                    </Modal>
                </span>

}

export default class ProvisionCustomerModal extends React.Component {
    constructor(props){
        super(props);
        this.state = {showModal: false};
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.provision = this.provision.bind(this);

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

    provision() {
        console.log('Provision',this);
        const cookies = new Cookies();
        var count = cookies.get('prod_us_premium_count')==null?'1507':cookies.get('prod_us_premium_count');
        var prod_count =  Number.parseInt(count);
        console.log('Prod Count Before',cookies.get('prod_us_premium_count'));
        cookies.set('prod_us_premium_count', ''+(prod_count+1), { path: '/' });
        console.log('Prod Count After',cookies.get('prod_us_premium_count'));
        this.close();
        window.location.reload();
    }

    render() {
        console.log('ProvisionCustomerModal render',this.state.showModal);

        return (
            <DataEntryModal obj={this} action={this.props.action} domain={this.props.domain} message={this.props.message}/>
        );
    }
}