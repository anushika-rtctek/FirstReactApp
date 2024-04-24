import React from 'react'
import Person from './Person'

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana', 'Bruce']
    const nameList = names.map((name, index) => <h2 key={index}>{index} {name}</h2>)

    // const persons = [
    //     {
    //         id: 1,
    //         name: 'Clark',
    //         age: 45,
    //         skill: 'Angular'
    //     },
    //     {
    //         id: 2,
    //         name: 'Diana',
    //         age: 56,
    //         skill: 'React'
    //     },
    //     {
    //         id: 3,
    //         name: 'John',
    //         age: 35,
    //         skill: 'Vue'
    //     }
    // ]
    // const personList = persons.map(person => <Person key={person.id} person={person}/>)
 
    return (
    <div>{nameList}</div>
  )
}

export default NameList
