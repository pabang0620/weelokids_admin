import React, { useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import ContentsClickHead from '~/components/Dashboard/Customor/ContentsClickHead';
import { trpcDataType2 } from '~/pages/api/trpc/WithDrowUsers';

export default function ContentsChart({
  labelData,
  valueData,
  selecter,
  setSelecter,
  title,
  clickValue,
}: trpcDataType2) {
  // const division =
  //   valueData !== undefined &&
  //   valueData.map((v, i) => Math.floor((v / clickValue[i]) * 100));
  const division =
    valueData !== undefined &&
    clickValue &&
    valueData.map((v, i) => {
      if (clickValue[i]) {
        return Math.floor((v / clickValue[i]) * 100);
      } else {
        valueData;
      }
    });

  // useEffect(() => {}, []);

  const dataSetting = clickValue == undefined ? valueData : division;
  const data = {
    labels: labelData,
    datasets: [
      {
        data: dataSetting,
        backgroundColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(255, 159, 64, 1)',
          'rgba(255, 205, 86, 1)',
          'rgba(75, 192, 192,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(201, 203, 207, 1)',
        ],
        borderRadius: Number.MAX_VALUE,
        borderWidth: 1,
        barThickness: 8,
      },
    ],
  };

  return (
    <div className="ContentsChartMain">
      <ContentsClickHead
        setSelecter={setSelecter}
        selecter={selecter}
        title={title}
        valueData={valueData}
      />
      <div className="ChartAreaWrapper">
        <Bar
          data={data}
          width="480"
          height="260"
          // options={options}
          // 위쪽에 선언한 options이랑 같은 것
          options={{
            indexAxis: 'y',
            elements: {
              bar: {
                borderWidth: 2,
              },
            },
            responsive: false,
            scales: {
              y: {
                grid: {
                  display: false,
                },

                // 설정이 안들어감
                // gridLines: {
                //   color: 'black',
                //   borderDash: [2, 5],
                // },
              },
              x: {
                min: 0,
                max:
                  Math.ceil((Math.max(...(valueData ?? [])) * 1.5) / 10) * 10,
                // 제플린 참고 그래프 + 10의자리 올림
                ticks: {
                  padding: 20,
                  stepSize: 20,
                },
                border: {
                  dash: [3, 5],
                },
                beginAtZero: true,
              },
            },
            plugins: {
              // datalabels: {
              //   anchor: 'end',
              //   align: 'right',
              // },
              legend: {
                display: false,
              },
              tooltip: {
                usePointStyle: true,
                titleColor: 'black',
                bodyColor: 'black',
                backgroundColor: 'rgba(255, 255, 255, 1)',
                borderColor: 'rgba(0, 0, 0, 0.1)',
                borderWidth: 1.5,
              },
            },
          }}
        />
        <style jsx>{`
           {
            /* .ContentsChartMain {
            width: 26.935vw;
            border-radius: 4px;
            border: solid 2px #e6e6e6;
            margin: 20px 0px;
          } */
          }
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
            width: 460px;
            margin: 0 10px 0px 30px;
            height: 34.27vh;
             {
              /* overflow-y: scroll; */
            }
          }
          .ChartAreaWrapper::-webkit-scrollbar {
            width: 8px;
            height: 250px;
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
          /* 스크롤바 설정이 안됨 */
        `}</style>
      </div>
    </div>
  );
}
