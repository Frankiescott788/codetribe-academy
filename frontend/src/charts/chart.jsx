// src/components/StatsChart.js
import React, { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

// Register Chart.js components
ChartJS.register(Title, Tooltip, Legend, LineElement, CategoryScale, LinearScale, PointElement);

const StatsChart = () => {
  const [gradient, setGradient] = useState(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const ctx = canvasRef.current.getContext('2d');
      const gradient = ctx.createLinearGradient(0, 0, 0, ctx.canvas.height);
      gradient.addColorStop(0, 'rgba(33, 118, 255, 0.5)'); // Top color
      gradient.addColorStop(1, 'rgba(33, 118, 255, 0.1)'); // Bottom color
      setGradient(gradient);
    }
  }, []);

  const chartData = {
    labels: ['Total Bookings', 'Occupancy', 'Revenue', 'Cancellations'],
    datasets: [
      {
        label: 'Metrics',
        data: [150, 75, 50000, 10], // Replace with static values
        backgroundColor: gradient || 'rgba(33, 118, 255, 0.2)', // Use gradient if available
        borderColor: '#2176ff', // Line color
        borderWidth: 2, // Thicker line
        fill: true, // Fill area under line
        tension: 0.3, // Adjust tension for smoother lines
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        enabled: true, // Disable tooltips
      },
    },
    scales: {
      y: {
        grid: {
          display: true, 
          borderDash: [5, 5],
        },
      },
      x: {
        grid: {
          display: false, // Remove x-axis grid lines
        },
      },
    },
  };

  return (
    <div>
      <h2>Hotel Metrics</h2>
      <canvas ref={canvasRef} style={{ display: 'none' }} />
      <Line data={chartData} options={options} />
    </div>
  );
};

export default StatsChart;
