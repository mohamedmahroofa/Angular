import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InventoryService } from '../services/inventory.service';
import { Inventory } from '../models/inventory.model';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent implements OnInit {
  inventory: Inventory = {
    inventoryId: '',
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
    const inventoryId = this.route.snapshot.paramMap?.get('inventoryId'); // Get the inventoryId from the URL
    if (inventoryId) {
      this.inventoryService.getInventory(inventoryId).subscribe((data) => {
        this.inventory = data;
      });
    }
  }

  // Add or Update the inventory after clicking the save button and navigate back to the inventory list
  saveInventory() {
    if (this.inventory.inventoryId) {
      this.inventoryService
        .updateInventory(this.inventory)
        .subscribe(() => this.goBack());
    } else {
      this.inventoryService
        .addInventory(this.inventory)
        .subscribe(() => this.goBack());
    }
  }

  // Delete the Product from the inventory
  deleteInventory() {
    if (this.inventory.inventoryId) {
      this.inventoryService
        .deleteInventory(this.inventory.inventoryId)
        .subscribe(() => this.goBack());
    }
  }

  // Navigate back to the inventory list page
  goBack() {
    this.router.navigate(['/inventories']);
  }
}
