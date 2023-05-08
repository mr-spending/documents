import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-user-deletion',
  templateUrl: './user-deletion.component.html',
  styleUrls: ['./user-deletion.component.scss']
})
export class UserDeletionComponent implements OnInit {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private auth: AuthService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
        email: this.fb.control(null, [Validators.required, Validators.email]),
        password: this.fb.control(null, Validators.required)
      },
    );
  }

  formSubmit() {
    if (window.confirm('Are you sure you want to delete the account?')) {
      const formValue = this.formGroup.value;
      this.auth.deleteUser(formValue.email, formValue.password);
      this.formGroup.reset();
    }
  }
}
