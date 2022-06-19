import { Outlet } from 'react-router';
import { Header, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
