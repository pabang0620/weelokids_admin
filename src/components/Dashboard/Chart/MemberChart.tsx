import React from 'react';
import { Line } from 'react-chartjs-2';
import { CategoryScale } from 'chart.js';
import Chart from 'chart.js/auto';
Chart.register(CategoryScale);
import CustomorComponent from '~/components/Dashboard/Customor/CustomorComponent';
import { trpcDataType } from '~/pages/api/trpc/WithDrowUsers';

export default function MemberChart({
  labelData,
  valueData,
  setSelecter,
  selecter,
  title,
}: trpcDataType) {
  const formattedLabelData =
    labelData &&
    labelData.map((dateString) => {
      const date = new Date(dateString);
      const monthName = date.toLocaleString('en-US', { month: 'short' });
      const dayOfMonth = date.getDate();
      return `${monthName} ${dayOfMonth}`;
    });

  // This function adds the appropriate suffix to the day of the month.
  // For example, 1 should be displayed as "1st", 2 as "2nd", and so on.

  const data = {
    labels: formattedLabelData,
    datasets: [
      {
        fill: {
          target: 'start',
        },
        backgroundColor: (ctx: any) => {
          const canvas = ctx.chart.ctx;
          const gradient = canvas.createLinearGradient(0, 0, 0, 160);

          gradient.addColorStop(0.1, 'rgba(112, 164, 250)');

          gradient.addColorStop(1, 'rgba(255,255,255)');

          return gradient;
        },
        label: title,
        data: valueData,
        borderColor: ['rgba(112,164,250)'],
        radius: 0,
        hitRadius: 10,
        hoverBorderWidth: 6,
        borderWidth: 1,
      },
    ],
  };
  // const wid = labelData !== undefined && labelData?.length * 50;
  const labelcount = labelData !== undefined && labelData?.length > 30 ? 8 : 6;
  return (
    <div className="MemberChartMain">
      <CustomorComponent
        setSelecter={setSelecter}
        selecter={selecter}
        title={title}
        valueData={valueData}
      />
      <div className="ChartAreaWrapper">
        <Line
          data={data}
          width="1500"
          height="260"
          options={{
            responsive: false,
            scales: {
              y: {
                position: 'left',
                min: 0,
                max: Math.ceil(Math.max(...(valueData ?? [])) / 10) * 10,
                ticks: {
                  padding: 10,
                },
                border: {
                  dash: [3, 5],
                },
              },
              x: {
                grid: {
                  display: false,
                },
                ticks: {
                  align: 'start',
                  maxTicksLimit: labelcount,
                  maxRotation: 0,
                },
              },
            },
            layout: {
              padding: {
                left: 520, // add left padding here
                right: 0,
                top: 0,
                bottom: 0,
              },
            },
            plugins: {
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
            // interaction: {
            //   mode: 'x',
            // },
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
            width: 460px;
            margin: 0 10px 0px 30px;
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
          .MemberChartMain {
            margin: 20px 10px 10px 0px;
            border-radius: 4px;
            border: 2px solid #eee !important;
          }
        `}</style>
      </div>
    </div>
  );
}
