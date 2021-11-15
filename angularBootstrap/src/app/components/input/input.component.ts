import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ConfirmedValidator } from 'src/app/utils/validation';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
 registerForm : FormGroup = new FormGroup({});
 submitted = false;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {

    
    this.registerForm = this.fb.group({
      fullname: ['', Validators.required],
      username: ['', [ Validators.required, Validators.minLength(6), Validators.maxLength(16)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['',[ Validators.required, Validators.minLength(6),Validators.maxLength(40)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue] },
      { 
        validator: ConfirmedValidator('password', 'confirmPassword')
      });
   
  }
  get f(){
    return this.registerForm.controls;
  }
  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid) return;
    console.log(this.registerForm.value);
  }

  onReset(){
    this.submitted = false;
    this.registerForm.reset();
  }
}
