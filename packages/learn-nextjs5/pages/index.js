import buttonCss from 'antd/lib/button/style/index.css'  //css
import Button from 'antd/lib/button';
import MaterialButton from 'material-ui/Button';
// import 'antd/dist/antd.min.css'  //css
import css from "./myCss.css";
import { whatup } from "../components/test";
whatup('잘되니?')
export default () =>
  <div>
    <p className={css.testMy} style={{ background: 'pink' }}>Welcome to next.js! index.page</p>
    <Button type="primary">Button</Button>
    <MaterialButton>Material Button</MaterialButton>
  </div>

