import { useState } from "react";
import "./index.css";
import data from "./data";
import List from "./List";

const App = () => {
  let [people, setPeople] = useState(data);

  return (
    <main>
      <section className="container">
        <h3>{people.length} Birthdays Today </h3>
        <List people={people} />
        <button
          type="button"
          className="btn btn-block"
          onClick={() => setPeople([])}
        >
          Clear all
        </button>
      </section>
    </main>
  );
};
export default App;
