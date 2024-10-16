import React from "react";

const AppointmentCard = ({ appointment }) => {
    const doctor = appointment.doctorId === 1 ? "Dr. John Doe" : appointment.doctorId === 2 ? "Dr. Jane Smith" : "Dr. Bob Johnson"; // Replace with actual doctor data if available

    return (
        <div className="border rounded-lg p-4 bg-gray-50 shadow-md">
            <h3 className="text-lg font-semibold">{doctor}</h3>
            <p className="text-gray-700">Patient: {appointment.patientName}</p>
            <p className="text-gray-700">Date: {appointment.appointmentDate}</p>
            <p className="text-gray-700">Time: {appointment.appointmentTime}</p>
        </div>
    );
};

export default AppointmentCard;