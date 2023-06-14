//importing libraries
// import logo from './logo.svg';
// import './App.css';
import Hornedbeast from './Hornedbeast';
import data from './data.json'
import { Button } from 'react-bootstrap';
// define component
function Main(props) {
 // 
 
  return (
    <div>
         

      <Hornedbeast setDisplayModal= {props.setDisplayModal(true)}
/>
      <Hornedbeast title="Unicorn🦄"image="./uni.jpg" description="Pretty little unicorn." />
      <Hornedbeast title="Ram🐏" image="./goat.jpg" description="Angry little ram."/>
      <Hornedbeast title={data[0].title} image={data[0].image_url} description= {data[0].description}/>
      <Hornedbeast title={data[1].title} image={data[1].image_url} description= {data[1].description}/>
      <Hornedbeast title={data[2].title} image={data[2].image_url} description= {data[2].description}/>
      <Hornedbeast title={data[3].title} image={data[3].image_url} description= {data[3].description}/>
      <Hornedbeast title={data[4].title} image={data[4].image_url} description= {data[4].description}/>
      <Hornedbeast title={data[5].title} image={data[5].image_url} description= {data[5].description}/>
      <Hornedbeast title={data[6].title} image={data[6].image_url} description= {data[6].description}/>
      <Hornedbeast title={data[7].title} image={data[7].image_url} description= {data[7].description}/>
      <Hornedbeast title={data[8].title} image={data[8].image_url} description= {data[8].description}/>
      <Hornedbeast title={data[9].title} image={data[9].image_url} description= {data[9].description}/>
      <Hornedbeast title={data[10].title} image={data[10].image_url} description= {data[10].description}/>
      <Hornedbeast title={data[11].title} image={data[11].image_url} description= {data[11].description}/>
      <Hornedbeast title={data[12].title} image={data[12].image_url} description= {data[12].description}/>
      <Hornedbeast title={data[13].title} image={data[13].image_url} description= {data[13].description}/>
      <Hornedbeast title={data[14].title} image={data[14].image_url} description= {data[14].description}/>
      <Hornedbeast title={data[15].title} image={data[15].image_url} description= {data[15].description}/>
      <Hornedbeast title={data[16].title} image={data[16].image_url} description= {data[16].description}/>
      <Hornedbeast title={data[17].title} image={data[17].image_url} description= {data[17].description}/>
      <Hornedbeast title={data[18].title} image={data[18].image_url} description= {data[18].description}/>
      <Hornedbeast title={data[19].title} image={data[19].image_url} description= {data[19].description}/>


    </div>
  );
}

export default Main;
