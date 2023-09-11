export default async function signup(email, password) {
    let result = await fetch(
        `${process.env.REACT_APP_API_URL}/user/signup`,
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
