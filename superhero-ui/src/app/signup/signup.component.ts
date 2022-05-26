import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { first } from 'rxjs/operators';
import { SignupService} from '../signup.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, DoCheck {
  signupForm: FormGroup = new FormGroup({});
  loading = false;
  submitted = false;
  error!: string;
  router: any;

  // inject the sevice dependency
  constructor(
    private formBuilder : FormBuilder,
    private signupservice:  SignupService,
    private route : ActivatedRoute
  ) { }

  ngDoCheck(): void {
    console.log(this.signupForm);
  }

  // create a new form
  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      Name:['', Validators.required],
      Surname:['',Validators.required],
      Username: ['',Validators.required],
      Password: ['',[Validators.required, Validators.minLength(6)]],
      CPassword:['',[Validators.required, Validators.minLength(6)]]
    });

  }

  // create a function/method to submit teh form values to the service
  get g(){
    return this.signupForm.controls;
  }
  onSubmit(){
    this.submitted = true;

    if(this.signupForm.invalid){
      return;
    }
    this.loading= true;
    this.signupservice.signup(this.signupForm.value)
      .pipe(first())
      .subscribe(
        (data: any) =>{
          this.router.navigate(['/login'],{ queryParams: {registed:true}});
        },
        (error: string) =>{
          this.error=error;
          this.loading=false;
        }
      );
  }
}
