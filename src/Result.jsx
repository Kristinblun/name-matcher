export default function Result({ favoriteNames }) {
  return (
    <>
      <h1> Your favorite names are: </h1>
      <ul>
        {favoriteNames.map((name, index) => (
          <li key={index}> {name}</li>
        ))}
      </ul>
    </>
  );
}
