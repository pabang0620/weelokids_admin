import ContentsChart from './ContentsChart';
import { trpcDataType2 } from '~/pages/api/trpc/WithDrowUsers';

export default function ContentsChartBorder({
  labelData,
  valueData,
  setSelecter,
  selecter,
  title,
  clickValue,
}: trpcDataType2) {
  return (
    <div className="ContentsChartMain">
      <ContentsChart
        labelData={labelData}
        valueData={valueData}
        clickValue={clickValue}
        setSelecter={setSelecter}
        selecter={selecter}
        title={title}
      />
      <style jsx>{`
        .ContentsChartMain {
          margin: 20px 15px 10px 0px;
          border-radius: 4px;
          border: 2px solid #eee !important;
        }
      `}</style>
    </div>
  );
}
