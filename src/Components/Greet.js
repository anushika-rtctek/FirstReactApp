import react from 'react';

// function Greet(){
//     return <h1>Hello World</h1>
// }

export const Greet = (props) => {
    const {name, hero} = props
    return <div>
        <h1>Good Morning {name} aka {hero} </h1> 
    </div>
};

//export default Greet;