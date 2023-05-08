import { useRef, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import useFetch from "./hooks/useFetch";
import getRandomLocation from "./utils/getRandomLocation";
import banner from "./assets/img1.png";

function App() {
  const [inputValue, setInputValue] = useState(getRandomLocation());

  const url = `https://rickandmortyapi.com/api/location/${inputValue}`;
  const [location, hasError] = useFetch(url);

  const inputLocation = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setInputValue(inputLocation.current.value);
  };

  return (
    <div className="app">
      <img className="banner" src={banner} alt="banner" />
      <form className="app__form" onSubmit={handleSubmit}>
        <input
          className="app__input"
          ref={inputLocation}
          type="text"
          placeholder="enter location 1 to 125"
        />
        <button className="app__btn">Search</button>
      </form>
      {hasError ? (
        <h2 className="app__error">
          ❌ Hey! you must provide an id from 1 to 126 😢
        </h2>
      ) : (
        <MainContent location={location} />
      )}
    </div>
  );
}

export default App;
