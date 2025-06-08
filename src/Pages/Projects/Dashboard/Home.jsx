import { useEffect, useState } from "react";
import Site from "../../../Layouts/SiteLayout";

export default function Dashboard() {
    const [dashboardData, setDashboardData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:4014/api/dashboard")
            .then(res => res.json())
            .then(data => setDashboardData(data))
            .catch(err => console.error("Failed to fetch dashboard data:", err));
    }, []);

    if (!dashboardData) {
        return (
            <Site>
                <p>Loading dashboard data...</p>
            </Site>
        );
    }

    return (
        <Site>
            <div className="p-8 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
                <div className="grid grid-cols-2 gap-6">
                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold">Users</h2>
                        <p className="text-2xl">{dashboardData.users}</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold">Sales</h2>
                        <p className="text-2xl">${dashboardData.sales}</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold">Revenue</h2>
                        <p className="text-2xl">${dashboardData.revenue}</p>
                    </div>
                    <div className="p-4 bg-white rounded shadow">
                        <h2 className="text-xl font-semibold">Active Sessions</h2>
                        <p className="text-2xl">{dashboardData.activeSessions}</p>
                    </div>
                </div>
            </div>
        </Site>
    );
}
