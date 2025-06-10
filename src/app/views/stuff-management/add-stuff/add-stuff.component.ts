
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Stuff } from '../stuff';
import { Department } from '../../departement-management/departement';
import { StuffService } from '../stuff.service';
import { DepartmentService } from '../../departement-management/department.service';


@Component({
  selector: 'app-add-stuff',
  templateUrl: './add-stuff.component.html',
  styleUrls: ['./add-stuff.component.scss']
})
export class AddStuffComponent implements OnInit {
  @Input() Stuff: Stuff | null = null;
  @Output() close = new EventEmitter<void>();
  @Output() StuffSaved = new EventEmitter<Stuff>();

  form: Stuff = {
    id: '', nom: '', prenom: '', role: '', email: '', telephone: '', adresse: '', hireDate: '', service: {} as Department
  };

  services: Department[] = [];
  roles = ['doctor', 'nurse', 'agent', 'technical', 'manager'];

  constructor(private StuffService: StuffService, private departmentService: DepartmentService) {}

  ngOnInit(): void {
    if (this.Stuff) {
      this.form = { ...this.Stuff };
    }
    this.loadServices();
  }

  loadServices() {
    this.departmentService.getAll().subscribe(data => this.services = data);
  }

  saveStuff() {
    if (this.form.id) {
      this.StuffService.updateStaff(this.form.id,this.form).subscribe(saved => this.StuffSaved.emit(saved));
    } else {
      this.StuffService.createStaff(this.form).subscribe(saved => this.StuffSaved.emit(saved));
    }
  }
}