import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service';
import { Inventory } from '../models/inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  inventory: Inventory = {
    id: '',
    name: '',
    price: 0,
    quantity: 0,
    description: '',
    categoryId: 0,
    releaseDate: new Date(),
    dateCreated: new Date(),
    isDeleted: false,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private inventoryService: InventoryService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap?.get('id'); // Get Inventory ID from route
    if (id) {
      // Fetch Inventory details if exists
      this.inventoryService.getInventory(id).subscribe((data) => {
        this.inventory = data;
      });
    }
  }

  // Save Inventory Details
  saveInventory() {
    if (this.inventory.id) {
      this.inventoryService
        .updateInventory(this.inventory)
        .subscribe(() => this.goBack());
    } else {
      this.inventoryService
        .addInventory(this.inventory)
        .subscribe(() => this.goBack());
    }
  }

  // Delete Product from Inventory
  deleteInventory() {
    if (this.inventory.id) {
      this.inventoryService
        .deleteInventory(this.inventory.id)
        .subscribe(() => this.goBack());
    }
  }

  // Navigate back to Inventory List
  goBack() {
    this.router.navigate(['/inventories']);
  }
}
