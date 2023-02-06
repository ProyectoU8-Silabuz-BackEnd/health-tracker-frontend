export default async function loginUser(credentials) {
    const response =  await fetch("https://health-tracker-backend-production.up.railway.app/api/v1/user/login", {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    });
    
    console.log(response);
    const data = await response.json();

    return data.user.token;

}