//Register customer
const registerUser = () => {
    let data = {};
    data.name = document.getElementById("name").value;
    data.phoneNumber = document.getElementById("phoneNumber").value;
    data.nationalIdentityNumber = document.getElementById("Location").value;
    data.location = document.getElementById("exampleInputEmail1").value;
    data.password = document.getElementById("exampleInputPassword1").value;
    data.confirm = document.getElementById("exampleInputPassword").value;

    console.log(data);

    //Validation
    var alert = document.getElementById("alert"); 
//var regEx = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;


if (data.name.length >= 50 || data.name.length == "") {    
    alert.classList.remove('message');
    alert.classList.add('alert');
    alert.innerHTML = `<p class="alert__text">Full name is required!</p>`;   
    name.focus();    
    return false;    
}
if (data.location.length >= 50 || data.location.length == "") {    
    alert.classList.remove('message');
    alert.classList.add('alert');
    alert.innerHTML = `<p class="alert__text">Full name is required!</p>`;   
    //location.focus();    
    return false;    
}
if (data.phoneNumber.length >= 15 || data.phoneNumber.length == "") {    
    alert.classList.remove('message');
    alert.classList.add('alert');
    alert.innerHTML = `<p class="alert__text">Phone number is required!</p>`;   
    phoneNumber.focus();    
    return false;    
}
if (data.nationalIdentityNumber.length >= 15 || data.nationalIdentityNumber.length == "") {    
    alert.classList.remove('message');
    alert.classList.add('alert');
    alert.innerHTML = `<p class="alert__text">National Identity Number is required!</p>`;   
    nationalIdentityNumber.focus();    
    return false;    
}           
if(data.password.length == "" || data.password.length < 8) {
    alert.classList.remove('message');
    alert.classList.add('alert');
    alert.innerHTML = `<p class="alert__text">Password must not be less than 8 characters!</p>`;      
    //pass_word.focus();    
    return false;    
}
if(data.password != data.confirm)  {   
    alert.classList.remove('message');
    alert.classList.add('alert');
    alert.innerHTML = `<p class="alert__text">Password does not match</p>`;
    return false;  
}
    const baseURL = `https://chowbetter.herokuapp.com/api/auth/register`;
    fetch(baseURL, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(json => {
     //Get the message, returned user and token from the response
     var message = json.message;
     var user = json.user;
     //window.localStorage.setItem('aptitudeToken', json.token);
     window.localStorage.setItem('user', user);
     alert.classList.remove('message');
     alert.classList.add('alert');
     alert.innerHTML = `<p class="alert__text">${message}</p>`;

     if (message === 'User registered successfully') { 
        setTimeout( ()=>window.location.replace("product.html"), 3000 );
    }  
 })   
 .catch((err) => {
     console.log("Request failed: ", err);
 })
  };