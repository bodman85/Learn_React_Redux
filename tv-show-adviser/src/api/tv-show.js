import axios from "axios";
import { FAKE_POPULARS, FAKE_RECOMMENDATIONS } from "./fake_data";
import { BASE_URL, OPTIONS } from "../config";

export class TVShowAPI {
  static async fetchPopulars() {
    const response = await axios.get(
      `${BASE_URL}tv/popular?language=en-US&page=1`,
      OPTIONS
    );
    console.log(response.data.results);
    return response.data.results;
    //return FAKE_POPULARS;
  }

  static async fetchRecommendations(tvShowId) {
    const response = await axios.get(
      `${BASE_URL}tv/${tvShowId}/recommendations`,
      OPTIONS
    );
    console.log(response.data.results);
    return response.data.results;
    //return FAKE_RECOMMENDATIONS;
  }

  static async fetchByTitle(title) {
    try{
    const response = await axios.get(
      `${BASE_URL}search/tv?query=${title}&include_adult=true&language=en-US&page=1`,
      OPTIONS
    );
    console.log(response.data.results);
    return response.data.results;
    } catch (error){
      alert("Something went wrong while firing request to the remote API");
    }
    //return FAKE_RECOMMENDATIONS;
  }
}
