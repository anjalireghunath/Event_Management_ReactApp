import React from 'react'
import Header from './Header'

const View = () => {
    var viewEvent=[
        {
            "name":"Anjali",
            "date":"12/10/21",
            "venue":"online",
            "organiser":"Anish",
            "contact":"9846435642"
        },
        {
            "name":"Nidhin",
            "date":"12/10/21",
            "venue":"online",
            "organiser":"Anish",
            "contact":"9865438765"
        },
        {
            "name":"Divya",
            "date":"20/10/21",
            "venue":"online",
            "organiser":"Mathew",
            "contact":"9847867543"
        },
        {
            "name":"Sruthy",
            "date":"13/10/21",
            "venue":"online",
            "organiser":"Mohith",
            "contact":"9846435768"
        },
        {
            "name":"Adhi",
            "date":"14/10/21",
            "venue":"online",
            "organiser":"George",
            "contact":"9846435642"
        }
    ]
    
  return (
    <div>
<Header/>
<div className='container'>
          <div className='row'>
            <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
            <div className='row g-3'>
                <div className='col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12'>
                <table class="table table-primary table-striped">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Date</th>
      <th scope="col">Venue</th>
      <th scope="col">Organiser</th>
      <th scope="col">Contact</th>
    </tr>
  </thead>
  <tbody>
    {viewEvent.map((value,key)=>{
      return <tr>
      <td>{value.name}</td>
      <td>{value.date}</td>
      <td>{value.venue}</td>
      <td>{value.organiser}</td>
      <td>{value.contact}</td>
    </tr>
    })}
    
    
    
  </tbody>
</table>



                    </div>
               

              </div>

            </div>

          </div>

        </div>

    </div>
  )
}

export default View