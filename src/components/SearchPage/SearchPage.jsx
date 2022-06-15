import { useState } from 'react';
import s from './SearchPage.module.css';

export default function SearchPage({ onClickSearch }) {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
  };

  const handleChange = e => {
    setQuery(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input onChange={handleChange} value={query} />
        <button onClick={() => onClickSearch(query)}>Search</button>
      </form>
    </>
  );
}
