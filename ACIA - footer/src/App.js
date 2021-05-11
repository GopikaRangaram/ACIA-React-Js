
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import HomeBody from './components/homeBody';
import Footer from './components/footer';
import MotorInsuranceBody from './components/motorInsuranceBody'


function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/home" component = {HomeBody} />
          <Route path="/MotorInsurance" component = { MotorInsuranceBody} />
        </Switch>
      </div>
    <Footer /> 
    </Router>
  );
}

export default App;
