import './App.css';
import Homepage from './pages/Homepage';
import Chatpage from './pages/Chatpage';
import {
  Switch,
  Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/" exact>
          <Homepage />
        </Route>
        <Route path="/chats" exact>
          <Chatpage />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
