// const API_URL = process.env.REACT_APP_API_URL;
// var token = process.env.MY_KEY;
//
// const addCustomers = customers => {
//   return {
//     type: 'ADD_CUSTOMERS',
//     customers: Object.assign({}, supplier, { likes: 0 })
//   }
// }
//
// export const postCustomers = customers => {
//   return dispatch => {
//     return fetch(`${API_URL}`, {
//       method: "POST",
//       headers: {
//         'Content-Type': 'application/json',
//         Authorization: `Bearer ${token}`
//       },
//       body: customers
//     }).
//     .then(response => response.json())
//     .then(customers => {
//       dispatch(addCustomers(customers))
//     })
//       .catch(error => console.log(error))
//   }
// }
