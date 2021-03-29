// Rewrite current function using async/await syntax
//  function loadJson(url) {
//     return fetch(url)
//       .then(response => {
//         if (response.status == 200) {
//           return response.json();
//         } else {
//           throw new Error(response.status);
//         }
//       })
//   }
  
//   loadJson('no-such-user.json') // (3)
//     .catch(alert); // Error: 404

async function loadJson(url) {
    try {
        let response = await fetch(url);
        if (response.status == 200) {
          return response.json();
        } else {
            throw new Error("Bad response from the server");
        }
    }
    catch (err) {
        console.log(err);
    }
  }

  loadJson('no-such-user.json');

// Перепишіть методи "loadJson" та "demoGithubUser" за допомогою async / await замість .then / catch.

class HttpError extends Error {
    constructor(response) {
        super(`${response.status} for ${response.url}`);
        this.name = 'HttpError';
        this.response = response;
    }
}

// function loadJson(url) {
// return fetch(url)
// .then(response => {
// if (response.status == 200) {
// return response.json();
// } else {
// throw new HttpError(response);
// }
// });
// }

async function loadJson(url) {
    try {
        const response = await fetch(url);
        if (response.status == 200) {
            return response.json();
        } else {
          throw new HttpError(response); 
        }
    }
    catch (err) {
        console.log(err.message)
    }
}

// Ask for a user name until github returns a valid user
// function demoGithubUser() {
// let name = prompt("Enter a name?", "iliakan");

// return loadJson(`https://api.github.com/users/${name}`)
// .then(user => {
// alert(`Full name: ${user.name}.`);
// return user;
// })
// .catch(err => {
// if (err instanceof HttpError && err.response.status == 404) {
// alert("No such user, please reenter.");
// return demoGithubUser();
// } else {
// throw err;
// }
// });
// }

async function demoGithubUser() {
let name = prompt("Enter a name?", "iliakan");
    try {
        const user = await loadJson(`https://api.github.com/users/${name}`);
        alert(`Full name: ${user.name}.`);
        return user;   
    } 
    catch (err) {
        if (err instanceof HttpError && err.response.status == 404) {
            alert("No such user, please reenter.");
            return demoGithubUser();
        } else {
            throw err;
        }
    }
}

demoGithubUser();