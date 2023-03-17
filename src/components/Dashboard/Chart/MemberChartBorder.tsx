import MemberChart from './MemberChart';
import { trpcDataType } from '~/pages/api/trpc/WithDrowUsers';

export default function MemberChartBorder({
  labelData,
  valueData,
  setSelecter,
  selecter,
  title,
}: trpcDataType) {
  return (
    <div className="MemberChartMain">
      <MemberChart
        labelData={labelData}
        valueData={valueData}
        setSelecter={setSelecter}
        selecter={selecter}
        title={title}
      />
      <style jsx>{`
        .MemberChartMain {
          margin: 20px 10px 10px 0px;
          border-radius: 4px;
          border: 2px solid #eee !important;
        }
      `}</style>
    </div>
  );
}
