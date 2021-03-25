import React from 'react';
import './Search.css';

const Search = ({text}) => {
    const inputIsFocus = (e) => e.target.value = null;
    const inputUnfocus = (e) => e.target.value = "Запрос пользователя";
    return (
    <div className='search'>
        <div className='search__area'>
            <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.45614 14.5819C3.35526 14.5819 0 11.2845 0 7.25431C0 3.29741 3.35526 0 7.45614 0C11.557 0 14.9123 3.29741 14.9123 7.32759C14.8377 11.3578 11.557 14.5819 7.45614 14.5819ZM7.45614 1.46552C4.17544 1.46552 1.49123 4.10345 1.49123 7.32759C1.49123 10.5517 4.17544 13.1897 7.45614 13.1897C10.7368 13.1897 13.4211 10.5517 13.4211 7.32759C13.3465 4.10345 10.7368 1.46552 7.45614 1.46552Z" fill="black"/>
                <path d="M3.28077 7.3276H2.53516C2.53516 4.68967 4.772 2.49139 7.45621 2.49139V3.22415C5.14481 3.22415 3.28077 5.05605 3.28077 7.3276Z" fill="black"/>
                <path d="M16.2543 17C16.0306 17 15.8815 16.9267 15.7324 16.7802L11.5569 12.6767C11.2587 12.3836 11.2587 11.944 11.5569 11.6509C11.8552 11.3578 12.3025 11.3578 12.6008 11.6509L16.7762 15.7543C17.0745 16.0474 17.0745 16.4871 16.7762 16.7802C16.7017 16.9267 16.478 17 16.2543 17Z" fill="black"/>
            </svg>
            <input onBlur={inputUnfocus} onFocus={inputIsFocus} className='search__input' type='text' value={text}/>
        </div>
        <button className='search__button'>Найти</button>
        <button className='search__button-close'>Закрыть</button>
    </div>
)   
    Search.defaultProps = {
        text: "Запрос пользователя"
    }
}

export default Search;