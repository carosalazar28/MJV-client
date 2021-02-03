import { Link, useHistory } from 'react-router-dom';

export function Navbar() {
  const history = useHistory();

  const token = localStorage.getItem('token');

  const handleLogout = () => {
    localStorage.removeItem('token');
    history.push('/');
  };

  return (
    <header className="Header__container">
      <div className="Header__logo-container">
        <Link to="/products" className="Header__logo-path">
          <img
            className="Header__logo-image"
            alt="Logo from MJV"
            src="https://www.mjvinnovation.com/wp-content/themes/mjv/img/mjv.png"
          />
          <p>Product</p>
        </Link>
      </div>
      <div className="Header__nav">
        <ul className="Header__nav-items">
          { token && (
            <li className="Header__nav-item">
              <Link to="/profile" className="Header__nav-profile">
                Profile
              </Link>
            </li>
          )}
          <li className="Header__nav-item">
            <button onClick={handleLogout} className="Header__nav-logout">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
