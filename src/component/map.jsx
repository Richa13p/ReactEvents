import React from 'react'
import { Emp } from '../value'
// const Emp = [{
//     name:"Richa",
//     joinDate:2023
// },{
//     name:"Megha",
//     joinDate:2023
// },{
//     name:"Rashmi",
//     joinDate:2023
// },{
//     name:"Yashika",
//     joinDate:2023
// },{
//     name:"Dani",
//     joinDate:2023
// },{
//     name:"Shivam",
//     joinDate:2023
// },{
//     name:"Abdul",
//     joinDate:2023
// },

// ]
const Map = () => {
    const list = Emp.map(person =>
        <li>{person.name}</li> )
  return (
    <div>
        <ul>
           {list}
        </ul>
    </div>
  )
}

export default Map