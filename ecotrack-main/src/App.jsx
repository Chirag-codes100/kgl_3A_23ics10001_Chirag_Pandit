import Navbar from "./components/Navbar";
import EcoCard from "./components/Ecocard";
import ecoData from "./data/ecodata";

function App() {

  // reduce() → calculate total carbon impact
  const totalCarbon = ecoData.reduce(
    (sum, item) => sum + item.carbon,
    0
  );

  // filter() → only eco-friendly activities
  const ecoFriendly = ecoData.filter(
    item => item.carbon < 0
  );

  return (
    <>
      <Navbar />

      <h2>Eco Activities</h2>

      {/* map() → render UI */}
      {ecoData.map(item => (
        <EcoCard
          key={item.id}
          activity={item.activity}
          carbon={item.carbon}
        />
      ))}

      <h3>Total Carbon Impact: {totalCarbon}</h3>

      <h2>Eco-Friendly Actions</h2>
      {ecoFriendly.map(item => (
        <EcoCard
          key={item.id}
          activity={item.activity}
          carbon={item.carbon}
        />
      ))}
    </>
  );
}

export default App;
