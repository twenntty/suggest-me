export default async function getMovieById(id) {
    const response = await fetch(
        `https://practice-api-vlasenko-bohdan.onrender.com/movie/${id}`
      );
    return response;
};
