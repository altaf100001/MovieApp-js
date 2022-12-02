document.querySelector("form").addEventListener("submit",signup)

let arr = JSON.parse(localStorage.getItem("signupdata")) || []

function signup()
{
    event.preventDefault()
   let form = document.getElementById("form")
  
   let name = form.name.value
   if (name == "")
   {
       alert("Please fill name ")
       return false;
   }

   let contact = form.contact_no.value

   if (contact == "")
   {
       alert("Please fill contact ")
       return false;
   }

   let email = form.email.value
   if (email == "")
   {
       alert("Please fill email ")
       return false;
   }


   let pass = form.pass.value
   if (pass == "")
   {
       alert("Please fill pass ")
       return false;
   }


 var a1 = new  datafun(name , contact ,email, pass)

 arr.push(a1)

 localStorage.setItem("signupdata",JSON.stringify(arr))
}


function datafun(name , contact ,email, pass)
{
  this.name = name ,
  this.contact = contact ,
  this.email = email,
  this.pass = pass
}