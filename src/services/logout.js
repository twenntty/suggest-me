export default async function logout() {
    let result = await fetch(`${process.env.REACT_APP_API_URL}/auth/signout`, {
        method: 'delete',
        body: JSON.stringify({ refreshToken: localStorage.refreshToken }),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
    return result;
};
