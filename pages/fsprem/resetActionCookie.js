
import Cookies from "universal-cookie";

export default class ResetActionCookie extends React.Component {


  render() {
      const cookies = new Cookies();
      cookies.set('sfdc_action_taken', 'false', { path: '/' });

    return <div>Actions have been reset.</div>
  }

}