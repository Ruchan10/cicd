import './App.css';
import Users from './components/Users';

function App() {
    const handleDelete=(userId)=>{
        alert(userId)
    }
  return (
    <div >
      
      <Users/>
    </div>
  );
}

export default App;
