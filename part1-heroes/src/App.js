import './App.css';
import SuperheroCard from './components/SuperheroCard';
import Datahero from './components/Data.json';

function App() {
  return (
    <div className="App">
      {Datahero.map((hero) => (
        <SuperheroCard
          name={hero.name}
          universe={hero.universe}
          alterego={hero.alterego}
          occupation={hero.occupation}
          friends={hero.friends}
          superpowers={hero.superpowers}
          url={hero.url}
        />
      ))}
    </div>
  );
}

export default App;
