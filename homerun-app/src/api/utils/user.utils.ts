export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  properties: string[];
  _id: string;
}

export interface IUserComment {
  firstName: string;
  lastName: string;
  email: string;
  avatar: string;
  properties: string[];
  _id: string;
}

export interface IUserLogin {
  email: string;
  password: string;
}
