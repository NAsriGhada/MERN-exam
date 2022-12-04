import React from 'react'
import { Link } from 'react-router-dom'

const PetList = ({pets}) => {
  return (
    <div>
        <table className="table table-bordered table-striped table-hover">
            <thead>
                <tr class="table-secondary">
                <th scope="col">Name</th>
                <th scope="col">Type</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
        {
            pets.map((pet, i) => {
                return  <tbody key={i}>
                <tr class="table-light">
                <td>{pet.petName}</td>
                <td>{pet.petType}</td>
                <td> <Link className="btn btn-primary" to={"/pets/" + pet._id}>Details</Link> | <Link to={"/pets/" + pet._id + "/edit"} className="btn btn-primary">Edit</Link></td>
                </tr>
            </tbody>
                
            })
        }
        </table>
    </div>
  )
}

export default PetList