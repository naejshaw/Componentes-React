export interface Product {
    id: number;
    name: string;
    price: number;
}

// Simulated API call to fetch products from a pre-existing store
export async function fetchStoreProducts(): Promise<Product[]> {
    // In a real scenario, replace the URL with the store's API endpoint
    // For example: const response = await fetch('https://store.example.com/api/products');
    // return await response.json();

    // Simulated delay and data
    return new Promise(resolve => {
        setTimeout(() => {
            resolve([
                { id: 101, name: "Store Product 1", price: 25 },
                { id: 102, name: "Store Product 2", price: 40 },
                { id: 103, name: "Store Product 3", price: 15 },
            ]);
        }, 500);
    });
}

// Simulated API call to send order to the store
export async function sendOrderToStore(order: {
    productId: number;
    quantity: number;
    deliveryAddress: string;
    deliveryCost: number;
    totalCost: number;
}): Promise<{ success: boolean; orderId?: string }> {
    // In a real scenario, replace the URL with the store's order API endpoint
    // For example: const response = await fetch('https://store.example.com/api/orders', { method: 'POST', body: JSON.stringify(order) });
    // return await response.json();

    // Simulated delay and response
    return new Promise(resolve => {
        setTimeout(() => {
            resolve({ success: true, orderId: "ORD123456" });
        }, 500);
    });
}
