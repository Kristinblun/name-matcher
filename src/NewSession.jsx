import Baby from "./Baby";
import Pet from "./Pet";
export default function NewSession() {
  return (
    <>
      <div className="new-session-container">
        <h1>Choose your category: </h1>

        <div className="category-wrapper">
          <Baby />
          <Pet />
        </div>
      </div>
    </>
  );
}
