import { databases } from "@/appWrite";
let databaseId = "648f52150d203d4db457";
let collectionId = "648f522cc61a72a5fba1";
export const getTodosGroupedByColumn = async () => {
  const data = await databases.listDocuments(databaseId, collectionId);
  console.log(data);
};
