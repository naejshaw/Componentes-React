import { useEffect, useState } from "react";
import Site from "../../../Layouts/SiteLayout";

interface Product {
    id: number;
    name: string;
    price: number;
}

interface Order {
    productId: number;
    quantity: number;
}

export default function Delivery() {
    const [products, setProducts] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [orderStatus, setOrderStatus] = useState<string>("");

    useEffect(() => {
        fetch("http://localhost:4015/api/products")
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error("Failed to fetch products:", err));
    }, []);

    function handleQuantityChange(productId: number, quantity: number) {
        setOrders(prevOrders => {
            const existingOrder = prevOrders.find(o => o.productId === productId);
            if (existingOrder) {
                return prevOrders.map(o =>
                    o.productId === productId ? { ...o, quantity } : o
                );
            } else {
                return [...prevOrders, { productId, quantity }];
            }
        });
    }

    function handleSubmitOrder() {
        const filteredOrders = orders.filter(o => o.quantity > 0);
        if (filteredOrders.length === 0) {
            alert("Please select at least one product with quantity greater than zero.");
            return;
        }
        fetch("http://localhost:4015/api/orders", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(filteredOrders),
        })
            .then(res => {
                if (res.ok) {
                    setOrderStatus("Order placed successfully!");
                    setOrders([]);
                } else {
                    setOrderStatus("Failed to place order.");
                }
            })
            .catch(() => setOrderStatus("Failed to place order."));
    }

    return (
        <Site>
            <div className="max-w-4xl mx-auto p-8">
                <h1 className="text-3xl font-bold mb-6">Delivery</h1>
                <table className="w-full border-collapse border border-gray-300">
                    <thead>
                        <tr>
                            <th className="border border-gray-300 p-2 text-left">Product</th>
                            <th className="border border-gray-300 p-2 text-left">Price</th>
                            <th className="border border-gray-300 p-2 text-left">Quantity</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map(product => {
                            const order = orders.find(o => o.productId === product.id);
                            return (
                                <tr key={product.id}>
                                    <td className="border border-gray-300 p-2">{product.name}</td>
                                    <td className="border border-gray-300 p-2">${product.price.toFixed(2)}</td>
                                    <td className="border border-gray-300 p-2">
                                        <input
                                            type="number"
                                            min="0"
                                            value={order ? order.quantity : 0}
                                            onChange={e => handleQuantityChange(product.id, parseInt(e.target.value) || 0)}
                                            className="w-20 border border-gray-300 rounded p-1"
                                        />
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <button
                    onClick={handleSubmitOrder}
                    className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                >
                    Place Order
                </button>
                {orderStatus && <p className="mt-4">{orderStatus}</p>}
            </div>
        </Site>
    );
}
