// import React from 'react'
// import { useState } from 'react'
// //import firebase from './FirebaseForm'

// const SignupForm = () => {
//     const [fullname, setfullname] = useState('')
//     const [email, setemail] = useState('')
//     const [password, setpassword] = useState('')

//     const handleformsubmit=(e)=>{
//             e.preventDefault();
//             // console.log(fullname)
//             // console.log(email)
//             // console.log(password)
            
//     }
//     return (
//         <div>
//          <h1>SIGN UP FORM</h1>
//              <form onSubmit={handleformsubmit} >
//               Name
//              <input type="text" className="namesignup" onChange={(e)=>setfullname( e.target.value)}   ></input>
//              Email
//              <input type="text" className="emailsignup" onChange={(e)=>setemail(e.target.value)}></input>
//              Password
//              <input type="text" className="passsignup" onChange={(e)=>setpassword (e.target.value)}></input>
//              <button  >Submit</button>
//              </form>
                
//              <h1>SIGN IN FORM</h1>
//              <form className="signinForm" >
//             Email
//             <input type="text" className="emailsignin"></input>
//             Password
//             <input type="text" className="passsignin"></input>
//             <button type="submit" >Submit</button>
//             </form>
//          </div>
//     )
// }

// export default SignupForm
