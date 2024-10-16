import React, { useState } from "react";
import Site from "../../../Layouts/SiteLayout";
import DoctorCard from "../../../Components/MyComponents/DoctorCard";
import AppointmentCard from "../../../Components/MyComponents/AppointmentCard";

const doctors = [
    { id: 1, name: "Dr. John Doe", specialty: "Cardiology" },
    { id: 2, name: "Dr. Jane Smith", specialty: "Neurology" },
    { id: 3, name: "Dr. Bob Johnson", specialty: "Oncology" },
];

const appointments = [
    { id: 1, doctorId: 1, patientName: "John Doe", appointmentDate: "2024-03-16", appointmentTime: "10:00 AM" },
    { id: 2, doctorId: 2, patientName: "Jane Smith", appointmentDate: "2024-03-17", appointmentTime: "11:00 AM" },
    { id: 3, doctorId: 3, patientName: "Bob Johnson", appointmentDate: "2024-03-18", appointmentTime: "12:00 PM" },
];

const ScheduleAppointment = () => {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    const [appointmentDate, setAppointmentDate] = useState("");
    const [appointmentTime, setAppointmentTime] = useState("");
    const [patientName, setPatientName] = useState("");

    const handleSelectDoctor = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const handleScheduleAppointment = () => {
        if (!selectedDoctor || !appointmentDate || !appointmentTime || !patientName) {
            alert("Please fill out all fields.");
            return;
        }

        const newAppointment = {
            id: appointments.length + 1,
            doctorId: selectedDoctor.id,
            patientName,
            appointmentDate,
            appointmentTime,
        };

        appointments.push(newAppointment);
        alert("Appointment scheduled successfully!");
    };

    return (
        <Site>
            <div className="container mx-auto p-4">
                <h1 className="text-3xl font-bold mb-4">Schedule an Appointment</h1>
                <div className="flex flex-col md:flex-row gap-4">
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">Select a Doctor</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {doctors.map((doctor) => (
                                <DoctorCard
                                    key={doctor.id}
                                    doctor={doctor}
                                    isSelected={selectedDoctor === doctor}
                                    onSelect={() => handleSelectDoctor(doctor)}
                                />
                            ))}
                        </div>
                    </div>
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-2">Schedule an Appointment</h2>
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="patientName">
                                    Patient Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="patientName"
                                    type="text"
                                    value={patientName}
                                    onChange={(e) => setPatientName(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentDate">
                                    Appointment Date
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="appointmentDate"
                                    type="date"
                                    value={appointmentDate}
                                    onChange={(e) => setAppointmentDate(e.target.value)}
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="appointmentTime">
                                    Appointment Time
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="appointmentTime"
                                    type="time"
                                    value={appointmentTime}
                                    onChange={(e) => setAppointmentTime(e.target.value)}
                                />
                            </div>
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="button"
                                onClick={handleScheduleAppointment}
                            >
                                Schedule Appointment
                            </button>
                        </form>
                    </div>
                </div>
                <h2 className="text-2xl font-bold mb-2 mt-4">Upcoming Appointments</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {appointments.map((appointment) => (
                        <AppointmentCard key={appointment.id} appointment={appointment} />
                    ))}
                </div>
            </div>
        </Site>
    );
};

export default ScheduleAppointment;