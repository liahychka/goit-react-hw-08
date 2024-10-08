import React from 'react';
import css from "./SearchBox.module.css"
import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';



function SearchBox({ value }) {
    const dispatch = useDispatch();
    return (
        <div>
            <label className={css.labelSearch}>
            <span>Find contacts by name</span>
        <input className={css.inputSearch} type="text" value={value} onChange={e => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
}

export default SearchBox;