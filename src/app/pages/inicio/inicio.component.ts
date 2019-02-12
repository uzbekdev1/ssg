import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent implements OnInit {
	contactForm: FormGroup;

  	constructor(private _formBuilder: FormBuilder) { }

  	ngOnInit() {
  		this.contactForm = this._formBuilder.group({
			nombre   : ['', Validators.required] ,
            email    : ['', [Validators.required, Validators.email]],
            telefono : ['', Validators.required],
            mensaje  : ['', Validators.required]
        });

  	}

}
