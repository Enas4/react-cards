import Cards from "./components/Cards/Cards";
import CardData from "./components/Cards/Cards_data";
import "./App.css";

function App() {
  return (
    <>
      <h1>" Top 5 Beautiful Images "</h1>
      <div className="App">
        {CardData.map((val, i) => {
          return (
            <Cards
              key={i}
              imgsrc={val.imgsrc}
              title={val.title}
              link={val.link}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
