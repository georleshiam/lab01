import logo from './logo.svg';
import './App.css';
import Header from './Header.js';
import Footer from './Footer.js';
import Main from './Main.js';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
import {Form} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [DisplayModal, setDisplayModal] = useState(false)
  return (
    <div className="App">
      {/* <Modal show={DisplayModal} onHide={function(){
        setDisplayModal(false)
      }}> 
      This is some text.
      </Modal> */}
 {/* <Button onClick={function({
  setDisplayModal(true)
}}>Launch</Button> */}

{/* <Main setDisplayModal={setDisplayModal}/> */}
      <Header/>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Main setDisplayModal={setDisplayModal}/>
        <Footer/>
    </div>
  );
}

export default App;
