import React,{useState,useEffect} from "react";
import axios from "axios";
const ImageSearch = ({setdisplay}) =>{
    const [term,setterm] = useState('');
    useEffect(()=>{
        callme()
    },[])
     async function callme(){
        try{
       const response = await axios.get("https://api.unsplash.com/search/photos",
        {
            headers:{
                "Accept-Version":"v1",
                "Authorization" :"Client-ID vbw3wefVkHqwtKrRjAp7NbyN9WGXAhnQS70Wu7VlKsg"

            },
            params:{
             query : term || "random"
            }
        })
        console.log(response.data.results)
        setdisplay(response.data.results)
    }
        catch(error){
            console.log(error)
        }
    }
return(
    <div>
        <input  type="text"
                placeholder="enter what you are searching for?"
                onChange = {(e)=>setterm(e.target.value)}
                value={term}/>
        <button  onClick={callme}>Search</button>
    </div>
)
}
export default ImageSearch;