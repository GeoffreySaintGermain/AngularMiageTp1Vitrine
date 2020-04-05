import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-administration-page',
  templateUrl: './administration-page.component.html',
  styleUrls: ['./administration-page.component.scss']
})
export class AdministrationPageComponent implements OnInit {

  form : FormGroup;

  elementAdministration : HTMLElement;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(){
    this.form = this.formBuilder.group({
    mail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
    });

    this.elementAdministration = document.getElementById('administration');
  }

  onSubmit() {
    console.log("mail : " + this.form.value.mail + " / mdp : " + this.form.value.password);
    this.elementAdministration.style.display = 'none';
  }
  

}
