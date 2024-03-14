import Axios from 'axios';

export const base = Axios.create({
  baseURL: `https://stream-api.fantv.world/api`,
  headers: {
    "Content-Type": "application/json"
  }
})

export const getLive = async (liveSlug) => {
  const { data } = await base.get(`/lives/${liveSlug}`);
  return data;
}
