import { IJourney } from "./journey-interface";

const BASE_URL = "journeys";

export default {
  async getAllJourneys(): Promise<IJourney[] | undefined> {
    try {
      const data = await fetch(`http://localhost:5000/${BASE_URL}`);
      const response = await data.json();
      return response;
    } catch (error) {
      throw error;
    }
  },
};
