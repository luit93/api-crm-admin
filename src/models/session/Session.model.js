import SessionSchema from "./Session.schema.js";

//create
export const storeAccessJWT = (obj) => {
  return SessionSchema(obj).save();
};
//get by id
export const getAccessJWT = (obj) => (filter) => {
  return SessionSchema.findOne(filter);
};

//delete user
export const deletesessionToken = (filter) => {
  return SessionSchema.findOneAndDelete(filter); //
};
