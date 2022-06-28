import React from 'react';
import Uncle from '../Uncle/Uncle';
import Father from '../Father/Father';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css'

const Grandpa = () => {
    return (
        <div className='grandpa' style={{display:'flex'}}>
            <Father></Father>
             <Uncle></Uncle>
              <Aunty></Aunty>
        </div>
    );
};

export default Grandpa;