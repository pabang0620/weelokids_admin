import { trpcDataType3 } from '~/components/Dashboard/dataType';
import NewMemberAct from './NewMemberAct';

export default function NewMemberActBorder({
  title,
  retentionData,
}: trpcDataType3) {
  return (
    <div className="MemberChartMain">
      <NewMemberAct title={title} retentionData={retentionData} />
      <style jsx>{`
        .MemberChartMain {
          margin: 20px 10px 10px 0px;
          border-radius: 4px;
           {
            /* width: auto; */
          }
           {
            /* min-width: 1480px; */
          }
        }
      `}</style>
    </div>
  );
}
