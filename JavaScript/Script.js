console.log("JS Connected");

let attempts = 0;
let locked = false;

function validateLogin()
{
    if(locked==true)
    {
        document.getElementById("LoginMessage").innerHTML="You are locked. Please wait 5 minutes.";
        return false;
    }

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if(username=="" || password=="")
    {
        document.getElementById("LoginMessage").innerHTML="Username and Password can not be empty";
        return false;
    }

    if(username=="AIUB" && password=="$_student")
    {
        document.getElementById("LoginMessage").innerHTML="Successfully Logged In";
        attempts=0;

        setTimeout(function(){
            window.location.href="Home.html";
        }, 1000);

        return false;
    }
    else
    {
        attempts++;
        console.log("Current attempts:", attempts);

        if(attempts==1)
        {
            document.getElementById("LoginMessage").innerHTML="You have 3 attempts left.";
        }
        else if(attempts==2)
        {
            document.getElementById("LoginMessage").innerHTML="You have 2 attempts left.";
        }
        else if(attempts==3)
        {
            document.getElementById("LoginMessage").innerHTML="You have 1 attempt left. You are locked for 5 minutes.";
            locked=true;

           
        }
        else if(attempts>3)
        {
            document.getElementById("LoginMessage").innerHTML="You are locked for 5minutes.";
            locked=true;
        }

        return false;
    }
}