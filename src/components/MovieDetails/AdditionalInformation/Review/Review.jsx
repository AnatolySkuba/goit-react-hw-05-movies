export default function Review({ review }) {
  return (
    <ul>
      {review.map(({ author, content }, index) => {
        return (
          <li key={index}>
            <h4>Author: {author}</h4>
            <p>{content}</p>
          </li>
        );
      })}
    </ul>
  );
}
