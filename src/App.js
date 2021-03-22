import './App.css';
import Users from './Components/Users/Users';
import Groups from './Components/Groups/Groups';

function App() {
  return (
    <div className="app">

      <div className="section">
        <h2>Users</h2>
        <Users />
      </div>

      <div className="section">
        <h2>Groups:</h2>
        <Groups />
      </div>

    </div>
  );
}

export default App;
