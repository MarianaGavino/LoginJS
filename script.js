const userEmail = document.querySelector(".formEmail");
const userPass = document.querySelector(".formPassword");
const btn = document.querySelector(".btnlogin");
const h3 = document.querySelector(".response");
const valEmail = document.querySelector(".validacionEmail");
const valPass = document.querySelector(".validacionPassword");

const login = async() => {

    const email = userEmail.value;
    const password =userPass.value;

    const headers = { "Content-Type" : "application/json", };
    const body = JSON.stringify({email, password})

    let response = await fetch('https://reqres.in/api/login', {
        method: "POST",
        body,
        headers,
    });

    console.log(response);

    if (response.status !== 200) {
         h3.innerHTML = "Error";
    }
    if (!userEmail.value) {
       valEmail.innerHTML= "El campo no puede estar vacío";
    }
    if (!userPass.value) {
        valPass.innerHTML= "El campo no puede estar vacío";
    }
    
    if (userEmail.value != email) {
        valEmail.innerHTML="El email es incorrecto";
    }
    else {
        const data = await response.json()
        console.log(data)
        h3.innerHTML =  data.token;
        //location.href="home.html"
    } 

    //console.log(Object.values(data.Object));
    console.log(email);
    console.log(userEmail.value);
    console.log(userPass.value);
    
};
// Cuentas:
// eve.holt@reqres.in
// cityslicka

