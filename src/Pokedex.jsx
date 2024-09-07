import Pokecard from './Pokecard';
import pokemons from './pokemons';
import './Pokedex.css';

const Pokedex = () => {
  return (
    <>
      <h1>Pokedex</h1>
      <div className="row">
        {pokemons.map((p) => (
          <Pokecard
            key={p.id}
            name={p.name}
            image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${p.id}.png`}
            type={p.type}
            baseExperience={p.base_experience}
          />
        ))}
      </div>
    </>
  );
};

export default Pokedex;
