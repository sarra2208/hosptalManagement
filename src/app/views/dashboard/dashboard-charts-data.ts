import { Injectable } from '@angular/core';
import { getStyle, hexToRgba } from '@coreui/utils';
import { AppointementService } from '../appointement-management/appointement.service';

export interface IChartProps {
  data?: any;
  labels?: any;
  options?: any;
  colors?: any;
  type?: any;
  legend?: any;

  [propName: string]: any;
}

@Injectable({
  providedIn: 'any'
})
export class DashboardChartsData {
  labels = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];
  constructor(private appointementService:AppointementService) {
    this.initMainChart();
  }

  public mainChart: IChartProps = {};

  public random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
updateChartDatasets() {
  const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
  const brandInfo = getStyle('--cui-info') ?? '#20a8d8';
  const brandInfoBg = hexToRgba(getStyle('--cui-info'), 10) ?? '#20a8d8';
  const brandDanger = getStyle('--cui-danger') || '#f86c6b';

  const colors = [
    {
      backgroundColor: brandInfoBg,
      borderColor: brandInfo,
      pointHoverBackgroundColor: brandInfo,
      borderWidth: 2,
      fill: true
    },
    {
      backgroundColor: 'transparent',
      borderColor: brandSuccess || '#4dbd74',
      pointHoverBackgroundColor: '#fff'
    },
    {
      backgroundColor: 'transparent',
      borderColor: brandDanger || '#f86c6b',
      pointHoverBackgroundColor: brandDanger,
      borderWidth: 1,
      borderDash: [8, 5]
    }
  ];

  const datasets = [
    {
      data: this.mainChart['Data1'],
      label: 'Current',
      ...colors[0]
    },
    {
      data: this.mainChart['Data2'],
      label: 'Previous',
      ...colors[1]
    },
    {
      data: this.mainChart['Data3'],
      label: 'BEP',
      ...colors[2]
    }
  ];

  // Update chart data.datasets
  this.mainChart.data = {
    datasets,
    labels: this.mainChart.data.labels
  };
}

  initMainChart(period: string = 'Month') {
    const brandSuccess = getStyle('--cui-success') ?? '#4dbd74';
    const brandInfo = getStyle('--cui-info') ?? '#20a8d8';
    const brandInfoBg = hexToRgba(getStyle('--cui-info'), 10) ?? '#20a8d8';
    const brandDanger = getStyle('--cui-danger') || '#f86c6b';

    // mainChart
    // mainChart
    this.mainChart['elements'] = period === 'Month' ? 12 : 27;
    this.mainChart['Data1'] = new Array(12).fill(0);
    this.mainChart['Data2'] = new Array(12).fill(0);
    this.mainChart['Data3'] = new Array(12).fill(0);
    this.appointementService.getAppointmentStats().subscribe(res => {
  if (res != null) {
    // reset data arrays with zeros
    this.mainChart['Data1'] = new Array(12).fill(0);
    this.mainChart['Data2'] = new Array(12).fill(0);
    this.mainChart['Data3'] = new Array(12).fill(0);

    res.forEach(el => {
      // Extract month number from el.date
      // el.date is in format "YYYY-MM"
      const monthIndex = parseInt(el.date.split('-')[1], 10) - 1; // zero-based index

      // Set the count value for that month in your data arrays
      this.mainChart['Data1'][monthIndex] = el.count;
      this.mainChart['Data2'][monthIndex] = el.count;
      this.mainChart['Data3'][monthIndex] = el.count;
    });

    // After updating data arrays, update the chart's datasets
    this.updateChartDatasets();
  }
});

    // generate random values for mainChart
  

    let labels: string[] = [];
    if (period === 'Month') {
      labels = this.labels
    } else {
      /* tslint:disable:max-line-length */
      const week = this.labels
    }

    const colors = [
      {
        // brandInfo
        backgroundColor: brandInfoBg,
        borderColor: brandInfo,
        pointHoverBackgroundColor: brandInfo,
        borderWidth: 2,
        fill: true
      },
      {
        // brandSuccess
        backgroundColor: 'transparent',
        borderColor: brandSuccess || '#4dbd74',
        pointHoverBackgroundColor: '#fff'
      },
      {
        // brandDanger
        backgroundColor: 'transparent',
        borderColor: brandDanger || '#f86c6b',
        pointHoverBackgroundColor: brandDanger,
        borderWidth: 1,
        borderDash: [8, 5]
      }
    ];

    const datasets = [
      {
        data: this.mainChart['Data1'],
        label: 'Current',
        ...colors[0]
      },
      {
        data: this.mainChart['Data2'],
        label: 'Previous',
        ...colors[1]
      },
      {
        data: this.mainChart['Data3'],
        label: 'BEP',
        ...colors[2]
      }
    ];

    const plugins = {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          labelColor: function(context: any) {
            return {
              backgroundColor: context.dataset.borderColor
            };
          }
        }
      }
    };

    const options = {
      maintainAspectRatio: false,
      plugins,
      scales: {
        x: {
          grid: {
            drawOnChartArea: false
          }
        },
        y: {
          beginAtZero: true,
          max: 250,
          ticks: {
            maxTicksLimit: 5,
            stepSize: Math.ceil(250 / 5)
          }
        }
      },
      elements: {
        line: {
          tension: 0.4
        },
        point: {
          radius: 0,
          hitRadius: 10,
          hoverRadius: 4,
          hoverBorderWidth: 3
        }
      }
    };

    this.mainChart.type = 'line';
    this.mainChart.options = options;
    this.mainChart.data = {
      datasets,
      labels
    };
  }

}
