import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const SearchEvent = () => {
    const [data,setData]=useState([
        {
            "name":"",
            "venue":"",
            "organiser":"",
            "contact":""
        }
    ])
   var [date,setDate]=useState("")
    const searchData=()=>{
        const data={"date":date}
        console.log(data)
        axios.post("http://localhost:4007/api/search",data).then((response)=>{
            console.log(response.data)
            setData(response.data)
        })
    }


    const deleteData=(id)=>{
      const data={"_id":id}
      console.log(data)
      axios.post("http://localhost:4007/api/delete",data).then((response)=>{
          if(response.data.status=="success")
          {
              alert("successfully deleted")
          }
          else
          {
              alert("failed to delete")
          }
      })
        } 


  return (
    <div>
<Header/>
<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(a)=>{setDate(a.target.value)}} type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={searchData} className="btn btn-primary">SEARCH</button>
                </div>
            </div>
        </div>
    </div>
</div>

{data.map((value,key)=>{

 return <div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Name</label>
                    <input type="text" class="form-control" value={value.name}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Venue</label>
                    <input type="text"class="form-control" value={value.venue}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Organiser</label>
                    <input type="text"  class="form-control" value={value.organiser}/>
                </div>
                <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                    <label for="" className="form-label">Contact</label>
                    <input type="text" class="form-control" value={value.contact}/>
                </div>
            </div><br></br>
            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
            <button onClick={()=>{deleteData(value._id)}} className="btn btn-danger">DELETE</button></div>
        </div>
    </div>
</div>

})}


    </div>
  )
}

export default SearchEvent