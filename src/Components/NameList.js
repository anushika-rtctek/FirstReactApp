import React from 'react'
import Person from './Person'

function NameList() {
    // const names = ['Bruce', 'Clark', 'Diana']
    // const nameList = names.map(name => <h2>{name}</h2>)

    const persons = [
        {
            id: 1,
            name: 'Clark',
            age: 45,
            skill: 'Angular'
        },
        {
            id: 2,
            name: 'Diana',
            age: 56,
            skill: 'React'
        },
        {
            id: 3,
            name: 'John',
            age: 35,
            skill: 'Vue'
        }
    ]
    const personList = persons.map(person => <Person person={person}/>)
  return (
    <div>{personList}</div>
  )
}

export default NameList
