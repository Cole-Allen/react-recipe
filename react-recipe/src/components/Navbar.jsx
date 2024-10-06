import '../css/components/Navbar.css';

export default function Navbar() {
  return (
    <header>
      <div className="header-container">
        <a className="header-logo">
          <img data-target="search" src="../image/logo.svg" />
        </a>
        <div className="nav-bar">
          <a data-target="recipe">Random</a>
          <a data-target="favorites">Favorites</a>
          <a data-target="search">Search</a>
        </div>
      </div>
    </header>
  );
}
