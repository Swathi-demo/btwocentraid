// src/components/SearchModal.js
import React from 'react';
import './SearchModal.css';

function SearchModal({ isOpen, onClose }) {
    if (!isOpen) return null;

    return (
        <div className="search-modal-overlay" onClick={onClose}>
            <div className="search-modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="close-button" onClick={onClose}>✖</button>
                <input
                    type="text"
                    placeholder="Search"
                    className="search-modal-input"
                />
                <div className="search-tags">
                    <span># infographic</span>
                    <span># Defender XDR</span>
                    <span># Sentinel</span>
                    <span># Copilot</span>
                    <span># Comparison</span>
                </div>
            </div>
        </div>
    );
}

export default SearchModal;
