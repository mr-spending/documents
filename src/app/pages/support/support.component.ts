import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';

import { ApiService } from '../../core/api/api.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {
  responseStrings: string[] = [];
  subscription: Subscription = new Subscription();
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder, private api: ApiService) { }

  ngOnInit() {
    this.formGroup = this.fb.group({
        title: this.fb.control(null, Validators.required),
        email: this.fb.control(null, [Validators.required, Validators.email]),
        message: this.fb.control(null, Validators.required)
      },
    );
  }

  formSubmit() {
    this.subscription.add(this.api.messageToSupport(this.formGroup.value).subscribe(resp => {
        this.responseStrings = resp;
        console.log(this.responseStrings);
        this.subscription.unsubscribe();
      }
    ));
    this.formGroup.reset();
  }
}
