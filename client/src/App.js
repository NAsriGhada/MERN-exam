import './App.css';
import { Routes , Route} from 'react-router-dom';
import Main from './views/Main';
import NewPet from './views/NewPet';
import Details from './views/Details';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Main />} path="/"/>
        <Route element={<NewPet />} path="/pets/new"/>
        <Route element={<Details />} path="/pets/:id"/>
        <Route element={<Edit />} path="/pets/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
