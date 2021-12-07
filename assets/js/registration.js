document.getElementById('pushData').addEventListener("click", function(event) {
    event.preventDefault();
    console.log('Work!');

    let data = {
            "name": document.getElementById('fName').value,
            "lname": document.getElementById('lName').value,
            "email": document.getElementById('emil').value,
            "phone": document.getElementById('phoneNumber').value,
            "password": document.getElementById('pass').value,
            "country": document.getElementById('country').value
        };

     console.log(data);

      const other_params = {
             body : JSON.stringify(data),
             method : "POST",
             mode : "cors",
             headers: {
               'Accept': 'application/json, text/plain, */*',
               'Content-Type': 'application/json'
            }
         }

         fetch('https://api.topmediagroups.com/api/v1/users', other_params)


                 .then(function (response) {
                     return response.json()
                   })
                   .then(function (data) {
                     console.log('data', data)
                   })

});

