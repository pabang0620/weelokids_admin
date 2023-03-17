import { useEffect, useState } from 'react';
import { trpc } from '~/utils/trpc';
import { trpcDataType3 } from '../../../../components/Dashboard/dataType';
import NewMemberActBorder from '~/components/Dashboard/Chart/NewMemberActBorder';

export type Period = 'daily' | 'weekly' | 'monthly';
// type NewUsersData = { label: string[]; value: number[] };

export default function NewUserReten({ title }: trpcDataType3) {
  // const { data, isLoding } = trpc.dashboard;
  const allRetentionData =
    trpc.dashboard.contents.retentionOfNewUsersByWeek.useQuery();

  const retentionData = allRetentionData.data;
  useEffect(() => {
    allRetentionData.data;
  }, [allRetentionData]);
  console.log(retentionData);
  return (
    <>
      <NewMemberActBorder retentionData={retentionData} title={title} />
    </>
  );
}
