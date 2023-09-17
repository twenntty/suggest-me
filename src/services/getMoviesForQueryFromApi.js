export default async function getMoviesForQueryFromApi(value, manual = false) {
  const headers = {};
  if (localStorage.accessToken)
    headers.Authorization = `Bearer ${localStorage.accessToken}`;
  const response = await fetch(
    `${process.env.REACT_APP_API_URL}/movie?genre=${value}&manual=${manual}`,
    { headers }
  );
  return response;
}
