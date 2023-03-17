import CustomorNumber from '~/components/Dashboard/Customor/CustomorNumber';
import { trpc } from '~/utils/trpc';

export default function TotalContentsClick() {
  const Clickdata = trpc.dashboard.contents.totalNumOfContentsClick.useQuery();
  return (
    <CustomorNumber
      allUsers="총 콘텐츠 누적 클릭 횟수"
      // increaseUser=
      totalClick={Clickdata.data?.total}
      increaseUser={Clickdata.data?.increase}
      unit="번"
    />
  );
}
