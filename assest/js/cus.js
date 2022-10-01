let asidebtn = document.querySelector('.aside-btn');
let aside = document.querySelector('.aside');
let backdrop = document.querySelector('.__backdrop');

asidebtn.addEventListener('click', () =>{
    aside.classList.add('show');
    backdrop.classList.add('offcanvas-backdrop');
    backdrop.classList.add('show');
});

backdrop.addEventListener('click', () =>{
    aside.classList.remove('show');
    backdrop.classList.remove('offcanvas-backdrop');
    backdrop.classList.remove('show');
});


//chart js
const labels = [
    '01',
    '02',
    '03',
    '04',
    '05',
    '06',
    '07',
    '08',
    '09',
    '10',
    '11',
    '12',
    '13',
    '14',
    '15',
    '16',
    '17',
    '18',
    '19',
    '20',
    '21',
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: ' rgb(79, 251, 223)',
      borderColor: ' rgb(79, 251, 223)',
      borderRadius:7,
      data: [5,10,5,2,20,30,45,25,10,5,2,25,10,35,2,20,30,10,5,2,50, ],
    },{
        label: 'My Second dataset',
        backgroundColor: 'rgb(0, 210, 252,0.3)',
        borderColor: 'rgb(0, 210, 252,0.3)',
        borderRadius:7,
        data: [25,10,35,2,20,30,10,5,2,50,5,10,5,2,20,30,45,25,10,5,2, ],
      }]
  };

  const config = {
    type: 'bar',
    data: data,
    options: {
        maintainAspectRatio:false,
        scales:{
            x:{
                grid:{
                    display:false,
                }
            },
            y:{
                grid:{
                    borderDash:[4],
                    borderColor:'transparent',
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
                  }
            }
        },
        plugins: {
            legend: {
                position:'bottom',
                align:'start',
              labels: {
                usePointStyle: true,
              }
            }
          },
    }
  };
  const myChart = new Chart(
    document.getElementById('myChart'),
    config
  );

//   datatable
$(document).ready(function () {
    $('#tt').DataTable({
        pageLength : 2,
    });
});


// Myvisitor
  const vlabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
  ];
  const vdata = {
    labels: vlabels,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: '#e40813',
      borderColor: '#e40813',
      borderRadius:7,
      data: [30, 10, 5, 55, 20, 45],
    },{
        label: 'My Second dataset',
        type:'line',
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgb(255, 99, 132)',
        borderRadius:7,
        data: [0,20,55,5,10,30],
      }
   ]
  };
  const vConfig = {
    type: 'bar',
    data: vdata,
    options: {
        maintainAspectRatio:false,
        scales:{
            x:{
                grid:{
                    display:false,
                }
            },
            y:{
                grid:{
                    borderDash:[4],
                    borderColor:'transparent',
                },
                ticks: {
                    // forces step size to be 50 units
                    stepSize: 20
                  }
            }
        },
        plugins: {
            legend: {
                position:'bottom',
                align:'start',
              labels: {
                usePointStyle: true,
              }
            }
          },
    }
  };
  const myVisitor = new Chart(
    document.getElementById('myVistor'),
    vConfig
  );
  