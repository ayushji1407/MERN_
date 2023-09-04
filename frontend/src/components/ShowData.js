import React, { useEffect } from 'react'
import axios from "axios";

const ShowData = () => {
     const userData = async() => {
          const Data = await axios.get("http://8000/api/v1/userreg/display");
          console.log(Data);
     };
     useEffect(() =>{
          userData();
     },[])
  return (
    <div>
      User Data
    </div>
  )
}

export default ShowData
