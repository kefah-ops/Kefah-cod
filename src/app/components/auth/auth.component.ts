import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service'; // ✅ import your service

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent {
  authForm: FormGroup;
  isLoginMode = true;
  message = '';
  error = '';
  isLoading = false;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService // ✅ inject service
  ) {
    this.authForm = this.fb.group({
      username: [''],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  /** ✅ Toggle between login & register modes */
  toggleMode(): void {
    this.isLoginMode = !this.isLoginMode;
    this.message = '';
    this.error = '';

    const usernameControl = this.authForm.get('username');
    if (this.isLoginMode) {
      usernameControl?.clearValidators();
    } else {
      usernameControl?.setValidators([Validators.required, Validators.minLength(3)]);
    }
    usernameControl?.updateValueAndValidity();
    this.authForm.reset();
  }

  /** ✅ Handle form submission */
  onSubmit(): void {
    if (this.authForm.invalid) {
      this.error = 'Please fill in all required fields correctly';
      return;
    }

    this.isLoading = true;
    this.error = '';
    this.message = '';

    const { email, password, username } = this.authForm.value;

    if (this.isLoginMode) {
      // 🔐 LOGIN
      this.authService.login(email, password).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.message = '✅ Login successful! Redirecting...';
          setTimeout(() => this.router.navigate(['/home']), 1500);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Login error:', err);
          this.error = err.error?.message || 'Login failed!';
        }
      });
    } else {
      // 🧩 REGISTER
      this.authService.register(username, email, password).subscribe({
        next: (res) => {
          this.isLoading = false;
          this.message = '✅ Registration successful! Please log in.';
          setTimeout(() => this.toggleMode(), 1500);
        },
        error: (err) => {
          this.isLoading = false;
          console.error('Registration error:', err);
          this.error = err.error?.message || 'Registration failed!';
        }
      });
    }
  }

  /** ✅ Helper for validation in template */
  hasError(fieldName: string, errorType: string): boolean {
    const field = this.authForm.get(fieldName);
    return !!(field?.hasError(errorType) && (field?.dirty || field?.touched));
  }
}
