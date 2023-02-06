export async function loginUser(credentials) {
    return fetch('https://health-tracker-backend-production.up.railway.app/api/v1/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
}