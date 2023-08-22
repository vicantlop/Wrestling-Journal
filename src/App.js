import Navbar from "./components/Navbar";
import GratitudesCard from "./components/cards/GratitudesCard";
import PracticeGoalsCard from "./components/cards/PracticeGoalsCard";

function App() {
  return (
    <div className="App">
      <Navbar />
      <GratitudesCard />
      <PracticeGoalsCard />
    </div>
  );
}

export default App;
