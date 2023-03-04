export interface IUser {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
  properties: string[];
}

export interface IUserLogin {
  email: string;
  password: string;
}
