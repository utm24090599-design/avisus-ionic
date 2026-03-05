import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, inject, OnInit, PLATFORM_ID } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [CommonModule, ReactiveFormsModule],
})
export class LoginComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private fb = inject(FormBuilder);
  private router = inject(Router);
  mostrarPassword = false;
  loginForm: FormGroup;
  private isBrowser: boolean;


  constructor() {
    this.isBrowser = isPlatformBrowser(this.platformId);
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  onSubmit() {
    this.router.navigate(['home']);
  }
}
