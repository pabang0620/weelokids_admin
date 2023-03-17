import ResultHeader from './ResultHeader';
import Member from './Member';
import Image from 'next/image';

export default function SearchResult() {
  const data = {
    userInfo: [
      {
        id: 0,
        userID: 'Co12100055',
        name: '장진규',
        Email: 'alan.jk.jang@gmail.com',
        gender: '남성',
        birth: '1985-07-17',
        signDay: '2022-09-28',
        currentDate: '2022-09-28',
        workOut: '2022-09-28',
        allTime: '3분',
        count: '1',
      },
      {
        id: 1,
        userID: 'Co12100056',
        name: '하하',
        Email: 'csprhkiwon@naver.com',
        gender: '남성',
        birth: '1985-07-17',
        signDay: '2022-09-28',
        currentDate: '2022-09-28',
        workOut: '2022-09-28',
        count: '1',
        allTime: '3분',
      },
    ],
  };

  return (
    <>
      <ResultHeader />
      <div className="ResultSize">
        {/* map */}
        {data.userInfo.length > 0 &&
          data.userInfo.map((userData) => (
            <Member
              key={userData.id}
              userID={userData.userID}
              name={userData.name}
              Email={userData.Email}
              gender={userData.gender}
              birth={userData.birth}
              signDay={userData.signDay}
              currentDate={userData.currentDate}
              workOut={userData.workOut}
              count={userData.count}
              allTime={userData.allTime}
            />
          ))}
      </div>
      {/* 데이터가 20 초과일때 */}
      <div className="moreInfo">
        <Image src="/more.png" alt="더보기" width={11.6} height={11.2} />
        <span>더보기</span>
      </div>
      <style jsx>{`
        .ResultSize {
          height: 880px;
          overflow: hidden;
        }
        span {
          width: 49px;
          height: 18px;
          margin: 0 0 0 7.8px;
          font-family: Helvetica;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: normal;
          text-align: center;
        }
        .moreInfo {
          width: 80vw;
          display: flex;
          flex-direction: row;
          justify-content: center;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
