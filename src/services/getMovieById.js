export default async function getMovieById(id) {
    const response = await fetch(
        `${process.env.REACT_APP_API_URL}/movie/${id}`
      );
    return response;
};
