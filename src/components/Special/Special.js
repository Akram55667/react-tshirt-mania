import React, { useContext } from 'react';
import { RingContext } from '../Grandpa/Grandpa';

const Special = ({ornament}) => {
    const ring = useContext(RingContext)
    return (
        <div>
            <h4>Special</h4>
            <h6>Gift: {ornament}</h6>
            <h5>New Gift: {ring}</h5>
        </div>
    );
};

export default Special;