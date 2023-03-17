import ContentDone from '~/pages/api/trpc/FooterChart/ContentDone';
import ContentsClick from '~/pages/api/trpc/FooterChart/ContentsClick';
import OverOnemin from '~/pages/api/trpc/FooterChart/OverOnemin';
import Percent from '~/pages/api/trpc/FooterChart/Percent';
import NewUserReten from '~/pages/api/trpc/LongChart/NewUserReten';

export default function FooterBody() {
  return (
    <div className="ContentsChartFlex">
      <ContentsClick title="콘텐츠 클릭 횟수" />
      <ContentDone title="콘텐츠 완강 횟수" />
      <OverOnemin title="콘텐츠 1분이상 시청한 횟수" />
      <Percent title="콘텐츠 완강 비율" />
      {/*  map 함수로 가능할거같음 */}
      <div className="SubChart">
        <NewUserReten title="신규회원가입자 재활동 리텐션" />
      </div>
      <style jsx>{`
        .SubChart {
          width: 53vw;
          margin: 20px 15px 10px 0px;
          flex: auto;
          border-radius: 4px;
          border: 2px solid #eee !important;
        }
        .ContentsChartMain {
          margin: 20px 15px 10px 0px;
          border-radius: 4px;
          border: 2px solid #eee !important;
        }
         {
          /* .ContentsChartMain3 {
          width: 27vw;
          border-radius: 4px;
          border: solid 2px #e6e6e6;
          margin: 20px 0px 10px 0px;
        } */
        }
        .ContentsChartFlex {
          width: 84vw;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
      `}</style>
    </div>
  );
}
