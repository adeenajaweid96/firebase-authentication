import {getAuth,  createUserWithEmailAndPassword } from "./firebase.js";

const auth = getAuth();

let signupEmail = document.getElementById("userEmail");
let signupPassword = document.getElementById("userPass");
let signupbtn = document.getElementById("register");

signupbtn.addEventListener("click",()=>{
    if(signupEmail.value.trim() && signupPassword.value.trim()){
        createUserWithEmailAndPassword(auth, signupEmail.value, signupPassword.value)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user)
        })

        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
            console.log(errorCode);
          });
        
        }
        else{
            console.log("insert data");
        }
        //   console.log(error);

    })




//     .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//        
//       });

//   }
//   else{
//       console.log("insert your data");
      
//   }
//   console.log(error);
  // location.href = "signin.html"
  
// })
   


