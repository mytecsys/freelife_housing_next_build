export function ApiPostMethodWithToken(url, data, token, method = 'POST'){
  return fetch(url, {
    method: method,
    headers: {'Content-Type': 'application/json', 'Authorization': token},
    body: JSON.stringify(data)
  })
  .then((resp) => resp.json())
  .then(function(result) {
      return result;
  });
}

export function ApiGetMethodWithToken(url, data, token, method = "GET"){
return fetch(url, {
  method:method,
  headers: {'Content-Type': 'application/json', 'Authorization': token}
})
.then((resp) => resp.json())
.then(function(result) {
  return result;
});
}