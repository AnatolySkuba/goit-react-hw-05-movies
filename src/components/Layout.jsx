import { Outlet } from 'react-router';
import { Header, Link } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <Header>
        <nav>
          <Link to="/goit-react-hw-05-movies/">Home</Link>
          <Link to="/goit-react-hw-05-movies/movies">Movies</Link>
        </nav>
      </Header>
      <Outlet />
    </>
  );
};
