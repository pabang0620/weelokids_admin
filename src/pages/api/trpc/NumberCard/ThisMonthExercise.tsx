import CustomorNumber from '~/components/Dashboard/Customor/CustomorNumber';
import { trpc } from '~/utils/trpc';

export default function ThisMonthExercise() {
  const thisMonthExercise =
    trpc.dashboard.contents.secOfThisMonthExercise.useQuery();
  console.log(thisMonthExercise);
  const hours =
    thisMonthExercise.data?.duration !== undefined &&
    Math.floor(thisMonthExercise.data?.duration / 3600);
  const minutes =
    thisMonthExercise.data?.duration !== undefined &&
    thisMonthExercise.data?.duration % 60;
  const thisMonth = hours + '\u00a0\u00a0 ' + minutes;
  return (
    <CustomorNumber
      totaltime={thisMonth}
      allUsers="이번달 콘텐츠 누적 운동시간"
      increaseUser={thisMonthExercise.data?.increase}
      unit="분"
    />
  );
}
