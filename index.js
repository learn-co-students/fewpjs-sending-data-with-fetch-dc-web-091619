// alert('connected');
// Add your code here
function submitData(name, email){
    return fetch("http://localhost:3000/users", {   //why do we need to return? console works without return but learn test do not?
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept" : "application/json"
        },
        body: JSON.stringify ({
            name,           //is this not needed?
            email           //it ran fine without this being added.
        })
    })
    .then(function(response){
        return response.json()
    })
    .then(function(object){
        console.log(object);       //used for me to see what object is in the console
        document.body.innerHTML =   `<h1>Name: ${object.name}, Email: ${object.email}, ID: ${object.id}</h1>`;  //since its innerHTML we can h1 tags!
        // debugger

    }).catch(function(error){
        alert("Bad Things!")
        console.log(error)
        document.body.innerHTML = error.message
    })
}