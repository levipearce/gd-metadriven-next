import {Button,Modal} from 'react-bootstrap'
import Cookies from "universal-cookie";

function ActionModal(props)
{
    if (props.action=='SFDC_MODAL_AZ') {
        return  <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Insight Driving Action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <img height="170" src="/static/images/map_az.png" className="modalMap" />

                            <p className="modalHeadline">Retiring Metrics: <b>Globex Corporation, Southwest, 4.52</b></p>

                            <p className="modalText">
                                Arizona appears to be the outlying state in your region, with a quarterly drop from 4.59 to 4.47 while showing growth from 4.51
                                to 4.59 in the previous quarter.  In the last four quarters Arizona has performed below the industry benchmark of 5.10.
                                Contact the Arizona Manager to identify the influences causing growth then initiate a SalesForce campaign to impact the downward trend.
                            </p>

                            <p className="modalActions">
                                <b>Actions</b><br />
                                <a href="">Contact Arizona Manager</a><br />
                                <a href="">View Arizona Customer Demographic</a><br />
                                <a href="">Request Competitive Review in Market</a><br />
                                <a target="_blank" onClick={props.obj.handleClick} href="/static/fswidgets/sfdc.html">Create SFDC Marketing Campaign</a>

                            </p>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.obj.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </span>
    } else {
        return <span>
                    <span className="actionmodel_init" onClick={props.obj.open} >{props.message}</span>

                    <Modal show={props.obj.state.showModal} onHide={props.obj.close}>
                        <Modal.Header closeButton>
                            <Modal.Title>Insight Driving Action</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <iframe frameBorder="0" src="https://secure.gooddata.com/dashboard.html?label.csv_demodata_c.region=Southwest#project=/gdc/projects/u72gr8lshicm52o96ntcju2m0n542vdh&dashboard=/gdc/md/u72gr8lshicm52o96ntcju2m0n542vdh/obj/4912&tab=903fb384def2&nochrome=true" width="100%" height="480px" allowTransparency="false"></iframe>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button onClick={props.obj.close}>Close</Button>
                        </Modal.Footer>
                    </Modal>
                </span>;
    }
}
export default class FSActionModal extends React.Component {
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

        handleClick(e) {
                const cookies = new Cookies();
                cookies.set('sfdc_action_taken', 'true', { path: '/' });

        }
        render() {
            return (
                <ActionModal obj={this} action={this.props.action} message={this.props.message}/>
            );
        }
}