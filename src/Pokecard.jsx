import './Pokecard.css';

const Pokecard = ({ name, image, type, baseExperience }) => {
  return (
    <div className="col">
      <div className="Pokecard">
        <h4 className="Pokecard-name">{name}</h4>
        <img src={image} alt={name} />
        <p>Type: {type}</p>
        <p>EXP: {baseExperience}</p>
      </div>
    </div>
  );
};

export default Pokecard;
