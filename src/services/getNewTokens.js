export default async function getNewTokens() {
    let resCheckToken = await fetch(`${process.env.REACT_APP_API_URL}/auth/tokens`, {
        method: "post",
        body: JSON.stringify({ token: localStorage.refreshToken }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (resCheckToken.status === 200) {
        let result = await resCheckToken.json();
        localStorage.accessToken = result.accessToken;
        localStorage.refreshToken = result.refreshToken;
        return true;
      } else {
        return false;
      }
};
