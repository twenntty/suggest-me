export default async function signup(email, password, name = 'default') {
    let result = await fetch(
        `${process.env.REACT_APP_API_URL}/auth/signup`,
        {
          method: "post",
          body: JSON.stringify({ email, password, name }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
    return result;
};
