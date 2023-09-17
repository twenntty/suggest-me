export default async function login(email, password) {
    let result = await fetch(`${process.env.REACT_APP_API_URL}/auth/signin`, {
        method: 'post',
        body:JSON.stringify({email, password}),
        headers: {
          'Content-Type' : 'application/json'
        }
      });
    return result;
}