import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { trpc } from '~/utils/trpc';
import MemberChartBorder from '~/components/Dashboard/Chart/MemberChartBorder';

// 타입
export interface trpcDataType {
  labelData?: string[];
  valueData?: number[] | undefined;
  setSelecter?: Dispatch<SetStateAction<Period>>;
  selecter?: Period;
  title?: string;
}
export interface trpcDataType2 {
  labelData?: string[];
  valueData?: number[] | undefined;
  clickValue?: number[] | undefined;
  setSelecter?: Dispatch<SetStateAction<Period2>>;
  selecter?: Period2;
  title?: string;
}
export type Period = 'daily' | 'weekly' | 'monthly';
export type Period2 = 'daily' | 'weekly' | 'monthly' | 'all';

// type NewUsersData = { label: string[]; value: number[] };

export default function WithDrowUsers({ title }: trpcDataType) {
  // const { data, isLoding } = trpc.dashboard;

  const dailyData = trpc.dashboard.user.withdrawUsers.useQuery('daily');
  const weeklyData = trpc.dashboard.user.withdrawUsers.useQuery('weekly');
  const monthlyData = trpc.dashboard.user.withdrawUsers.useQuery('monthly');
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
