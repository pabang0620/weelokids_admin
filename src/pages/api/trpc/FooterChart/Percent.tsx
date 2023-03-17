import { useEffect, useState } from 'react';
import { trpc } from '~/utils/trpc';
import ContentsChartBorder from '~/components/Dashboard/Chart/ContentsChartBorder';
import { trpcDataType2 } from '../WithDrowUsers';

export type Period = 'daily' | 'weekly' | 'monthly' | 'all';
// type NewUsersData = { label: string[]; value: number[] };

export default function Percent({ title }: trpcDataType2) {
  // const { data, isLoding } = trpc.dashboard;
  const clickdailyData =
    trpc.dashboard.contents.numOfContentsClick.useQuery('daily');
  const clickweeklyData =
    trpc.dashboard.contents.numOfContentsClick.useQuery('weekly');
  const clickmonthlyData =
    trpc.dashboard.contents.numOfContentsClick.useQuery('monthly');
  const clickallData =
    trpc.dashboard.contents.numOfContentsClick.useQuery('all');
  // 1분 데이터
  const dailyData = trpc.dashboard.contents.numOfContentDone.useQuery('daily');
  const weeklyData =
    trpc.dashboard.contents.numOfContentDone.useQuery('weekly');
  const monthlyData =
    trpc.dashboard.contents.numOfContentDone.useQuery('monthly');
  const allData = trpc.dashboard.contents.numOfContentDone.useQuery('all');
  // 완강 데이터

  const [clickValue, setclickValue] = useState<number[]>([]);
  // 1분 데이터
  const [labelData, setLabelData] = useState<string[]>([]);
  const [valueData, setValueData] = useState<number[]>([]);
  // 완강 데이터
  const [selecter, setSelecter] = useState<Period>('all');

  // console.log(division);
  useEffect(() => {
    if (selecter === 'all' && allData.data && clickallData.data) {
      setValueData(allData.data.map((data) => data.value));
      setLabelData(allData.data.map((data) => data.label));
      setclickValue(clickallData.data.map((data) => data.value));
    } else if (
      selecter === 'weekly' &&
      weeklyData.data &&
      clickweeklyData.data
    ) {
      setValueData(weeklyData.data.map((data) => data.value));
      setLabelData(weeklyData.data.map((data) => data.label));
      setclickValue(clickweeklyData.data.map((data) => data.value));
    } else if (
      selecter === 'monthly' &&
      monthlyData.data &&
      clickmonthlyData.data
    ) {
      setValueData(monthlyData.data.map((data) => data.value));
      setLabelData(monthlyData.data.map((data) => data.label));
      setclickValue(clickmonthlyData.data.map((data) => data.value));
    } else if (selecter === 'daily' && dailyData.data && clickdailyData.data) {
      setValueData(dailyData.data.map((data) => data.value));
      setLabelData(dailyData.data.map((data) => data.label));
      setclickValue(clickdailyData.data.map((data) => data.value));
    }
  }, [selecter, allData.data, clickallData.data]);

  return (
    <>
      {selecter.length > 0 && allData.data && (
        <ContentsChartBorder
          labelData={labelData}
          valueData={valueData}
          clickValue={clickValue}
          setSelecter={setSelecter}
          selecter={selecter}
          title={title}
        />
      )}
    </>
  );
}
