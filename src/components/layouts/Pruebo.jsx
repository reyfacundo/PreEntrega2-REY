import React, {useState} from 'react';

const Pruebo = () => {
    const [state, setstate] = useState(0);
    return (
        <>
        <button className='btn btn-dark' onClick={()=> setstate (state + 1)}>Haceme click</button>
        <p>cantidad de veces que diste click: {state}</p>
        </>
    );
}

export default Pruebo;