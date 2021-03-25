import React, {useState} from 'react';
import './FilterSettings.css';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';



const FilterSettings = ({categoryList, brandName, brandCount}) => {
   
    function valuetext(value) {
        return `${value}`;
    }
    // const classes = useStyles();
    // const [value, setValue] = useState([1000, 9000]);
    const [minValue, setMinValue] = useState(1000);
    const [maxValue, setMaxValue] = useState(9000);
    const handleChange = (event, newValue) => {
        // setValue(newValue);
        setMinValue(newValue[0])
        setMaxValue(newValue[1])
    };
      
    return (
        <aside className='filter-settings'>
            <div className='filter-settings__category'>
                <p className='filter-settings__category-title'>Все категории</p>
                <ul className='filter-settings__category-list'>
                    {categoryList.map((item, index) => index < 7 ?
                        <li key={index} className='filter-settings__category-item'>{item} <span>(ххх)</span></li> : "")}
                    {categoryList.length > 8 ?
                        <li key={'key'} className='filter-settings__category-item'>Ещё {categoryList.length - 8} категорий...</li> : ""}
                </ul>
            </div>
            <div className='filter-settings__price'>
                <p className='settings-title'>Цена, валюта</p>
            </div>

            <div className='price-slider'>
                <div className='price-slider__wrap'>
                    <span className='price-slider__text'>от</span>
                    <input className='price-slider__input price-slider__input_min' onChange={(e) => setMinValue(e.target.value)} value={minValue} />
                    <span className='price-slider__text'>до</span>
                    <input className='price-slider__input price-slider__input_max' onChange={(e) => setMaxValue(e.target.value)} value={maxValue}/>
                    <span className='price-slider__text'>р</span>
                </div>
                <Typography id="range-slider" gutterBottom></Typography>
                <Slider
                    max={10000}
                    value={[minValue, maxValue]}
                    onChange={handleChange}
                    valueLabelDisplay="off"
                    aria-labelledby="range-slider"
                    getAriaValueText={valuetext}
                />
            </div>
            <form className='filter-settings__brands brands'>
                <div className='filter-settings__brands-header'>
                    <p className='settings-title'>Бренды</p>
                    <input className='brands__reset-btn' type='reset' value='Очистить'></input>
                </div>
                <ul className='brands__list'>
                    <li className='brands__item'>
                        <input className='brands__check' type='checkbox'></input>
                        <span className='brands__name'>{brandName}</span>
                        <span className='brands__count'>({brandCount})</span>
                    </li>
                    <li className='brands__item'>
                        <input className='brands__check' type='checkbox'></input>
                        <span className='brands__name'>{brandName}</span>
                        <span className='brands__count'>({brandCount})</span>
                    </li>
                    <li className='brands__item'>
                        <input className='brands__check' type='checkbox'></input>
                        <span className='brands__name'>{brandName}</span>
                        <span className='brands__count'>({brandCount})</span>
                    </li>
                </ul>
            </form>

        </aside>
    )
                }
FilterSettings.defaultProps = {
    categoryList: [
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то',
        'Категория в которой нашли что-то'
    ],
    brandName: 'Бренд',
    brandCount: 'xxx'
}

export default FilterSettings;