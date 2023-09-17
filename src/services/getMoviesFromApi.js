export default async function getMoviesFromApi(params) {
  const headers = {};
  if (localStorage.accessToken)
    headers.Authorization = `Bearer ${localStorage.accessToken}`;
  const response = await fetch(`${process.env.REACT_APP_API_URL}/movie`, { headers });
  return response;
}
