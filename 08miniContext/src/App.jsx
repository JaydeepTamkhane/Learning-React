import Profile from "./components/Profile";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import './App.css'
function App() {
  return (
    <UserContextProvider>
      <h1>hi jaydeep</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
