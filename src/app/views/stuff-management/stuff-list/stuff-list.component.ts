import { Component, OnInit } from '@angular/core';
import { StuffService } from '../stuff.service';
import { Stuff } from '../stuff';

@Component({
  selector: 'app-stuff-list',
  templateUrl: './stuff-list.component.html',
  styleUrls: ['./stuff-list.component.scss']
})
export class StuffListComponent implements OnInit {
  StuffList: Stuff[] = [];
  showAddModal = false;
  editingStuff: Stuff | null = null;

  constructor(private StuffService: StuffService) {}

  ngOnInit(): void {
    this.loadStuff();
  }

  loadStuff() {
    this.StuffService.getAllStaff().subscribe(data => this.StuffList = data);
  }

  get paginatedStuff() {
    return this.StuffList; // You can implement pagination here
  }

  openAddModal() {
    this.editingStuff = null;
    this.showAddModal = true;
  }

  closeAddModal() {
    this.showAddModal = false;
  }

  onStuffSaved(Stuff: Stuff) {
    const index = this.StuffList.findIndex(s => s.id === Stuff.id);
    if (index > -1) {
      this.StuffList[index] = Stuff;
    } else {
      this.StuffList.push(Stuff);
    }
    this.closeAddModal();
  }

  editStuff(Stuff: Stuff) {
    this.editingStuff = { ...Stuff };
    this.showAddModal = true;
  }

  deleteStuff(Stuff: Stuff) {
    if (confirm(`Delete ${Stuff.nom} ${Stuff.prenom}?`)) {
      this.StuffService.deleteStaff(Stuff.id).subscribe(() => {
        this.StuffList = this.StuffList.filter(s => s.id !== Stuff.id);
      });
    }
  }
}
