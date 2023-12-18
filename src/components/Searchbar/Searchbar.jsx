import React, { useState } from 'react';
import {
  HeaderSearchbar,
  SearchForm,
  SearchFormButton,
  SearchFormButtonLabel,
  SearchFormInput,
} from './Searchbar.Staled';

export const Searchbar = ({ getSearch }) => {
  const [search, setSearch] = useState('');

  const searchbarInputChange = e => {
    setSearch(e.target.value);
  };

  const searchbarSubmit = e => {
    e.preventDefault();
    getSearch(search);
  };

  return (
    <HeaderSearchbar>
      <SearchForm onSubmit={searchbarSubmit}>
        <SearchFormButton type="submit" className="button">
          <SearchFormButtonLabel>Search</SearchFormButtonLabel>
        </SearchFormButton>

        <SearchFormInput
          className="input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          onChange={searchbarInputChange}
          value={search}
        />
      </SearchForm>
    </HeaderSearchbar>
  );
};
