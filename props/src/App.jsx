import Greet from "./components/Greet";
import Welcome from "./components/Welcome";
function App() {
  return (
    <>
      <div>
        <Greet name="Bruce" heroname="Batman" />
        <p>I'm Vengence</p>
        <Greet name="Tony" heroname="Ironman" />
        <p>I'm Ironman</p>
        <Greet name="Eddy" heroname="Venom" />
        <p>We're Venom</p>
      </div>

      <Welcome name="Bruce" heroname="Batman" />
      <Welcome name="Tony" heroname="Ironman" />
      <Welcome name="Eddy" heroname="Venom" />
    </>
  );
}

export default App;
