import '../css/pages/Search.css';

export default function Search() {
  return (
  <form className="search-form" name="search-form" method="GET">
      <label htmlFor="search-bar">
        Search for a recipe
        </label>
      <input className="search-bar" name="search-bar" id="search-bar" type="text"/>
      <button className="search-button" name="search-button" type="submit">
        Search
        </button>
    </form>
    );
}
