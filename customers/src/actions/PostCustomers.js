const API_URL = process.env.REACT_APP_API_URL;
var token = process.env.MY_KEY;

export const postCustomers = customers => {
  return dispatch => {
    return fetch(`${API_URL}`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      },
      body: customers
    })
      .catch(error => console.log(error))
  }
}
