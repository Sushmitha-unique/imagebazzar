import React,{useState} from 'react'
import ApiBasic from './components/ApiBasic';
import ImageSearch from './components/ImageSearch';
import ImageDisplay from './components/ImageDisplay';
const App = () => {
  const [display,setdisplay] = useState([]);
  return (
    <div>
        {/* <ApiBasic/> */}
        <ImageSearch setdisplay={setdisplay}/>
        <ImageDisplay display={display}/>
    </div>
  )
}
export default App;