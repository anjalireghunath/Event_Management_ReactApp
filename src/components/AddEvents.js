import React, { useState } from 'react'

const AddEvents = () => {
    var [name,setName]=useState("")
    var [date,setDate]=useState("")
    var [venue,setVenue]=useState("")
    var [organiser,setOrganiser]=useState("")
    var [contact,setContact]=useState("")
    const addData=()=>{
        const data={"name":name,"date":date,"venue":venue,"organiser":organiser,"contact":contact}
        console.log(data)
    }
  return (
    <div>


<div className="container">
    <div className="row">
        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
            <div className="row g-3">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Name</label>
                    <input onChange={(e)=>{setName(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Date</label>
                    <input onChange={(e)=>{setDate(e.target.value)}} type="date" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Venue</label>
                    <input onChange={(e)=>{setVenue(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Organiser</label>
                    <input onChange={(e)=>{setOrganiser(e.target.value)}} type="text" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label for="" className="form-label">Contact Number</label>
                    <input onChange={(e)=>{setContact(e.target.value)}} type="number" name="" id="" className="form-control"/>
                </div>
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button onClick={addData} className="btn btn-primary">SUBMIT</button>
                </div>
            </div>
        </div>
    </div>
</div>

    </div>
  )
}

export default AddEvents