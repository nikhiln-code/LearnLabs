function ListGroup() {
  let items = ["New York", "India", "Australia"];
  //items = [];

  return (
    <>
      <h1 className="backdrop-blur-md">Countries as list</h1>
      {items.length === 0 && <p>No list to display</p>}
      <ul className="w-screen h-scree list-group">
        {items.map((item) => (
          <li key={item} className="list-group-item">
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
