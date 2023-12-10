const usersUrl = new URL('https://jsonplaceholder.typicode.com/users');
fetch(usersUrl)
  .then(response => response.json())
  .then(users => {
    displayUsers(users);

    
    const postsUrl = new URL('https://jsonplaceholder.typicode.com/posts');
    return fetch(postsUrl, {
      method: 'POST',
      body: JSON.stringify({
        title: 'cim',
        body: 'tartalom',
        userId: 1
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    });
  })
  .then(response => response.json())
  .then(json => console.log(json))
  .catch(err => console.log('Valami hiba történt ' + err));
  function displayUsers(users) {

    let li = `<tr><th>Name</th><th>Email</th></tr>`;
       
    
    users.forEach(user => {
        li += `<tr>
            <td>${user.name} </td>
            <td>${user.email}</td>         
        </tr>`;
    });

    // Eredmény megjelenítése
    document.getElementById("users").innerHTML = li;
}