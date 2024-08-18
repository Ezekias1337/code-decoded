export interface User {
  emailAddress: string;
}

export interface UserReturnedFromDB {
  _id: string;
  name: string;
  emailAddress: string;
  role: string[];
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}
