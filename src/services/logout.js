export default async function logout() {
    let result = await fetch("https://practice-api-vlasenko-bohdan.onrender.com/user/logout", {
        method: 'delete',
        body: JSON.stringify({ refreshToken: localStorage.refreshToken }),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
    return result;
};
