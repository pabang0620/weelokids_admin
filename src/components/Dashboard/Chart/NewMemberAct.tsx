import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
// import ChartDataLabels from 'chartjs-plugin-datalabels';
// Chart.register(ChartDataLabels);  이걸 써야 라벨이 ㅣ나옴
import NewMemberActHeader from '~/components/Dashboard/Customor/NewMemberActHeader';
import { trpcDataType3 } from '~/components/Dashboard/dataType';

export default function NewMemberAct({ title, retentionData }: trpcDataType3) {
  const labels = retentionData && retentionData.map((item) => item.label);
  // 선이 3개인 그래피 인 것 같음
  const weekdata = retentionData && retentionData.map((item) => item.week);
  const sat = retentionData && retentionData.map((item) => item.saturday);
  const sun = retentionData && retentionData.map((item) => item.sunday);
  const data = {
    labels: labels,
    datasets: [
      {
        label: '평일 비율',
        // datalabels: {
        //   align: 'start', // 표시위치에서 어디쪽으로 배치할지
        // },
        data: weekdata,
        backgroundColor: ['rgba(112,164,250)'],
        borderColor: ['rgba(112,164,250)'],
        // hoverBackgroundColor: ['white'],
        hoverBorderWidth: 6,
        borderWidth: 1,
      },
      {
        label: '토요일',
        // datalabels: {
        //   align: 'start', // 표시위치에서 어디쪽으로 배치할지
        // },
        data: sat,
        backgroundColor: ['rgba(227,106,131)'],
        borderColor: ['rgba(227,106,131)'],
        // hoverBackgroundColor: ['white'],
        hoverBorderWidth: 6,
        borderWidth: 1,
      },
      {
        label: '일요일',
        // datalabels: {
        //   align: 'start', // 표시위치에서 어디쪽으로 배치할지
        // },
        data: sun,
        backgroundColor: ['rgba(251,223,145)'],
        borderColor: ['rgba(251,223,145)'],
        // hoverBackgroundColor: ['white'],
        hoverBorderWidth: 6,
        borderWidth: 1,
      },
    ],
  };

  //   --------------------------------------

  return (
    <div className="NewMemberActMain">
      <NewMemberActHeader title={title} />
      <div className="ChartAreaWrapper">
        <Line
          data={data}
          width="1520"
          height="260"
          options={{
            responsive: false,
            layout: {
              padding: {
                left: 80,
              },
            },
            scales: {
              y: {
                min: 0,
                max: 100,
                position: 'left',
                ticks: {
                  callback: function (value) {
                    return value + '%';
                  },
                  // padding: 10,

                  stepSize: 25,
                },
                border: {
                  dash: [3, 5],
                },
                // title: {
                //   display: true,
                //   text: '%',
                // },
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  align: 'start',
                  // padding: 10,
                },
              },
            },
            plugins: {
              // datalabels: {
              //   anchor: 'center',
              //   align: 'left',
              // },
              tooltip: {
                usePointStyle: true,
                titleColor: 'black',
                bodyColor: 'black',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1.5,
              },
              legend: {
                position: 'top',
              },
            },
          }}
        />
        <style jsx>{`
          .ChartAreaWrapper Line {
            position: absolute;
            left: 0;
            top: 0;
            pointer-events: none;
          }

          .ChartAreaWrapper {
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0 2%;
            height: 34.27vh;
            overflow-x: scroll;
          }
          .ChartAreaWrapper::-webkit-scrollbar {
            width: 100%;
            height: 10px;
          }
          .ChartAreaWrapper::-webkit-scrollbar-thumb {
            border-radius: 10px;
            background-color: #d9d9d9;
          }

          /* 스크롤바 뒷 배경 설정*/
          .ChartAreaWrapper::-webkit-scrollbar-track {
            border-radius: 10px;
            background-color: #f1f1f2;
          }
        `}</style>
      </div>
    </div>
  );
}
