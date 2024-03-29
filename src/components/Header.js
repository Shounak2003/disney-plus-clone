import styled from
 
'styled-components';
import { db } from
 
'../firebase';
import { getAuth, GoogleAuthProvider, signInWithPopup } from
 
'firebase/auth';
import { useDispatch, useSelector } from
 
'react-redux';
import { useNavigate } from
 
'react-router-dom';
import { selectUserName, selectUserPhoto, selectUserEmail, setUserLoginDetails } from '../features/user/userSlice';
import { Provider } from 'react-redux';
import store from '../../app/store'; // Adjust the path if needed

const Header = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const username = useSelector(selectUserName);
  const userphoto = useSelector(selectUserPhoto);


  
const auth = getAuth(); // Get auth instance
  const provider = new GoogleAuthProvider();

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };

  const setUser = (user) => {
    dispatch(setUserLoginDetails({

      
name: user.displayName,
      email: user.email, // Comma here, not semicolon
      photo: user.photoURL,
    }));
  };

  return (
    <Nav>

      
<Logo>

        
<img
 
src='/images/logo.svg'
 
alt='Disney+' />

      
</Logo>

      {!username ? (
        <Login
 
onClick={handleAuth}>Login</Login>
      ) : null}

      
      <NavMenu>
        <a href='/home'>
          <img src='images/home-icon.svg' alt='HOME' />
          <span>HOME</span>
        </a>
        <a>
          <img src='images/search-icon.svg' alt='SEARCH' />
          <span>SEARCH</span>
        </a>
        <a>
          <img src='images/watchlist-icon.svg' alt='WATCHLIST' />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src='images/original-icon.svg' alt='ORIGINALS' />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src='images/movie-icon.svg' alt='MOVIES' />
          <span>MOVIES</span>
        </a>
        <a>
          <img src='images/series-icon.svg' alt='SERIES' />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <Login onClick={handleAuth}>
            Login     
      </Login>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 4px;
  max-height: 70px;
  font-size: 0;
  display: inline-block;
  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  height: 100%;
  justify-content: flex-end;
  margin: 0;
  padding: 0;
  position: relative;
  margin-right: auto;
  margin-left: 25px;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    cursor: pointer; /* Add this line */

    img {
      height: 20px;
      min-width: 20px;
      width: 20px;
      z-index: auto;
    }

    span {
      color: rgb(249, 249, 249);
      font-size: 13px;
      letter-spacing: 1.42px;
      line-height: 1.08;
      padding: 2px 0px;
      margin: 2px 0 0 5px;
      white-space: nowrap;
      position: relative;

      &:before {
        content: '';
        background-color: white;
        border-radius: 0 0 4px 4px;
        width: auto;
        bottom: -6px;
        height: 2px;
        opacity: 0;
        position: absolute;
        right: 0;
        left: 0;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
      }
    }

    &:hover {
      span:before {
        transform: scaleX(1);
        opacity: 1;
      }
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Login = styled.a`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #f9f9f9;
    color: black;
    cursor: pointer;
    border-color: transparent;  // Fix the typo here
  }
`;

export default Header;
