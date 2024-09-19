import UserCard from "./components/UserCard"
import batman1 from "./assets/batman1.jpg"
import batman2 from "./assets/batman2.jpg"
import batman3 from "./assets/batman3.jpg"



function App() {

  return (
    <div className="container">
      <UserCard name="The Batman" desc="I'm vengeance" image={batman1} style={{"border-radius":"10px"}}/>
      <UserCard name="Batman Begins" desc="Fear is a tool" image={batman2} style={{"border-radius":"10px"}}/>
      <UserCard name="Dark Knight" desc="Knight King" image={batman3} style={{"border-radius":"10px"}}/>
    </div>
  )
}

export default App
