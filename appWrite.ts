import { Client, Account, Databases, ID, Storage } from "appwrite";

const appWriteClient = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1")
  .setProject(process.env.APP_WRITE_PROJECT_ID!);
console.log(appWriteClient);

const account = new Account(appWriteClient);
const database = new Databases(appWriteClient);
const storage = new Storage(appWriteClient);

export { appWriteClient, storage, account, database, ID };
