import react from 'react';

const Hello = () => {
    // return <div>
    //     <h1>Hello Anushika</h1>
    // </div>

    return react.createElement(
        "div", 
        {id: "hello", className: "dummyClass"}, 
        react.createElement("h1", null, "Hello Anushika"));
}

export default Hello;