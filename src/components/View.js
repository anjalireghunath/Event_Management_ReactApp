import axios from 'axios'
import React, { useState } from 'react'
import Header from './Header'

const View = () => {
    var [viewevent,setViewevent]=useState([])
    var [loadstatus,setLoadstatus]=useState(true)
    axios.get("http://localhost:4007/api/eventview").then((response)=>{
      console.log(response.data)
      setViewevent(response.data)
      setLoadstatus(false)
    })
    
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
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>

{loadstatus ? <div class="spinner-border" role="status">
  <span class="visually-hidden">Loading...</span>
</div> :  <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Organiser</th>
      <th scope="col">Contact</th>
      <th scope="col">Action</th>
    </tr>
  </thead>
  <tbody>
    {viewevent.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.date}</td>
      <td>{value.venue}</td>
      <td>{value.organiser}</td>
      <td>{value.contact}</td>
      <button className="btn btn-danger" onClick={()=>{deleteData(value._id)}}>DELETE</button>
    </tr>
    })}
    
    
    
  </tbody>
</table>



}

               

                    </div>
               

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default View