import axios from "axios";

export default {
  // Gets all books
  getSaved: function () {
    return axios.get("/api/movie");
  },
  getTitle: function (name) {
    return axios.get("/api/movie/" + name);
  },
  saveTitle: function(movie) {
    return axios.post("/api/movie/", movie);
  },
  deleteTitle: function(movie) {
    console.log(movie)
    return axios.delete("/api/movie/" + movie, movie);
  },
};
