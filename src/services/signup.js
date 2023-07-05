export default async function signup(email, password) {
    let result = await fetch(
        "https://practice-api-vlasenko-bohdan.onrender.com/user/signup",
        {
          method: "post",
          body: JSON.stringify({ email, password }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    return result;
};
