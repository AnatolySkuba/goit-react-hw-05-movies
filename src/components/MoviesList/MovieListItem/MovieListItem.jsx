export default function MovieListItem({ title, id, onClickMovie }) {
  return (
    <li>
      <a href="/#" onClick={() => onClickMovie(id)}>
        {title}
      </a>
    </li>
  );
}
