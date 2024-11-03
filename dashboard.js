import { getAuth, onAuthStateChanged} from "./firebase.js";

const auth = getAuth();
let dashId = document.getElementById("dashboard");

onAuthStateChanged(auth, (user) => {
    if (user) {
  dashId.innerHTML += `
   <div class="card">
                <div class="card-body">
                    <p>Email: ${user.email}</p>
                    <p>Email Verified: ${user.emailVerified ? "Yes" : "No"}</p>
                    <img src="${user.photoURL || 'img/download.jpg'}" width="55px" alt="Profile Picture" />
                    <button id="verifyEmail" class="btn btn-warning mt-3">Verify Email</button>
                    <button id="updateProfile" class="btn btn-secondary mt-3">Update Profile</button>
                    <button id="signOut" class="btn btn-danger mt-3">Sign Out</button>
                </div>
            </div>;`

      const uid = user.uid;
console.log(uid);
    }
     else {
    
    }
  });