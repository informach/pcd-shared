import { ObjectId } from "mongoose";

export interface IParentDocument {
  _id?: string | ObjectId;
  username?: string;
  email?: string;
  profilePicture?: string;
  fullName?: string;
  purchasedCourses: string[];
  hasActiveSubscription?: boolean;
  createdAt?: Date | string;
  updatedAt?: Date | string;
  cpf?: string;
}

export interface IReduxParent {
  type?: string;
  payload: IParentDocument;
}
