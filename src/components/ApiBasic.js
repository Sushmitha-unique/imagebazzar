import React from 'react'
import axios from 'axios'
 const ApiBasic = () => {
    function getApi(){
        fetch("https://fakestoreapi.com/products/1")
        .then(response =>response.json())
        .then(data => console.log(data.category))
        .catch(err =>console.log(err))
    }
    function getApi2(){
    axios.get("https://fakestoreapi.com/products/1")
    .then(response =>console.log(response.data.category ))
    .catch(err =>console.log(err))
    }
  return (
    <div>
        <button onClick={getApi}>fetch</button><br/>
        <button onClick={getApi2}>Axios</button>
    </div>
  )
}
export default ApiBasic;