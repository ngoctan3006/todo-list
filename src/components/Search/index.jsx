import React from 'react';

const Search = ({ search, setSearch }) => {
  return (
    <div className="search">
      <input
        className="form-control"
        type="text"
        placeholder="Search ..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};

export default Search;
