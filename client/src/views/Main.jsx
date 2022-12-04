import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import PetList from '../components/PetList';

const Main = () => {
  const [pets, setPets] = useState([])

    const [loaded, setLoaded] = useState(false)


    useEffect(() => {
        axios.get('http://localhost:8000/api/pets')
        .then( res => {
            console.log(res.data)
            setPets(res.data)
            setLoaded(true)
        })
        .catch(err => console.log(err))
    }, [])

    const removeFromDom = petsId => {
      setPets(pets.filter(pets => pets._id !== petsId));
  }
  return (
    <div className='app'>
      <div className='navList'>
      <h1>Pet Shelter</h1>
      <Link to={"/pets/new"}> add a pet to the shelter</Link>
      </div>
      <h2>These pets are looking for a good home</h2>
        {/* <Link to="/pet/new" className="btn btn-primary">Add Pet</Link> */}
      { loaded && <PetList pets={pets} removeFromDom={removeFromDom}/>}
    </div>
  )
}

export default Main