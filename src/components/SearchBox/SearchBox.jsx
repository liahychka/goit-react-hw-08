import React from 'react';
import css from "./SearchBox.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter, selectFilters } from '../../redux/filtersSlice';



function SearchBox() {
    const dispatch = useDispatch();
    const filter = useSelector(selectFilters);
    return (
        <div>
            <label className={css.labelSearch}>
                <span>Find contacts by name</span>
                <input className={css.inputSearch} type="text" value={filter} onChange={e => dispatch(changeFilter(e.target.value))} />
            </label>
        </div>
    );
}

export default SearchBox;