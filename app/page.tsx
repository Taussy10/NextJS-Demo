const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: { id: number; title: string }[] = await response.json();
  // console.log("Albums :", albums);
  return (
    <div>
      {/* <button onClick={() => console.log("Hello")
      }>
        Hello
      </button> */}
      Hello, Dude
      {/* Container for all the data */}
      <div className=" mt-2">
        {albums.map((item, index) => {
          return (
            <div key={index} className="flex flex-row gap-2">
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
