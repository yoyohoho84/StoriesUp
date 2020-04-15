
import * as actionTypes from "./actionTypes";



export const getPhoto = (photo) => {
  console.log('GROUP IS CHOOSEN ====>', photo)
  return {
    type: actionTypes.GET_STORIES_PHOTO,
    photo: photo,
  };
};



