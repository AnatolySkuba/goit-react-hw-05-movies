import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header({ activePage, onClickPage }) {
  // const NAVIGATION = ['Home', 'Movies'];

  return (
    <nav className={s.nav}>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Home
      </NavLink>
      <NavLink
        to="/Movies"
        className={({ isActive }) => (isActive ? s.activeLink : s.link)}
      >
        Movies
      </NavLink>
    </nav>
  );

  // return (
  //   <ul className={s.list}>
  //     {NAVIGATION.map((page, index) => {
  //       let linkClass = activePage === page ? s.active : s.link;
  //       activePage === 'Search' && page === 'Movies' && (linkClass = s.active);
  //       return (
  //         <li className={s.item} key={index}>
  //           <NavLink
  //             className={linkClass}
  //             href="/"
  //             onClick={e => {
  //               e.preventDefault();
  //               onClickPage(page);
  //             }}
  //           >
  //             {page}
  //           </NavLink>
  //         </li>
  //       );
  //     })}
  //   </ul>
  // );
}
