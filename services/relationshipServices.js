import { getRelationships, addRelationship, deleteRelationship } from "../model/relationshipModel.js";

export const getRelationshipServices = async (postId) => {
     const res = await getRelationships(postId);

     return { type: null, message: res };
};

export const addRelationshipServices = async (userId, postId) => {
     await addRelationship(userId, postId);

     return { type: null, message: "Post has been liked!" };
};

export const deleteRelationshipServices = async (userId, postId) => {
     await deleteRelationship(userId, postId);

     return { type: null, message: "Like has been removed!" };
};
