import "./App.css";
import God from "../public/god.jpg";
import cyberpunk from "../public/cyberpunk.jpg";
import cod from "../public/cod.jpg";
import Game from "../components/Game"
function App() {
  return (
    <>
      <div className="container">
      <Game name="God of War" desc="Kratos, God of War" image={God} style={{"border-radius":"10px"}}/>
      <Game name="Cyberpunk 2077" desc="CyberCity" image={cyberpunk} style={{"border-radius":"10px"}}/>
      <Game name="Call of Duty" desc="Ghost" image={cod} style={{"border-radius":"10px"}}/>
    </div>
    </>
  );
}

export default App;
