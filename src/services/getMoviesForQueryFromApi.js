export default async function getMoviesForQueryFromApi(value, manual = false) {
  const headers = {};
  if (localStorage.accessToken)
    headers.Authorization = `Bearer ${localStorage.accessToken}`;
  const response = await fetch(
    `https://practice-api-vlasenko-bohdan.onrender.com/movie/list?genre=${value}&manual=${manual}`,
    { headers }
  );
  return response;
}
