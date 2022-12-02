var logindata = JSON.parse(localStorage.getItem("signupdata")) 

document.querySelector("form").addEventListener("submit",lonfun)

function lonfun()
{
  event.preventDefault()
 let form =  document.getElementById("form")
  let loemail = form.loemail.value
  if(loemail == "")
  {
      alert("Please fill Email")
      return false
  }

  let passlo = form.lopass.value

  if(passlo == "")
  {
      alert("Please fill Password")
      return false
  }



//   console.log(loemail,logindata[0].email)
let flag = false ;
  for (let i = 0;i<logindata.length;i++)
  {
      if (loemail == logindata[i].email && passlo == logindata[i].pass )
      {
          flag = true
          
          break;
      }
      else {
          flag = false
         
      }
  }

  if(flag == true)
  {
    alert("You are Successfully Login")
    window.location="index.html"
  }
  else{
    alert("invalid Credentials")
  }
}