import CustomorNumber from '~/components/Dashboard/Customor/CustomorNumber';
import { trpc } from '~/utils/trpc';

export default function TotalExercise() {
  const totalExercise = trpc.dashboard.contents.totalSecOfExercise.useQuery();
  console.log(totalExercise);
  const hours =
    totalExercise.data?.duration !== undefined &&
    totalExercise.data?.duration !== null &&
    Math.floor(totalExercise.data?.duration / 3600);
  const minutes =
    totalExercise.data?.duration !== undefined &&
    totalExercise.data?.duration !== null &&
    totalExercise.data?.duration % 60;
  const thisMonth = hours + '\u00a0\u00a0 ' + minutes;
  return (
    <CustomorNumber
      allUsers="총 콘텐츠 누적 운동시간"
      totalExercise={thisMonth}
      increaseUser={totalExercise.data?.increase}
      unit="분"
    />
  );
}
