import s from './Cast.module.css';

export default function Cast({ cast }) {
  return (
    <ul>
      {cast.map(({ name, profile_path, character }, index) => {
        return (
          <li key={index}>
            {profile_path && (
              <img
                className={s.img}
                src={`https://image.tmdb.org/t/p/w500${profile_path}`}
                alt={name}
              />
            )}
            <p>{name}</p>
            <p>{`Character: ${character}`}</p>
          </li>
        );
      })}
    </ul>
  );
}
