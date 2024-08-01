// import Site from "../../../Layouts/SiteLayout";
// import moment from 'moment';
  
// // Dashboard.js
// import { Chart } from 'chart.js/auto';
// import { Line } from 'react-chartjs-2';
// // EmployeeCard.js
// import React, { useState, useEffect } from 'react';
// import { Card, CardContent, Typography } from '@mui/material';


// export default function Dashboard()
// {
//     const [employees, setEmployees] = useState(employeesData); // Dados fictícios
  
//     // Lógica para calcular métricas por dia, semana, mês
//     // ...
//   useEffect(() => {
//     const calculateMetrics = () => {
//       const metricsByDay = {};
//       const metricsByWeek = {};
//       const metricsByMonth = {};

//       employees.forEach(employee => {
//         employee.services.forEach(service => {
//           const date = moment(service.date);
//           const day = date.format('YYYY-MM-DD');
//           const week = date.week();
//           const month = date.format('YYYY-MM');

//           // Inicializa os objetos se necessário
//           metricsByDay[day] = metricsByDay[day] || { totalServices: 0, totalHours: 0 };
//           metricsByWeek[week] = metricsByWeek[week] || { totalServices: 0, totalHours: 0 };
//           metricsByMonth[month] = metricsByMonth[month] || { totalServices: 0, totalHours: 0 };

//           // Incrementa os valores
//           metricsByDay[day].totalServices++;
//           metricsByDay[day].totalHours += service.hours;
//           metricsByWeek[week].totalServices++;
//           metricsByWeek[week].totalHours += service.hours;
//           metricsByMonth[month].totalServices++;
//           metricsByMonth[month].totalHours += service.hours;
//         });
//       });

//       // Agora você tem os dados agrupados por dia, semana e mês
//       console.log(metricsByDay);
//       console.log(metricsByWeek);
//       console.log(metricsByMonth);

//       // Utilize esses dados para alimentar os seus gráficos e tabelas
//     };

//     calculateMetrics();
//   }, [employees]);
  
//     // Dados para o gráfico de linha (exemplo: horas trabalhadas por dia)
//     const chartData = {
//       labels: ['Dia 1', 'Dia 2', 'Dia 3'],
//       datasets: [
//         {
//           label: 'Horas Trabalhadas',
//           data: [3, 4, 5],
//           fill: false,
//           borderColor: 'rgb(75, 192, 192)',
//           tension: 0.1,
//         },
//       ],
//     };
  
//     return (
//       <div>
//         <h1>Dashboard</h1>
//         <div>
//           {employees.map((employee) => (
//             <EmployeeCard key={employee.id} employee={employee} />
//           ))}
//         </div>
//         <Line data={chartData} />
        
  
//   <Line
//   data={{
//     labels: Object.keys(metricsByDay),
//     datasets: [
//       {
//         label: 'Horas Trabalhadas por Dia',
//         data: Object.values(metricsByDay).map(day => day.totalHours),
//         // ...
//       },
//     ],
//   }}
// />
//       </div>
//     );
//   }
// // employees.js
// const employees = [
//     {
//       id: 1,
//       name: 'João Silva',
//       services: [
//         { date: '2023-11-01', hours: 3 },
//         { date: '2023-11-02', hours: 4 },
//         // ...
//       ],
//     },
//     // ...
//   ];

// function EmployeeCard({ employee }) {
//     const totalServices = employee.services.length;
//     const totalHours = employee.services.reduce((acc, service) => acc + service.hours, 0);
  
//     return (
//       <Card>
//         <CardContent>
//           <Typography variant="h5" component="div">
//             {employee.name}
//           </Typography>
//           <Typography variant="body2">
//             Serviços Completos: {totalServices}
//             <br />
//             Horas Trabalhadas: {totalHours}
//           </Typography>
//         </CardContent>
//       </Card>
//     );
//   }