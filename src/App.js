import { NavBar } from "./components/NavBar"
import { Outlet } from "react-router-dom"


export default function App() {
  return (
    <div>
      <NavBar />
      <Outlet />
    </div>
  );
}

// function App() {
//   return (
//     <div>
//      Hey Team 😇
//      Hey Team Again 😇
//     </div>
//   );
// }

//export default App;
