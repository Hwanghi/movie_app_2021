const foodLike = [
  {
    name: 'Kimchi',
    image: 'kimchi.jpg'
  },
  {
    name: 'Bibimbap',
    image: 'bibimbap.jpg',
  },
  {
    name: 'Kimbap',
    image: 'kimbap.jpg',
  },
];
function Food({name, picture}) {
  return (
    <div>
      <h1>{name}</h1>
      <img src={picture} />
    </div>
  );
  
  
}
function App() {
  return (
  <div> 
    <h1>Hello react!</h1>
    {foodLike.map(dish => (
      <Food name={dish.name} picture={dish.image}/>
    ))}
  </div>
  );
}

export default App;
