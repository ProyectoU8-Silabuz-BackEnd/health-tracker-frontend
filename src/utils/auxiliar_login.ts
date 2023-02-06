export async function loginUser(credentials) {
    return fetch("https://health-tracker-backend-production.up.railway.app/api/v1/user/login", {
      mode: 'no-cors',
      method: 'POST',
      cache: 'no-cache',
      credentials: 'same-origin',
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    }).then((data) => console.log(data)).then((data) => data.json());


}