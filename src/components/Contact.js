// import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'


// const Register = () => {

//     const[name, setName]= useState('')
//     const[address, setAddress]= useState('')
//     const[email, setEmail]= useState('')
//     const[password, setPassword]= useState('')
//     const[error, setError]= useState(false)

//     const navigate = useNavigate()


//     // http://localhost:5000/register

//     const registerUser = async(e) =>{
//         e.preventDefault()        

//         if(!name){
//           setError(true)
//           return false
//         }

//         let result = await fetch('http://localhost:5000/register',{
//             method: "post",
//             body: JSON.stringify({name, address, email, password}),
//             headers:{
//                 "Content-Type": "application/json"
//             }
//         })
//         result = await result.json();
//         if(result){
//           navigate('/users')
//         }
//         // console.log("___________",result)
//     }



//   return (
//     <>
    
//     <div className="container h-100">
//       <div className="row h-100">
//         <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
//           <div className="d-table-cell align-middle">
//             <div className="text-center mt-4">
//               <h1 className="h2 my-4 text-success">--REGISTER HERE--</h1>

//             </div>
//             <div className="card">
//               <div className="card-body">
//                 <div className="m-sm-4">
//                   <form>
//                     <div className="form-group">
//                       <label>Name</label>
//                       <input className="form-control form-control-lg" type="text" name="name" onChange={(e)=>setName(e.target.value)} placeholder="Enter your name" />
//                     </div>
//                     <div className="form-group">
//                       <label>Address</label>
//                       <input className="form-control form-control-lg" type="text" name="address" onChange={(e)=>setAddress(e.target.value)} placeholder="Enter your address" />
//                     </div>
//                     <div className="form-group">
//                       <label>Email</label>
//                       <input className="form-control form-control-lg" type="email" name="email" onChange={(e)=>setEmail(e.target.value)} placeholder="Enter your email" />
//                     </div>
//                     <div className="form-group">
//                       <label>Password</label>
//                       <input className="form-control form-control-lg" type="text" name="password" onChange={(e)=>setPassword(e.target.value)} placeholder="Enter password" />
//                     </div>
//                     <div className="text-center mt-3">
//                       <button onClick={registerUser} className="btn btn-lg btn-primary">Sign up</button>
//                       {/* <button type="submit" class="btn btn-lg btn-primary">Sign up</button> */}
//                     </div>
//                   </form>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>

    
//     </>
//   )
// }

// export default Register









import React, { useState } from 'react'

const Register = () => {

    const[name, setName]= useState('')
    const[address, setAddress]= useState('')
    const[email, setEmail]= useState('')
    const[password, setPassword]= useState('')


    // http://localhost:5000/register

    const registerUser = async(e) =>{
        e.preventDefault()        
        let result = await fetch('http://localhost:5000/register',{
            method: "post",
            body: JSON.stringify({name, address, email, password}),
            headers:{
                "Content-Type": "application/json"
            }
        })
        result = await result.json();
        console.log("___________",result)
    }



  return (
    <>
       <form style={{marginTop:"20px"}}>

        Name: <input name='name' value={name}
        onChange={(e)=>setName(e.target.value)}
        type='text' /><br /><br />

        Address: <input name='address' value={address}
        onChange={(e)=>setAddress(e.target.value)}
        type='text' /><br /><br />

        Email: <input name='email' value={email}
        onChange={(e)=>setEmail(e.target.value)}
        type='text' /><br /><br />

        Password: <input name='password' value={password}
        onChange={(e)=>setPassword(e.target.value)}
        type='text' /><br /><br />

            <button sty onClick={registerUser}>Signup</button>

       </form>
    
    </>
  )
}

export default Register












