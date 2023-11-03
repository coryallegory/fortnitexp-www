var ctx = document.getElementById('dayChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: daysDateData,
    datasets: [
      {
        label: 'Pace to Level 50',
        backgroundColor: '#0000ff',
        borderColor: '#0000ff',
        data: days50Data,
        fill: false,
      },
      {
        label: 'Pace to Level 70',
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
        data: days70Data,
        fill: false,
      }
    ]
  },
  options: {
    responsive: true,
    tooltips: {
      mode: 'index',
      intersect: false,
    },
    hover: {
      mode: 'nearest',
      intersect: true,
    },
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Days Through Chapter 4 Season 5 OG',
        },
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Level',
        },
      }]
    }
  }
});
