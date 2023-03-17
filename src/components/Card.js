
const Card = ({starship}) => {


  return (
    <>
      <div className="card">
        <h3>{starship.name}</h3>
        <h5>Details...</h5>
      </div>
    </>
  );   
}

export default Card