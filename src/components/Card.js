
const Card = ({starship, handleClick}) => {


  return (
    <>
      <div className="card">
        <h3>{starship.name}</h3>
        <h5 onClick={() => handleClick}>Details...</h5>
      </div>
    </>
  );   
}

export default Card