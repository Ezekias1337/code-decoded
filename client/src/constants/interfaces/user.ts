export interface User {
  emailAddress: string;
}

export enum Role {
  "Admin",
  "Admin Assistant",
  "Employee",
  "User"
}

export interface UserReturnedFromDB {
  id: string;
  name: string;
  emailAddress: string;
  phoneNumber: string;
  role: Role;
  profilePicture: Buffer;
  profilePictureType: string;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}
