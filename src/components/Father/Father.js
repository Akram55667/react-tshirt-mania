import React from 'react';
import MySelf from '../MySelf/MySelf'
import Sister from '../Sister/Sister';
import Brother from '../Brother/Brother'

const Father = () => {
    return (
        <div>
            <h4>Father</h4>
            <MySelf></MySelf>
            <Brother></Brother>
            <Sister></Sister>
        </div>
    );
};

export default Father;