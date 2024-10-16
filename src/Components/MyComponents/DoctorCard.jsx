import React from "react";

const DoctorCard = ({ doctor, isSelected, onSelect }) => {
    return (
        <div
            className={`border rounded-lg p-4 cursor-pointer transition-transform duration-200 ${isSelected ? "border-blue-500 bg-blue-100" : "border-gray-300"}`}
            onClick={onSelect}
        >
            <h3 className="text-xl font-semibold">{doctor.name}</h3>
            <p className="text-gray-600">{doctor.specialty}</p>
        </div>
    );
};

export default DoctorCard;