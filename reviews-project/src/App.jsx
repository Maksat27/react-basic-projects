import { useState } from "react";
import people from "./data";
import { FaQuoteRight } from "react-icons/fa";
import { GrPrevious, GrNext } from "react-icons/gr";

const App = () => {
  let [currentIndex, setCurrentIndex] = useState(0);

  const { name, job, image, text } = people[currentIndex];

  const nextPerson = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % people.length);
  };

  const prevPerson = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + people.length) % people.length
    );
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * people.length);
    if (randomNumber === currentIndex) {
      randomNumber = currentIndex + 1;
    }
    const newIndex = randomNumber % people.length;
    setCurrentIndex(newIndex);
  };

  return (
    <main>
      <article className="review">
        <div className="img-container">
          <img src={image} alt={name} className="person-img" />
          <span className="quote-icon">
            <FaQuoteRight />
          </span>
        </div>
        <h4 className="author">{name}</h4>
        <p className="job">{job}</p>
        <p className="info">{text}</p>
        <div className="btn-container">
          <button className="prev-btn" onClick={() => prevPerson()}>
            <GrPrevious />
          </button>
          <button className="next-btn" onClick={() => nextPerson()}>
            <GrNext />
          </button>
        </div>
        <button className="btn btn-hipster" onClick={() => randomPerson()}>
          surprise me
        </button>
      </article>
    </main>
  );
};
export default App;
