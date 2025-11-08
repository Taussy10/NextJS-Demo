
const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();
  console.log("Albums :", albums);
  return (
    <div>
      {/* <button onClick={() => console.log("Hello")
      }>
        Hello
      </button> */}
      Hello, Dude
      <div className="bg-green-500  flex-row">

      {albums.map((item: { item: string }, index: { index: string }) => {
        return (
          <div key={index} className="">
            <div className=" flex-row">
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
            </div>
          </div>
        );
      })}
    </div>

      </div>
  );
};

export default Home;
