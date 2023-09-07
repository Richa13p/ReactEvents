import React from 'react'
import { Emp } from '../value'
const Map2 = () => {
    
      const emp  =  Emp.map((person)=>  person.joinDate)
    //  const   Emp.map(person => <li></li> )
      
  return (
    <div>
        <ul>

        {/* //error in this part */}
           <li>{emp}</li>
        {/* ek hi line mai aa raha hai */}
           {/* {
            Emp.map((person)=>{
                <li>{person.joinDate}</li>
            })
           } */} 

        </ul>
    </div>
  )
}

export default Map2