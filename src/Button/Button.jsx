import React from 'react'

function Button({ text, onClick, className}) {
  return (
    <>
      <button type ="button" className={className} onClick={onClick}>
        {text}
      </button>
    </>
  )
}

export default Button

// const [formData, setformData] = useState([{
//   User: "",
//   email: "",
//   password: ""
// }])
// // const [userdata, setuserdata] = useState(() => {
// //     // Initialize userdata from localStorage if it exists
// //     const storedData = localStorage.getItem("user");
// //     return storedData ? JSON.parse(storedData)  : [];
// // });
// const [userdata, setuserdata] = useState(() => JSON.parse(localStorage.getItem("user")) || []);
// const navigate= useNavigate()
// const handelSubmit = (e) => {
//   e.preventDefault();
//   // console.log(formData);
//   // localStorage.setItem("user", JSON.stringify(...userdata, formData));
// if(!formData.User||!formData.email||!formData.password ){
// alert("enter value")

// }else if(formData.User.length < 6 ){
// alert("username should be minimum 6 charecter")
// }

// else{
// alert("submit")
//   const updatedUserdata = [...userdata, formData];
//   setuserdata(updatedUserdata);

//   localStorage.setItem("user", JSON.stringify(updatedUserdata));

//   navigate("/Login")
// }
// }