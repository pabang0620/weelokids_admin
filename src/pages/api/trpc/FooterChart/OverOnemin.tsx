import { useEffect, useState } from 'react';
import { trpc } from '~/utils/trpc';
import ContentsChartBorder from '~/components/Dashboard/Chart/ContentsChartBorder';
import { trpcDataType2 } from '../WithDrowUsers';

export type Period = 'daily' | 'weekly' | 'monthly' | 'all';
// type NewUsersData = { label: string[]; value: number[] };

export default function OverOnemin({ title }: trpcDataType2) {
  // const { data, isLoding } = trpc.dashboard;
  const dailyData =
    trpc.dashboard.contents.numOfContentViewOverOneMin.useQuery('daily');
  const weeklyData =
    trpc.dashboard.contents.numOfContentViewOverOneMin.useQuery('weekly');
  const monthlyData =
    trpc.dashboard.contents.numOfContentViewOverOneMin.useQuery('monthly');
  const allData =
    trpc.dashboard.contents.numOfContentViewOverOneMin.useQuery('all');
  const [labelData, setLabelData] = useState<string[]>([]);
  const [valueData, setValueData] = useState<number[]>([]);
  // const [sendData, setSendData] = useState<NewUsersData[]>([]);
  const [selecter, setSelecter] = useState<Period>('all');

  useEffect(() => {
    if (selecter === 'all' && allData.data) {
      setValueData(allData.data.map((data) => data.value));
      setLabelData(allData.data.map((data) => data.label));
    } else if (selecter === 'weekly' && weeklyData.data) {
      setValueData(weeklyData.data.map((data) => data.value));
      setLabelData(weeklyData.data.map((data) => data.label));
    } else if (selecter === 'monthly' && monthlyData.data) {
      setValueData(monthlyData.data.map((data) => data.value));
      setLabelData(monthlyData.data.map((data) => data.label));
    } else if (selecter === 'daily' && dailyData.data) {
      setValueData(dailyData.data.map((data) => data.value));
      setLabelData(dailyData.data.map((data) => data.label));
    }
  }, [selecter, allData.data]);

  return (
    <>
      {selecter.length > 0 && allData.data && (
        <ContentsChartBorder
          labelData={labelData}
          valueData={valueData}
          setSelecter={setSelecter}
          selecter={selecter}
          title={title}
        />
      )}
    </>
  );
}
