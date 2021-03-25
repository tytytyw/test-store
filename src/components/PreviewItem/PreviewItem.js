import React from 'react';
import './PreviewItem.css';

const PreviewItem = ({categoryName, categoryCount}) =>
    <div className='category-preview__item'>
        <div className='category-preview__pic'></div>
        <div className='category-preview__decr'>
            <h3 className='category-preview__name'> {categoryName} </h3>
            <p className='category-preview__count'> {categoryCount} товара </p>
        </div>
    </div>

PreviewItem.defaultProps = {
    categoryName: 'Название категории',
    categoryCount: 134
}

export default PreviewItem;