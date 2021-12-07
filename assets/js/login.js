document.getElementById('pushLogin').addEventListener("click", function(event) {
    event.preventDefault();
    console.log('Work Login');

    let dataLogin = {
            "email": document.getElementById('login').value,
            "password": document.getElementById('passToLogin').value,
        };

     console.log(dataLogin);
        let urlLogin = 'https://api.topmediagroups.com/login'
        let other_params_login = {
             body : JSON.stringify(dataLogin),
             method : "POST",
             mode : "cors",
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json',
               'Access-Control-Allow-Origin' : '*'
          }
        }

         fetch(urlLogin, other_params_login)

                 .then(function (response) {
                     return response.json()
                   })
                   .then(function (dataLogin) {
                     console.log('data', dataLogin)
                   })
            //return true;

});
