// Inventory model Interface
export interface Inventory {
    id: string; // GUID String
    name: string; // Name of the products in the inventory
    price: number; // Price of the products in the inventory
    quantity: number; // Quantity of the products in the inventory
    description: string; // Description of the products in the inventory
    categoryId: number; // Category ID of the products in the inventory (Also acts as a foreign key)
    releaseDate: Date; // Release date of the products in the inventory
    dateCreated: Date; // Date created for the products in the inventory
    isDeleted: boolean; // Is the product deleted or not
}