var nameError=document.getElementById("name_error");
var emailError=document.getElementById("email_error");
var subjectError=document.getElementById("subject_error");
var messageError=document.getElementById("message_error");
var submitError=document.getElementById("submit_error");

function validateName(){
    var name=document.getElementById('w3lName').value;

    if (name.length==0){
        nameError.innerHTML="Name is required";
        return false;
    }
    if (name.length <4){
        nameError.innerHTML="atleast 4 letters";
        return false;
    }
    /*if (!name.match(/^[A-Za-a]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML="Write Full Name";
        return false;
    }*/
    nameError.innerHTML="<p>valid</p> ";
    return true;  
}

function validateEmail(){
    var email=document.getElementById("w3lSender").value;
    var abc=document.getElementById("email_error");
    var x=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.length==0){
        abc.innerHTML="Email is required";
        abc.style.color="red";
        return false;
    }
    else if (!email.match(x)){
        abc.innerHTML="Inalid Email";
        return false;
    }else{

    abc.innerHTML="valid";
    abc.style.color="green";
    return true;
    }


}

function validateSubject(){
    var sub=document.getElementById("w3lSubject").value;
    var su= subjectError;
    if (sub.length==0){
        subjectError.innerHTML="Subject required";
        su.style.color="red";
        return false;
        
    }
    else if(sub.length<5){
        subjectError.innerHTML="Atleast 5 letters";
        su.style.color="red";
        return false;
    } 
    else{
        subjectError.innerHTML="valid";
        su.style.color="green";
        return true;
        
    }
}
function validateMessage(){
    var mes=document.getElementById("w3lMessage").value;
    var req=30;
    var left=req-mes.length;
    var m=messageError;

    if (left>0){
        m.innerHTML=left+" more characters required";
        m.style.color="red";
        return false;

    }

        m.innerHTML="valid";
        m.style.color="green";
        return true;
}
function validateForm(){
    if (!validateName() || !validateEmail() || !validateSubject() || !validateMessage()){
        submitError.style.display="block";
        submitError.innerHTML="Please fix the error submit";
        setTimeout(function(){submitError.style.display="none";},3000);
        return false;    }
        else{
            return true;
        }

}