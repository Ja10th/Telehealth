import { ID, Query } from "node-appwrite";
import { users } from "../appwrite.config";
import { parseStringify } from "../utils";

export const createUser = async (user: CreateUserParams) => {

    console.log(`Creating user with email: ${user.email} and phone: ${user.phone}`);

  try {
    const newUser = await users.create(
      ID.unique(),
      user.email,
      user.phone,
      undefined,  // password
      user.name
    );
    console.log({ newUser });
    return parseStringify(newUser);  // Make sure to return the parsed user object.
  } catch (error: any) {
    if (error?.code === 409) {
      console.log("User already exists. Fetching existing user...");
      const documents = await users.list([Query.equal("email", user.email)]);
      console.log("Fetched users: ", documents);  // Log the fetched users
      return documents?.users[0];  // Return the first matching user.
    } else {
      console.error("Error creating user: ", error);
      throw error;  // Ensure you're throwing the error if it's not handled.
    }
  }
};
