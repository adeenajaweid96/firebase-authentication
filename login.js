import  {getAuth, signInWithEmailAndPassword} from './firebase.js'

const auth = getAuth();

let loginEmail = document.getElementById("loginEmail");
let loginPassword = document.getElementById("loginPassword");
let loginBtn = document.getElementById("userLogin");

loginBtn.addEventListener("click",()=>{
    if(loginEmail.value.trim() && loginPassword.value.trim()){
        signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
  .then((userCredential) => {
    const user = userCredential.user;
    console.log(user);
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage);
  });
    }
    else{
        console.log("put your data");
    }
    location.href = "dashboard.html"

})