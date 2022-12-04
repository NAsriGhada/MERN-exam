import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import Nav from '../components/Nav'

const Details = () => {
  const [details,setDetails]=useState({})
  const { id } = useParams()
  const navigate = useNavigate()
  const [count, setCount] = useState(0);

  useEffect(()=>{
    axios.get("http://localhost:8000/api/pet/" + id)
    .then((response)=> {
      console.log(response.data);
      setDetails(response.data)
    })
    .catch((error)=> console.log(error))
  },[id])

  const deleteHundler = (id) =>{
    axios.delete("http://localhost:8000/api/pet/delete/"+id)
    .then(response => {setDetails(response.data);
      navigate("/")
    }
    )
    .catch(err => console.log(err))
  }

  return (
    <div className='app'>
       {
        (details) ?
        <div>
          <nav>
            <Nav/>
            <div className='navList'>
              <h1>Details about: {details.petName}</h1>
              <button className="btn btn-danger" onClick={(e) => {deleteHundler(id)} }>Adopt {details.petName}</button>
            </div>
          </nav>
          <div className='list'>
              <p>Pet Type: {details.petType}</p>
              <p>Description: {details.petDesc}</p>
              <p>Skills: {details.sKillOne}</p>
              <p>{details.sKillTwo}</p>
              <p>{details.sKillThree}</p>
              <div className='flex'>
              <button class="btn btn-success" onClick={() => setCount(count + 1)}>Like {details.petName}</button>
              <p>{count} like(s)</p>
              </div>
              
          </div>
        </div> : null
      }
    </div>
  )
}

export default Details