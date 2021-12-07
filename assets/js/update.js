//"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYzLCJlbWFpbCI6ImpvaG5kb3VAZ21haWwuY29tIiwibmFtZSI6IkpvaG4iLCJpYXQiOjE2MzgyMDYzMDQsImV4cCI6MTYzODgxMTEwNH0.0-mQ36T43KiFHe_zC5x35szk8ZjrWYI6uxin59kyltU"

document.getElementById('pushUpdate').addEventListener("click", function(event) {
    event.preventDefault();
    console.log('Work!');

    let dataUpdate = {
            "name": document.getElementById('loginUpdate').value + ' ' + document.getElementById('loginUpdateLname').value,
            "description": document.getElementById('typeUpdate').value,
        };

     console.log(dataUpdate);


      const other_params_update = {
             body : JSON.stringify(dataUpdate),
             method : "POST",
             mode : "cors",
             headers: {
               'Content-Type': 'application/json',
               'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjE3NywiZW1haWwiOiJqYWNrZG91dUBnbWFpbC5jb20iLCJuYW1lIjoiSmFjayIsImlhdCI6MTYzODg3NjIyNiwiZXhwIjoxNjM5NDgxMDI2fQ.4xXF-W9XDsaInMFkNKRaQblJRMe2Y-YZVHcA-wfFlnE'
            }
         }

         fetch('https://api.topmediagroups.com/api/v1/tasks', other_params_update)

                  .then(function (response) {
                       return response.json();
                   })
                  .then(function (dataUpdate) {
                        console.log('data', dataUpdate);

                         let nameToPage = dataUpdate.message.name;
                             localStorage.setItem("myName", nameToPage);
                             setTimeout(function(nameToPage){
                             window.location.href = 'thank-page.html';
                          }, 1000);

                  });


});
