
import Cookies from "universal-cookie";

export default class ResetActionCookie extends React.Component {


  render() {
      const cookies = new Cookies();
      cookies.set('sfdc_action_taken', 'false', { path: '/' });
      cookies.set('prod_us_premium_client_count', '231', { path: '/' });
      cookies.set('prod_us_premium_count', '1507', { path: '/' });
    return <div>Actions have been reset.</div>
  }

}