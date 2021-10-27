import s from './SearchForm.module.scss';

export default function SearchForm({ query, onSubmit, onChange }) {
  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        value={query}
        className={s.input}
      />
      <button type="submit" className={s.btn}>
        Search
      </button>
    </form>
  );
}
