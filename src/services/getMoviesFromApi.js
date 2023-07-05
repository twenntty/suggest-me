export default async function getMoviesFromApi(params) {
  const headers = {};
  if (localStorage.accessToken)
    headers.Authorization = `Bearer ${localStorage.accessToken}`;
  const response = await fetch(`https://practice-api-vlasenko-bohdan.onrender.com/movie/list`, { headers });
  return response;
}
