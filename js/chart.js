var ctx = document.getElementById('dayChart').getContext('2d');
var myChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: daysDateData,
    datasets: [
      {
        label: 'Pace to Level 100',
        backgroundColor: '#0000ff',
        borderColor: '#0000ff',
        data: days100Data,
        fill: false,
      },
      {
        label: 'Pace to Level 215',
        backgroundColor: '#ff0000',
        borderColor: '#ff0000',
        data: days215Data,
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
          labelString: 'Days Through Chapter 2 Season 6',
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
