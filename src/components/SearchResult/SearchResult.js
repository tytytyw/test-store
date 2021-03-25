import React from 'react';
import './SearchResult.css';
import PreviewList from '../PreviewList/PreviewList'

const SearchResult = ({text}) =>
    <>
    <div className='search-result'>
        <h1 className='search-result__title'>Результаты по запросу </h1>
        <h2 className='search-result__subtitle'>Показаны результаты для “{text}”. </h2>
        <h2 className='search-result__subtitle search-result__subtitle_old'>Вы искали “{text}”</h2>
    </div>
    <PreviewList />
    </>

SearchResult.defaultProps = {
    text: "Запрос пользователя"
}
    


export default SearchResult;