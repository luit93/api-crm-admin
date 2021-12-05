import AdminUserSchema from "./User.schema.js";

//create
export const createAdminUser = (obj) => {
  return AdminUserSchema(obj).save();
};
//get by id
export const getAdminUserById = (_id) => {
  return AdminUserSchema.findById(_id);
};
//get one user by filter

export const getOneAdminUser = (filter) => {
  return AdminUserSchema.findOne(filter);
};
////get all users by filter
export const getAllAdminUsers = (filter) => {
  return AdminUserSchema.find(filter);
};
//update one
export const updateOneAdminUser = (filter, obj) => {
  return AdminUserSchema.findOneAndUpdate(filter, obj, { new: true });
};
//delete user
export const deleteOneAdminUser = (filter, obj) => {
  return AdminUserSchema.findOneAndDelete(filter); //
};
