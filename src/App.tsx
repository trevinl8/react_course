import ListGroup from "./components/ListGroup";

function App() {
  const cities = [
    "London",
    "Belfast",
    "Nottingham",
    "Birmingham",
    "Wellington",
  ];

  const handleSelectCity = (cities: string) => {
    console.log(cities);
  };
  return (
    <div>
      <ListGroup
        cities={cities}
        heading="Cities of England"
        onSelectCity={handleSelectCity}
      />
    </div>
  );
}

export default App;
