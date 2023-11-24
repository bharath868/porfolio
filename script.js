function ad(){
    document.getElementById("form0").style.display="block";
    document.documentElement.scrollTop=0;

}
function sub(){
    document.getElementById("form0").style.display="none";
}
function sendEmail() {
    var your_name = document.getElementById("your_name").value;
    var your_email = document.getElementById("your_email").value;
    var subject = document.getElementById("subject").value;
    var description = document.getElementById("description").value;
    console.log(your_name)

    if (your_name.length !== 0){
        if (your_email.length !== 0 && your_email.includes('@') && your_email.includes('.')){
            if (subject.length !== 0){
                if (description.length !== 0){
                    
                    Email.send({
                        SecureToken : "fdf2d17c-b33e-484d-86e9-1d92f2786a1e",
                        To: "bharathv970@gmail.com",
                        From: "yr257034@gmail.com",
                        Subject: subject,
                        Body: 'Name: ' + your_name +'<br>E-Mail:  '+your_email + '<br>Message: ' + description,
                        }).then(

                            message => alert("Successfully Submited"),
                            
                        );

                }else{
                    alert("Please Enter Description")
                }
            }else{
                alert("Please Enter Subject")
            }
        }else{
                alert("Please Enter valid Email-id")
            }
    }else{
                alert("Please Enter Your Name")
            }
}