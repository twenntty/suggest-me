export default async function logout() {
    let result = await fetch(`${process.env.REACT_APP_API_URL}/auth/signout`, {
        method: 'delete',
        headers: {
          'Content-Type' : 'application/json',
          Authorization: `Bearer ${localStorage.accessToken}`
        }
      });
    return result;
};
