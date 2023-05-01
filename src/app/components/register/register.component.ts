import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

confirmPass: string = "none";
constructor(){}



registerform =  new FormGroup({
  firstname: new FormControl("",[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
  lastname: new FormControl("",[Validators.required, Validators.minLength(3), Validators.pattern("[a-zA-Z].*")]),
  email:new FormControl("",[Validators.required, Validators.email]),
  mobile:new FormControl("",[Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern("[0-9]*")]),
  gender: new FormControl("", [Validators.required]),
  pwd: new FormControl("",[Validators.required, Validators.minLength(6)]),
  rpwd:new FormControl("",[Validators.required])

});

registerSubmited(){
  if(this.PWD.value == this.RPWD.value){
    console.log("Submitted");
  }else{
  this.confirmPass = "inline"
  }
}

get FirstName(): FormControl{
  return this.registerform.get("firstname") as FormControl;
}
get LastName(): FormControl{
  return this.registerform.get("lastname") as FormControl;
}
get Email(): FormControl{
  return this.registerform.get("email") as FormControl;
}
get Mobile(): FormControl{
  return this.registerform.get("mobile") as FormControl;
}
get Gender(): FormControl{
  return this.registerform.get("gender") as FormControl;
}
get PWD(): FormControl{
  return this.registerform.get("pwd") as FormControl;
}
get RPWD(): FormControl{
  return this.registerform.get("rpwd") as FormControl;
}
}
