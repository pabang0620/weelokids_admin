import TotalUsers from '~/pages/api/trpc/NumberCard/TotalUsers';
import NewUsers from '~/pages/api/trpc/NewUsers';
import WithDrowUsers from '~/pages/api/trpc/WithDrowUsers';
import ActiveUsers from '~/pages/api/trpc/ActiveUsers';

export default function DashboardHeader() {
  return (
    <>
      <TotalUsers />
      <div className="DashboardHeader">
        <NewUsers title="신규 회원" />
        <ActiveUsers title="방문 회원" />
        <WithDrowUsers title="탈퇴 회원" />
        <style jsx>{`
          .MemberChartMain {
            margin: 20px 10px 10px 0px;
            border-radius: 4px;
            border: 2px solid #eee !important;
          }
          .DashboardHeader {
            width: 84vw;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
          }
        `}</style>
      </div>
    </>
  );
}
