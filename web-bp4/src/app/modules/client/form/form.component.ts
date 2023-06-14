import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Client } from 'src/app/models/client';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit, OnChanges {
  userForm!: FormGroup;
  @Input('user') user!: Client;
  @Input('isShow') isShow: boolean = false;
  @Output() newUserEvent = new EventEmitter<Client>();
  
  constructor(private formBuilder: FormBuilder, private router: Router) {}

  ngOnInit(): void {
    this.setForm();
  }

  onSubmit(): void {
    if (this.userForm.invalid) {
      return;
    }
    this.newUserEvent.emit(this.userForm?.value)
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['user']) {
      this.setForm();
      // Handle the changed value
    }
  }

  setForm(): void {
    this.userForm = this.formBuilder.group({
      name: [
        { value: this.user?.name ?? '', disabled: this.isShow },
        Validators.required,
      ],
      lastName: [
        { value: this.user?.lastName ?? '', disabled: this.isShow },
        Validators.required,
      ],
      birthdate: [{ value: this.user?.birthdate ?? '', disabled: this.isShow }],
      email: [
        { value: this.user?.email ?? '', disabled: this.isShow },
        [Validators.required, Validators.email],
      ],
      address: [{ value: this.user?.address ?? '', disabled: this.isShow }],
      cuit: [
        { value: this.user?.cuit ?? '', disabled: this.isShow },
        [Validators.required, Validators.pattern('[0-9]{11}')],
      ],
      cellPhone: [
        { value: this.user?.cellPhone ?? '', disabled: this.isShow },
        Validators.required,
      ],
    });
  }
}
