import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Nav from './Nav'

const Form = () => {
    const [petName, setPetName]= useState("")
    const [petType, setPetType]= useState("")
    const [petDesc, setPetDescription]= useState("")
    const [skillOne, setSkillOne]= useState("")
    const [skillTwo, setSkillTwo]= useState("")
    const [skillThree, setSkillThree]= useState("")

    // HANDLING ERRORS
    const [errHand,setErrHand]=useState([])
    const [errMesssage,setErrorMessage]=useState([])

    const navigate = useNavigate()


    const submitHandler = e => {
        e.preventDefault()
        const newPet = {
            petName,
            petType,
            petDesc,
            skillOne,
            skillTwo,
            skillThree
        }
    
        axios.post("http://localhost:8000/api/pets", newPet)
        .then(res =>  navigate('/'))
        .catch(err => {
           
        const errorResponse = err.response.data.errors
            const errArr=[]
            const errObj={}
        for(const key of Object.keys(errorResponse)){
            // console.log(errorResponse[key].message);
              errArr.push(errorResponse[key].message)
              errObj[key]= errorResponse[key].message
            }
            // console.log(errArr)
            setErrHand(errArr)
            setErrorMessage(errObj)
          }) 
    }


  return (
    <div>
      <Nav />
      <h2>Know a pet needing a home?</h2>
        <form onSubmit={submitHandler}>
        {/* {
          errHand.map((err)=>{
            return (
              <p>{err}</p>
            )
          })
          } */}
          <div className='navList'>
          <div className='firstRow'>
          <div>
            <label>Pet Name:</label>
            <br />
            <input type="text" value={petName} onChange={e => {setPetName(e.target.value)}} />
            {errMesssage.petName ? <p>{errMesssage.petName}</p> : null}
          </div>
          <div>
            <label>Pet Type:</label>
            <br />
            <input type="text" value={petType} onChange={e => {setPetType(e.target.value)}} />
            {errMesssage.petType ? <p>{errMesssage.petType}</p> : null}
          </div>
          <div>
            <label>Pet Description:</label>
            <br />
            <textarea  value={petDesc} onChange={e => {setPetDescription(e.target.value)}} />
            {errMesssage.petDesc ? <p>{errMesssage.petDesc}</p> : null}
          </div>
          <input className="btn btn-primary" type="submit" value="Add Pet" />
          </div>
          <div className='seconRow'>
          <div>
            <label>Skills (optional)</label>
            <div>
              <label>Skill 1:</label> <br />
              <input type="text" value={skillOne} onChange={e => setSkillOne(e.target.value)} />
            </div>
            <div>
            <label>Skill 2:</label> <br />
              <input type="text" value={skillTwo} onChange={e => setSkillTwo(e.target.value)}/>
            </div>
            <div>
            <label>Skill 3:</label> <br />
              <input type="text" value={skillThree} onChange={e => setSkillThree(e.target.value)}/>
            </div>
          </div>
          </div>
          </div>
        </form>
    </div>
  )
}

export default Form