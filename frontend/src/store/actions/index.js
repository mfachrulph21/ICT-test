import { SET_DATA_JSON, SET_DATA_DETAIL } from "../actionTypes/index";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function successFetchUserPost(payload) {
  return {
    type: SET_DATA_JSON,
    action: payload,
  };
}

function fetchUserPosts() {
  return async (dispatch) => {
    try {
      const response = await fetch({
        url: `${baseUrl}`,
        method: "GET",
      });

      if (!response.ok)
        throw new Error("Failed fetch data from jsonplaceholder");

      const userPosts = await response.json();

      dispatch(successFetchUserPost(userPosts));
    } catch (error) {
      console.log(error);
    }
  };
}

function addUserPosts(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch({
        url: `${baseUrl}`,
        method: "POST",
        body: JSON.stringify(payload),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      if (!response.ok) throw await response.text();

      dispatch(fetchUserPosts());
    } catch (error) {
      console.log(error);
    }
  };
}

function successFetchDetail(payload) {
  return {
    type: SET_DATA_DETAIL,
    data: payload,
  };
}

function postDetail(id) {
  return async (dispatch) => {
    try {
      const response = await fetch({
        url: `${baseUrl}/${id}`,
        method: "GET",
      });

      if (!response.ok)
        throw new Error("Failed fetch data from jsonplaceholder");

      const detailPost = response.json();

      dispatch(successFetchDetail(detailPost));
    } catch (error) {
      console.log(error);
    }
  };
}

function editPost(payload, id) {
  return async (dispatch) => {
    try {
      const response = await fetch({
        url: `${baseUrl}/${id}`,
        method: "PUT",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) throw response;

      dispatch(fetchUserPosts());
    } catch (error) {
      console.log(error);
    }
  };
}

function deleteUserPosts(id) {
  return async (dispatch) => {
    try {
      const response = await fetch({
        url: `${baseUrl}/${id}`,
        method: "DELETE",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      });

      dispatch(fetchUserPosts());
    } catch (error) {
      console.log(error);
    }
  };
}

export { fetchUserPosts, addUserPosts, postDetail, editPost, deleteUserPosts };
