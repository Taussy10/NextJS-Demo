import { books } from "../db";

// In server we have 4 function: GET, POST, UPDATE and DELETE

export const GET = () => {
  return Response.json(books);
};

export async function POST(request: Request) {
  const book = await request.json();
  books.push(book);
  return Response.json(books);
}
