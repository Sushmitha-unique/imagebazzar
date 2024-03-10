import React,{useState,useEffect} from "react";
import axios from "axios";
const ImageSearch = ({display,setdisplay}) =>{
    const [term,setterm] = useState('');
    const [Page,setPage] = useState(1);
    useEffect(()=>{
        callme()
    },[])
     async function callme(flag){
        try{
       const response = await axios.get("https://api.unsplash.com/search/photos",
        {
            headers:{
                "Accept-Version":"v1",
                "Authorization" :`Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`

            },
            params:{
             query : term || "random",
             per_page : 5,
             page :Page
            }
        })
        console.log(response.data.results)
        if(flag==="submit")
        {
            setdisplay(response.data.results)
        }
        else{
            setdisplay([...display,...response.data.results])
        }
        setPage(Page+1)
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
        <button  onClick={()=>callme("submit")}>Search</button>
        <button onClick={callme} >next</button>
    </div>
)
}
export default ImageSearch;