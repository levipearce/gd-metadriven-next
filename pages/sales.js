import App from "../components/App"
import ContentBox from "../components/ContentBox"

export default (props) => (
  <App pathname={props.url.pathname} >
    <ContentBox>
      <iframe frameborder="0" src="https://secure.gooddata.com/reportWidget.html#project=/gdc/projects/r24k3k1e0sahveafix9276vujs3g011a&report=/gdc/md/r24k3k1e0sahveafix9276vujs3g011a/obj/7330&title=yes" width="400px" height="300px" allowTransparency="false"></iframe>
    </ContentBox>
  </App>
)
