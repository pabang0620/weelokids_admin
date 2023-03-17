import { useEffect, useState } from 'react';
import { trpc } from '~/utils/trpc';
import MemberChartBorder from '~/components/Dashboard/Chart/MemberChartBorder';
import { trpcDataType } from './WithDrowUsers';

export type Period = 'daily' | 'weekly' | 'monthly';
// type NewUsersData = { label: string[]; value: number[] };

export default function ActiveUsers({ title }: trpcDataType) {
  // const { data, isLoding } = trpc.dashboard;
  const dailyData = trpc.dashboard.user.activeUsers.useQuery('daily');
  const weeklyData = trpc.dashboard.user.activeUsers.useQuery('weekly');
  const monthlyData = trpc.dashboard.user.activeUsers.useQuery('monthly');
  const [labelData, setLabelData] = useState<string[]>([]);
  const [valueData, setValueData] = useState<number[]>([]);
  // const [sendData, setSendData] = useState<NewUsersData[]>([]);
  const [selecter, setSelecter] = useState<Period>('daily');

  useEffect(() => {
    if (selecter === 'daily' && dailyData.data) {
      setValueData(dailyData.data.map((data) => data.value));
      setLabelData(dailyData.data.map((data) => data.label));
    } else if (selecter === 'weekly' && weeklyData.data) {
      setValueData(weeklyData.data.map((data) => data.value));
      setLabelData(weeklyData.data.map((data) => data.label));
    } else if (selecter === 'monthly' && monthlyData.data) {
      setValueData(monthlyData.data.map((data) => data.value));
      setLabelData(monthlyData.data.map((data) => data.label));
    }
  }, [selecter, dailyData.data]);

  return (
    <>
      {selecter.length > 0 && dailyData.data && (
        <MemberChartBorder
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
