import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../store/AuthContext';
import {
  HeaderContainer,
  LinkProducts,
  ImageLogo,
  ContainerItems,
  ButtonLogout,
} from './NavbarStyles';

export function Navbar() {
  const history = useHistory();

  const { auth, isAuth } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem('token');
    isAuth(null);
    history.push('/');
  };

  return (
    <HeaderContainer className="Header__container">
      <div className="Header__logo-container">
        <LinkProducts to="/products" className="Header__logo-path">
          <ImageLogo
            className="Header__logo-image"
            alt="Logo from MJV"
            src="https://www.mjvinnovation.com/wp-content/themes/mjv/img/mjv.png"
          />
          <p>Product</p>
        </LinkProducts>
      </div>
      <div className="Header__nav">
        { auth && (
          <ContainerItems className="Header__nav-items">
            <li className="Header__nav-item">
              <Link to="/profile" className="Header__nav-profile">
                Profile
              </Link>
            </li>
            <li className="Header__nav-item">
              <ButtonLogout onClick={handleLogout} className="Header__nav-logout">
                Logout
              </ButtonLogout>
            </li>
          </ContainerItems>
        )}
      </div>
    </HeaderContainer>
  );
}
