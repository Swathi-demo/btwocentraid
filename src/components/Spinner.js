// src/components/Spinner.js
import React from 'react';
import './Spinner.css';

function Spinner() {
    return (
        <div className="spinner-overlay">
            <span className="loader"></span>
        </div>
    );
}

export default Spinner;
