import React from 'react';
import './App.css';
import FruitPage from './components/fruitPage';
import 'antd/dist/antd.css';
import {
 BrowserRouter as Router,
 Switch,
 Route,
} from "react-router-dom";
function App() {
 return (
   <div>
     <Router>
       <Switch>
         <Route exact path="/" component={FruitPage} />
       </Switch>
     </Router>
   </div>
 );
}
export default App;