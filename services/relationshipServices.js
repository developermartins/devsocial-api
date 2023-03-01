import { getRelationships, addRelationship, deleteRelationship } from "../model/relationshipModel.js";

export const getRelationshipServices = async (followedUserId) => {
     const res = await getRelationships(followedUserId);

     return { type: null, message: res };
};

export const addRelationshipServices = async (followerUserId, followedUserId) => {
     await addRelationship(followerUserId, followedUserId);

     return { type: null, message: "Following!" };
};

export const deleteRelationshipServices = async (userId, postId) => {
     await deleteRelationship(userId, postId);

     return { type: null, message: "Like has been removed!" };
};
