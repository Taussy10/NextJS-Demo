
import React from "react";

// But which user's detail has to render ?
// Get the user information from there and add here
const UserDetails = async ({ params }: { params: Promise<{ id: string }> }) => {
  //   const router = useRouter();
  const { id } = await params;

  return (
    <div>
      <h1>I'm user {id}</h1>
    </div>
  );
};

export default UserDetails;
