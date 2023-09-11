export default async function getStatsFromApi() {
  let result = await fetch(
    `${process.env.REACT_APP_API_URL}/user/stat`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.accessToken}`,
      },
    }
  );
  return result;
}
