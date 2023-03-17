import NewUserReten from '~/pages/api/trpc/LongChart/NewUserReten';

export default function DashobardBody() {
  return (
    <>
      <div className="DashboardHeader">
        <NewUserReten title="신규회원가입자 재활동 리텐션" />
      </div>
      <style jsx>{`
        .DashboardHeader {
          width: 83vw;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
          border-radius: 4px;
          border: 2px solid #eee !important;
          margin-bottom: 10px;
        }
      `}</style>
    </>
  );
}
