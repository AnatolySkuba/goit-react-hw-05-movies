import s from './Header.module.css';

export default function Header({ activePage, onClickPage }) {
  const NAVIGATION = ['Home', 'Movies'];

  return (
    <ul className={s.list}>
      {NAVIGATION.map((page, index) => {
        let linkClass = activePage === page ? s.active : s.link;
        activePage === 'Search' && page === 'Movies' && (linkClass = s.active);
        return (
          <li className={s.item} key={index}>
            <a
              className={linkClass}
              href="/"
              onClick={e => {
                e.preventDefault();
                onClickPage(page);
              }}
            >
              {page}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
