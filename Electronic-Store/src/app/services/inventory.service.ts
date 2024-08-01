import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { v4 as uuidv4 } from 'uuid';
import { Inventory } from '../models/inventory.model'

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private url = 'http://localhost:3000/inventories'; // URL to the JSON server 

  constructor(private http: HttpClient) { }

  // Fetch all the products in the inventory
  getInventories(): Observable<Inventory[]> {
    return this.http.get<Inventory[]>(this.url);
  }

  // Fetch a single product in the inventory by id
  getInventory(inventoryId: string): Observable<Inventory> {
    return this.http.get<Inventory>(`${this.url}/${inventoryId}`);
  }

  // Add a new product to the inventory and also generate a unique id for the product
  addInventory(inventory: Inventory): Observable<Inventory> {
    inventory.inventoryId = uuidv4(); // This code will generate a new Guid.
    return this.http.post<Inventory>(this.url, inventory);
  }

  // Update an existing product in the inventory
  updateInventory(inventory: Inventory): Observable<Inventory> {
    return this.http.put<Inventory>(`${this.url}/${inventory.inventoryId}`, inventory);
  }

  // Delete a product in the inventory by id
  deleteInventory(inventoryId: string): Observable<void> {
    return this.http.delete<void>(`${this.url}/${inventoryId}`);
  }
}
