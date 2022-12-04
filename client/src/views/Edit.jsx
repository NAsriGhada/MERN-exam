import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";
import Nav from '../components/Nav';

const Edit = () => {
    const { id } = useParams();
    const navigate = useNavigate()
    const [petName, setName]= useState("")
    const [petType, setType]= useState("")
    const [petDesc, setDescription]= useState("")
    const [skillOne, setSkillOne]= useState("")
    const [skillTwo, setSkillTwo]= useState("")
    const [skillThree, setSkillThree]= useState("")


    useEffect(() => {
        axios.get('http://localhost:8000/api/pet/' + id)
            .then(res => {
                setName(res.data.petName);
                setType(res.data.petType);
                setDescription(res.data.petDesc);
                setSkillOne(res.data.skillOne);
                setSkillTwo(res.data.skillTwo);
                setSkillThree(res.data.skillThree);
            })
    }, [id]);

    const updatePet = e => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/pets/edit/' + id, {
          petName,
          petType,
          petDesc,
          skillOne
        })
            .then(res => navigate("/"))
            .catch(err => console.error(err));
    }
  return (
    <div>
        <nav>
            <Nav />
            <h1>Edit {petName}</h1>
        </nav>
        <form  onSubmit={updatePet}>
          <div className='navList'>
              <div>
            <div>
            <label>Pet Name:</label>
            <br />
            <input type="text" value={petName} onChange={e => {setName(e.target.value)}} />
            
          </div>
          <div>
            <label>Pet Type:</label>
            <br />
            <input type="text" value={petType} onChange={e => {setType(e.target.value)}} />
          </div>
          <div>
            <label>Pet Description:</label>
            <br />
            <textarea  value={petDesc} onChange={e => {setDescription(e.target.value)}} />
          </div>
          <input className="btn btn-primary" type="submit" value="Edit Pet" />
              </div>

              <div>
            <div>
            <label>Skills:</label>
            <br />
            <div>
              <label>Skill 1:</label> <br />
              <input type="text" value={skillOne} onChange={e => {setSkillOne(e.target.value)}} />
            </div>
            <div>
              <label>Skill 2:</label> <br />
              <input type="text" value={skillTwo} onChange={e => {setSkillTwo(e.target.value)}} />
            </div>
            <div>
              <label>Skill 3:</label> <br />
              <input type="text" value={skillThree} onChange={e => {setSkillThree(e.target.value)}} />
            </div>
            
          </div>
              </div>
          </div>
        
          
        </form>
    </div>
  )
}

export default Edit