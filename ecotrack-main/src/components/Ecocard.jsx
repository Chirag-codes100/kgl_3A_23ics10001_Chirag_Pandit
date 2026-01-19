function Ecocard({ activity, carbon }) {
  return (
    <div className="card">
      <h3>{activity}</h3>
      <p>Carbon Impact: {carbon}</p>
    </div>
  );
}

export default Ecocard;
