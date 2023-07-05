export default async function getNewTokens() {
    let resCheckToken = await fetch(`https://practice-api-vlasenko-bohdan.onrender.com/user/token`, {
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
