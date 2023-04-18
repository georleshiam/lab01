import logo from './logo.svg';
import './App.css';


function Hornedbeast(props) {

  return (
    //I added Props to identify the components within the tags.
    <div>
      <h2>{props.title}</h2>
      <img width="300px" height="300px" src={props.image} />
      <p>{props.description}</p>
    </div>
  );
}

export default Hornedbeast;
