import Navbar from "./components/Navbar";
import GratitudesCard from "./components/cards/GratitudesCard";
import NeedsImprovementCard from "./components/cards/NeedsImpovementCard";
import PositivesCard from "./components/cards/PositivesCard";
import PracticeGoalsCard from "./components/cards/PracticeGoalsCard";
import Login from "./components/user/Login";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Login />
      {/* <GratitudesCard />
      <PracticeGoalsCard />
      <PositivesCard />
      <NeedsImprovementCard /> */}
    </div>
  );
}

export default App;
