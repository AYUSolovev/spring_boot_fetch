fetch('http://localhost:8080/article/fetch/post/user', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
        id:'1',
        login:'Login',
        password:'Password',
        firstName:'firstName',
        lastName:'lastName'
    })}).then();



async function postData(url = '', data = {}) {
    // Default options are marked with *
    const response = await fetch(url, {
        method: 'POST', // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json'
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *client
        body: form // body data type must match "Content-Type" header
    });
    return await response.json(); // parses JSON response into native JavaScript objects
}
postData('http://localhost:8080/article/fetch/post/user', {
    id: '1',
    login: 'Login',
    password: 'Password',
    firstName: 'firstName',
    lastName: 'lastName'
})
    .then((data) => {
        console.log(data); // JSON data parsed by `response.json()` call
    });





let data = new FormData(document.getElementById("my-awesome-dropzone"));
console.log("Created FormData, " + [...data.keys()].length + " keys in data");
fetch('http://localhost:8080/article/fetch/post/user', {
    method: 'POST', // *GET, POST, PUT, DELETE, etc.
    mode: 'cors', // no-cors, *cors, same-origin
    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    credentials: 'same-origin', // include, *same-origin, omit
    headers: {
        'Content-Type': 'application/json'
        // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow', // manual, *follow, error
    referrerPolicy: 'no-referrer', // no-referrer, *client
    body: data
}).then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok.');
    }
}).catch((err) => {
    console.log(err);
});