import React from "react";

const FetchPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) throw new Error("Failed to fetch data");

  const albums = await response.json();
console.log("Albus :",albums)
  return <div>FetchPosts</div>;
};

export default FetchPosts;
