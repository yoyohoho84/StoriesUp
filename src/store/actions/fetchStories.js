
import * as actionTypes from "./actionTypes";



export const fetchDelayStoriesSuccess = (storiesData) => {
  console.log('FETCH STORIES  ====>', storiesData)
  return {
    type: actionTypes.FETCH_DELAY_STORIES_SUCCESS,
    storiesData: storiesData,
  };
};

export const fetchDelayStories =  (data) => {
  console.log("FETCH STARTED");
  return async (dispatch) => {
     try {
      const someData = await data;
      dispatch(fetchDelayStoriesSuccess(someData));
    } catch (error) {
      console.log('ERROR FROM ASYNC FUNC ===>', error);
    }
  };
};



