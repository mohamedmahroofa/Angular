import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../services/inventory.service';
import { Inventory } from '../models/inventory.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.scss'],
})
export class InventoryListComponent implements OnInit {
  inventories: Inventory[] = [];

  constructor(
    private inventoryService: InventoryService,
    private router: Router
  ) {}

  ngOnInit() {
    // Fetch Products in the Inventory on inventory-list component initialization
    this.inventoryService.getInventories().subscribe((data) => {
      this.inventories = data;
    });
  }

  // Navigate to the Product details on the inventory component
  viewInventory(id: string) {
    this.router.navigate(['/inventory', id]);
  }

  // Navigate to the new Product form on the inventory component
  addInventory() {
    this.router.navigate(['/inventory']);
  }
}
