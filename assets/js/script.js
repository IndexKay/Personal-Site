const ctx = document.getElementById('myChart');
const ctx2 = document.getElementById('myChart2');

  new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['HTML', 'CSS', 'JavaScript', 'Python', 'PHP', 'MysQL', 'C/C++'],
      datasets: [{
        label: 'Years of Experince',
        data: [5, 5, 4, 4, 1, 2.5, 1.5],
        borderWidth: 1,
        borderColor: '#36A2EB',
        backgroundColor: '#9BD0F5'
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  new Chart(ctx2, {
    type: 'line',
    data: {
      labels: ['Windows10/11', 'Linux', 'illustorator', 'Fusion360', 'ArduinoIDE', 'EasyEDA', 'Blender'],
      datasets: [{
        label: 'Years of Experince',
        data: [6, 3, 6, 1.5, 1.5, 1, 1],
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

