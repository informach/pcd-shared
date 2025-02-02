import { ObjectId } from "mongoose";

export interface IStudentDocument {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  profilePicture?: string;
  fullName?: string;
  profilePublicId?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  bio?: string;
  location?: string;
  dateOfBirth?: Date | string;
  parentId?: string | ObjectId;
  parentFullName?: string;
  parentCpf?: string;
  courses: string[];
  groups: string[];
}

export interface IReduxStudent {
  type?: string;
  payload: IStudentDocument;
}
