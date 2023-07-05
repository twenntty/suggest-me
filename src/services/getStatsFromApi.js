export default async function getStatsFromApi() {
  let result = await fetch(
    "https://practice-api-vlasenko-bohdan.onrender.com/user/stats",
    {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
  return result;
}
