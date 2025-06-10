import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../department.service';
import { Department } from '../departement';

@Component({
  selector: 'app-department-list',
  templateUrl: './department-list.component.html',
  styleUrls: ['./department-list.component.scss']
})
export class DepartmentListComponent implements OnInit {
  departments: Department[] = [];
  editingDepartment: Department | null = null;
  showModal = false;

  constructor(private departmentService: DepartmentService) {}

  ngOnInit(): void {
    this.loadDepartments();
  }

  loadDepartments(): void {
    this.departmentService.getAll().subscribe({
      next: (data) => (this.departments = data),
      error: (err) => console.error('Error loading departments', err),
    });
  }

  openAddModal(): void {
    this.editingDepartment = null;
    this.showModal = true;
  }

  editDepartment(dept: Department): void {
    this.editingDepartment = { ...dept };
    this.showModal = true;
  }

  deleteDepartment(dept: Department): void {
    if (confirm(`Delete department "${dept.name}"?`)) {
      this.departmentService.delete(dept.id!).subscribe(() => {
        this.departments = this.departments.filter(d => d.id !== dept.id);
      });
    }
  }

  onSaved(saved: Department): void {
    const index = this.departments.findIndex(d => d.id === saved.id);
    if (index !== -1) {
      this.departments[index] = saved;
    } else {
      this.departments.push(saved);
    }
    this.showModal = false;
  }

  onClose(): void {
    this.showModal = false;
  }
}
