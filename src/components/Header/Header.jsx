import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

export default function Header({ activePage, onClickPage }) {
  // const NAVIGATION = ['Home', 'Movies'];

  return (
    <nav className={s.list}>
      <NavLink to="/" activeclassname={s.activeLink} className={s.link}>
        Home
      </NavLink>
      <NavLink to="/Movies" activeclassname={s.activeLink} className={s.link}>
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
