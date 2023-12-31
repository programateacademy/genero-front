import React from "react";
import './SecondBoardGraphic.css';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Legend,
    Filler,
  } from "chart.js";
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    Title,
    Legend,
    Filler
  );
  const SecondBoardGraphic = ({selectedAñoContent}) => {
    const Edad = selectedAñoContent.map((item) => item.grupo_edad);
    const conteoEdad = Edad.reduce((acc, elemento) => {
      acc[elemento] = (acc[elemento] || 0) + 1;
      return acc;
    }, {});

     // Configuración de resultados
     const edad = Object.keys(conteoEdad);
     const Cantidad = Object.values(conteoEdad);

     console.log(edad); // Array de elementos únicos en estrato
    console.log(Cantidad)


    const data = {
      labels: edad,
      datasets: [
        {
          label: "Edad",
          data: Cantidad,
          backgroundColor: '#6AA9E9', // Color de fondo de las barras        
          
        },
      ],
    };
  
    const options = {
      responsive: true,
      indexAxis: "y", // Establecer el eje a 'y' para barras horizontales
    };
  
    return (    
  
      <div className="container-Edad">           
              
      <h1 id = "Edad"  >Grupos Edad</h1>
        <Bar options={options} data={data} />
      </div>
  
      
      
      
      
    );
  };
export default SecondBoardGraphic;