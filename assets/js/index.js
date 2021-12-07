window.onload = function(){

    let nameOfPerson = localStorage.getItem("myName");
    let out = document.getElementById('userName');
    console.log(nameOfPerson);

    out.innerText = nameOfPerson;

}