import {
  SET_DATA_JSON,
  SET_DATA_DETAIL,
  SET_DATA_COIN,
  SET_DATA_COVID,
} from "../actionTypes/index";
import axios from "axios";
const baseUrl = "https://jsonplaceholder.typicode.com/posts";

function successFetchUserPost(payload) {
  return {
    type: SET_DATA_JSON,
    data: payload,
  };
}

function fetchUserPosts() {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}`, {
        method: "GET",
      });

      if (!response.ok)
        throw new Error("Failed fetch data from jsonplaceholder");

      const userPosts = await response.json();
      console.log(userPosts, "INI USERPOST DI ACTION");

      dispatch(successFetchUserPost(userPosts));
    } catch (error) {
      console.log(error);
    }
  };
}

function addUserPosts(payload) {
  return async (dispatch) => {
    try {
      const response = await fetch(`${baseUrl}`, {
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
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "GET",
      });

      if (!response.ok)
        throw new Error("Failed fetch data from jsonplaceholder");

      const detailPost = await response.json();

      dispatch(successFetchDetail(detailPost));
    } catch (error) {
      console.log(error);
    }
  };
}

function editPostAction(payload, id) {
  return async (dispatch) => {
    try {
      delete payload.id;

      const response = await fetch(`${baseUrl}/${id}`, {
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
      const response = await fetch(`${baseUrl}/${id}`, {
        method: "DELETE",
      });

      dispatch(fetchUserPosts());
    } catch (error) {
      console.log(error);
    }
  };
}

function successFetchCoinsData(payload) {
  return {
    type: SET_DATA_COIN,
    data: payload,
  };
}

function fetchCoinsData() {
  return async (dispatch) => {
    try {
      let apiKey =
        "coinrankingf63b42037dcb180c6f909b5fb55452a51210809e7a38b5d4";
      let coinURL = "https://api.coinranking.com/v2/coins/?limit=10";
      let proxyUrl = "https://cors-anywhere.herokuapp.com/";

      let response = await axios(`${proxyUrl}${coinURL}`, {
        method: "GET",
        headers: {
          "Content-type": "application/json",
          "x-access-token": `${apiKey}`,
          "Access-Control-Allow-Origin": "*",
        },
      });

      console.log(response, "ini responsenya");

      if (!response.ok) throw new Error("Failed fetch coin ranking data");

      let coinRanking = await response.json();

      dispatch(successFetchCoinsData(coinRanking));
    } catch (error) {
      console.log(error);
    }
}};

function successFetchCovidData(payload) {
  return {
    type: SET_DATA_COVID,
    data: payload,
  };
}

  function fetchDataCovid() {
    return async (dispatch) => {
      try {

        let response = await fetch('https://api.covid19api.com/summary', {
          method: "GET",
        });
  
  
        if (!response.ok) throw new Error("Failed fetch covid data");
  
        let covidData = await response.json()


       let dataCovidToStored =   await covidData?.Countries.slice(0,10)
  
        dispatch(successFetchCovidData(dataCovidToStored));
      } catch (error) {
        console.log(error);
      }
    };


  

}

export {
  fetchUserPosts,
  addUserPosts,
  postDetail,
  editPostAction,
  deleteUserPosts,
  fetchCoinsData,
  fetchDataCovid
};
