
function tombol(){
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("Email").value.trim();
    const message = document.getElementById("Message").value.trim();
    if(name == ""){
        alert("Name section must be filled");
    }else if(email == ""){
        alert("Email section must be filled");
    }else if(message == ""){
        alert("Message section must be filled");
    }else{
        alert("Thank you for your message! We will get back to you soon."); 
    }
    
}