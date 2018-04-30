export type User = {
  _id: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  skills: string[];
}

export type Query = {
  allUsers(searchTerm: string): User[];
}

export type Mutation = {
  register(email: string, password: string, firstName: string, lastName: string): User;
}
