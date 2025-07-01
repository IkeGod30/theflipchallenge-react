// DELETE COMPONENT; USED FOR EXP.


import { useState } from 'react';


export default function Main() {
    
const [Part, setPart] = useState('');

const data = ['NY', 'NJ', 'TX', 'CT'
    // {id: 1, name: 'New York', population: 15000000},
    // {id: 2, name: 'New Jersey', population: 9000000},
    // {id: 3, name: 'Texas', population: 10000000},
    // {id: 4, name: 'DC', population: 5000000},
    // {id: 5, name: 'Maryland', population: 7000000},

];

const data1 = data.map(name => 
    <a href="#" style={{textDecoration: 'none', color: 'tomato'}}><li style={{display: 'inline', margin: '5px'}}>{name}</li></a>)

function changePart() {
    setPart('The Mechanics of React Native')
    alert(Part);
    console.log(Part)
}

    return(
        <>
        <div>
            <h1>Main Component</h1>
            <input type="submit" onClick={changePart}/>
            <ul>{data1}</ul>
        </div>
        </>
    );
}


export function Second({title, Part}) {
    return(
        <>
        <div>
            <h2>Second Component</h2>
            <h3>{title}</h3>
            <h2>{Part}</h2>
            {/* <h2>{data.id}</h2> */}
        </div>
        </>
    );
}