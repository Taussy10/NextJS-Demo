import Link from "next/link";

const Home = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums: { id: number; title: string }[] = await response.json();

  // console.log("Albums :", albums);

  return (
    <div>
      Hello, Dude
      {/* Container for all the data */}
      <div className=" mt-2">
        {albums.map((item, index) => {
          return (
            // <Link href={`/dashboard/users/${item.id}`} key={index} className="flex flex-row gap-2">
            <Link href={`/about/?name=Tausif`} key={index} className="flex flex-row gap-2">
              <h1>{item.id}</h1>
              <h1>{item.title}</h1>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Home;
