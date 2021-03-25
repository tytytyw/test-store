import React from 'react';
import './Pagination.css';

const Pagination = () => 
    <div className='pg'>
        <span className='pg__count'>2</span>
        <span className='pg__count current'>3</span>
        <span className='pg__count'>...</span>
        <span className='pg__count'>13</span>
        <span className='pg__next'></span>
    </div>

export default Pagination;