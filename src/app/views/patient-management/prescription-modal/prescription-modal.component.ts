import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PatientService } from '../../../services/patient.service';

@Component({
  selector: 'app-prescription-modal',
  templateUrl: './prescription-modal.component.html',
  styleUrls: ['./prescription-modal.component.scss']
})
export class PrescriptionModalComponent {
 @Input() patient: any;
 @Output() close = new EventEmitter<void>();
  items: string[] = [];
  newItem: string = '';

  constructor(private prescriptionService: PatientService) {}

  addItem() {
    if (this.newItem.trim()) {
      this.items.push(this.newItem.trim());
      this.newItem = '';
    }
  }

  removeItem(index: number) {
    this.items.splice(index, 1);
  }

  cancel() {
    this.items = [];
    this.close.emit();
  }

  send() {
    this.prescriptionService.sendPrescription(this.patient.email, this.items)
      .subscribe({
        next: () => {
          alert('Prescription sent!');
          this.cancel();
        },
        error: () => alert('Failed to send prescription')
      });
  }
}


