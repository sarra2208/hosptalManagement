import { Component, AfterContentInit, ChangeDetectorRef, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { LoginServiceService } from '../../../services/login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements AfterContentInit {
    employee = {
    email: ''
  };

  account = {
    password: ''
  };
  strengthChanged($event: number) {
    throw new Error('Method not implemented.');
  }

  public baseColor = '#FFF';
  public barLabel = 'Password strength:'; // Remove type declaration
  public myColors = ['#DD2C00', '#FF6D00', '#FFD600', '#AEEA00', '#00C853'];
  public thresholds = [90, 75, 45, 25];
  public strengthLabels = ['(Useless)', '(Weak)', '(Normal)', '(Strong)', '(Great!)'];
  public strength: number | undefined; // Add a union type of number and undefined

  constructor(private loginService:LoginServiceService,private modalService: NgbModal, private changeDetectorRef: ChangeDetectorRef,private router: Router) { }
    login() {
    const email = this.employee.email;
    const password = this.account.password;

    // Example: Call your backend login API
    this.loginService.login(email,password).subscribe({
      next: (res) => {
        console.log('Login success:', res);
        localStorage.setItem('token', res.token);
        localStorage.setItem('role',res?.user?.role) 
        localStorage.setItem("connectedUser",res?.user?.username);
        if (res?.user?.role!="admin") {
                 this.router.navigate(['/clinic/list']);
        }else{// store JWT token
        this.router.navigate(['/dashboard']);
        } // navigate after login
      },
      error: (err) => {
        console.error('Login failed:', err);
        alert('Invalid credentials');
      }
    });
  }
  openModal() {
    const modalRef = this.modalService.open(MyModalComponent);
    modalRef.componentInstance.name = 'Success';
  }

  ngAfterContentInit(): void {
    this.changeDetectorRef.detectChanges();
  }

}

@Component({
  selector: 'app-my-modal',
  template: `

<style>
      .modal-header {
        background-color: #4285f4;
      }
    </style>
    <div class="modal-header">
      <h4 class="modal-title" style="color: white;">Authentication, {{name}}!</h4>
      <button type="button" class="close" aria-label="Close" (click)="modal.dismiss()">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <b><p style="color: dark grey;">Login Successful.</p></b>
    </div>
  `
})
export class MyModalComponent implements OnInit {
  name!: string;
  timeLimit = 5000; // time limit in milliseconds (5 seconds)

  constructor(public modal: NgbActiveModal) {}

  ngOnInit() {
    setTimeout(() => {
      this.modal.close();
    }, this.timeLimit);
  }
}
