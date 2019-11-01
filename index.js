function submitData(name, email ){
  let destUrl = "http://localhost:3000/users";
  let userData = {
    name: name,
    email: email
  };

  return fetch(destUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(userData)
  })
    .then(response => response.json())
    .then(userData => appendToDOM(userData))
    .catch(error => appendError(error))

  function appendToDOM(userData){
    let body = document.querySelector('body')

    // let usersContainer = document.createElement('div')
    // usersContainer.id = "user-container"

    let newUser = document.createElement('div')
    newUser.id = `user-${userData.id}`
    
    let newUserName = document.createElement('h2')
    newUserName.innerText = userData.name

    let newUserEmail = document.createElement('a')
    newUserEmail.href = `mailto:${userData.email}`
    newUserEmail.innerText = userData.email

    
    body.append(newUser)
    newUser.append(newUserName, newUserEmail)
  }

  function appendError(error){
    let body = document.querySelector('body')

    let errorMessage = document.createElement('p')
    errorMessage.innerHTML = error.message

    body.append(errorMessage)
  }
}