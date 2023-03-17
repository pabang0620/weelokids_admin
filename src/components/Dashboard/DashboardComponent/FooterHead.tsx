import ThisMonthExercise from '~/pages/api/trpc/NumberCard/ThisMonthExercise';
import TotalContentsClick from '~/pages/api/trpc/NumberCard/TotalContentsClick';
import TotalExercise from '~/pages/api/trpc/NumberCard/TotalExercise';

export default function FooterHead() {
  return (
    <div>
      <TotalContentsClick /> <TotalExercise /> <ThisMonthExercise />
      <style jsx>{`
        div {
          display: flex;
          flex-direction: row;
        }
      `}</style>
    </div>
  );
}
