import { Component, AfterContentInit, ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../services/login-service.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss']
})
export class NewUserComponent implements AfterContentInit {
  user = {
    email: '',
    password: '',
    role: 'patient' // default role
  };

  public baseColor = '#FFF';
  public barLabel = 'Password strength:';
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];
  public strength: number | undefined;

  constructor(
    private loginService: LoginServiceService,
    private changeDetectorRef: ChangeDetectorRef,
    private router: Router
  ) {}

  strengthChanged($event: number) {
    this.strength = $event;
  }

  register() {
    const { email, password, role } = this.user;

    this.loginService.register(email, password, role).subscribe({
      next: (res) => {
        console.log('Registration success:', res);
        alert('Registration successful! You can now log in.');
        this.router.navigate(['/login']); // redirect to login after registration
      },
      error: (err) => {
        console.error('Registration failed:', err);
        alert('Registration failed: ' + (err.error?.message || 'Unknown error'));
      }
    });
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }
}
