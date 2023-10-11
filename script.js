const userEmail = document.querySelector(".formEmail");
const userPass = document.querySelector(".formPassword");
const btn = document.querySelector(".btnlogin");
const h3 = document.querySelector(".response");
const valEmail = document.querySelector(".validacionEmail");
const valEmail1 = document.querySelector(".validacionEmail1");
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

    const data = await response.json()       

    let inputEmail = !userEmail.value ? valEmail.classList.remove("validacionEmail") : valEmail.classList.add("validacionEmail");
    let inputEmail1 = data.error ? valEmail1.classList.remove("validacionEmail1") : valEmail1.classList.add("validacionEmail1");

    let inputPass = !userPass.value ? valPass.classList.remove("validacionPassword") : valPass.classList.add("validacionPassword");

    if (response.status !== 200) {
        h3.innerHTML = "Error";
    }

    else  {   
        console.log(data)
        console.log(data.error)
        h3.innerHTML =  data.token;
        location.href="home.html"
    } 

};

// eve.holt@reqres.in
// cityslicka

