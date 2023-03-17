import CustomorNumber from '~/components/Dashboard/Customor/CustomorNumber';
import { trpc } from '~/utils/trpc';

export default function TotalUsers() {
  const { data } = trpc.dashboard.user.totalUsers.useQuery();
  return (
    <CustomorNumber
      totalClick={data?.total}
      allUsers="전체 회원수"
      increaseUser={data?.increase}
      unit="명"
      // increaseUser={data?.increase}
    />
  );
}
