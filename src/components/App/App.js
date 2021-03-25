import React, {useState} from 'react';
import './App.css';
import Header from '../Header/Header.js'
import Search from '../Search/Search';
import SearchResult from '../SearchResult/SearchResult';
import FilterSettings from '../FilterSettings/FilterSettings';
import Products from '../Products/Products';
import Pagination from '../Pagination/Pagination'


function App() {

  const [productList, setproductList] = useState()

  return (
    <div className="App">
      <Header />
      <div className="wrap">
        <Search />
        <SearchResult />
        <div className="container">
          <FilterSettings />
          <main className='main'>
            <div className='sort-settings'>
              <div className='sort-settings__btns-wrap'>
                <span>Сортировать по:</span>
                <button className='sort-settings__btn active'>популярности</button>
                <button className='sort-settings__btn'>сначала дешевые</button>
                <button className='sort-settings__btn'>сначала дорогие</button>
              </div>
              <div className='sort-settings__count-wrap'>
                <span className='sort-settings__count-text'>показывать по</span>
                <select className='sort-settings__count'>
                  <option className='sort-settings__option'>24</option>
                  <option className='sort-settings__option'>36</option>
                  <option className='sort-settings__option'>48</option>
                  <option className='sort-settings__option'>64</option>
                </select>
              </div>
            </div>

            <div className='sort-settings__correction'>
              <button className='sort-settings__correction-btn active'>Уточнение</button>
              <button className='sort-settings__correction-btn'>Уточнение</button>
              <button className='sort-settings__correction-btn'>Уточнение</button>
              <button className='sort-settings__correction-btn'>Уточнение</button>
            </div>

            <Products />
            <Pagination />
          </main>
        </div>
      </div>
      
    </div>
  );
}


export default App;
