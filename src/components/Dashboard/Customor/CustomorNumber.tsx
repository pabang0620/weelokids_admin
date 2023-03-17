import Image from 'next/image';

interface UsersdataType {
  totalClick?: number | undefined;
  totalExercise?: string;
  totaltime?: string;
  increaseUser?: number | undefined;
  allUsers?: string;
  unit?: string;
}

export default function CustomorNumber({
  totalClick,
  totalExercise,
  totaltime,
  increaseUser,
  allUsers,
  unit,
}: UsersdataType) {
  // const hours = totaltime !== undefined && Math.floor(totaltime / 60);
  // const minutes = totaltime !== undefined && totaltime % 60;
  return (
    <>
      <div className="CustomorNumber">
        <div className="CustomorNumBox">
          <div className="CustomorNumBoxMain">
            {totalClick !== undefined && totalClick > 0 && <p>{totalClick}</p>}
            {totalExercise !== undefined && totalExercise?.length > 0 && (
              <p>
                {totalExercise} <span className="labelTime">시간</span>
              </p>
            )}
            {totaltime !== undefined && totaltime?.length > 0 && (
              <p>
                {totaltime}
                <span className="labelTime">시간</span>
              </p>
            )}
            <span>{unit}</span>
          </div>
          {/* <div className="Notice">{increaseUser}</div> */}
          {increaseUser !== undefined ? (
            increaseUser >= 0 ? (
              <div className="Notice">+{increaseUser}</div>
            ) : (
              <div className="Notice2">-{increaseUser}</div>
            )
          ) : (
            <div className="Notice2">N/A</div>
          )}
          {/* API 데이터  */}
        </div>
        <div className="CustomorNumSub">
          <div className="CustomorNumSubName">{allUsers}</div>
          <div
            className="QuestionHover"
            // onMouseOver={() => setTipHover(true)}
            // onMouseOut={() => setTipHover(false)}
            style={{ height: '22px' }}
          >
            <Image src="/question.png" alt="?" width={16} height={16} />
            <div className="Hovertip">
              <Image src="/tipImage.png" alt="tip" width={384} height={40} />
            </div>
          </div>
          {/* {tipHover && ( */}

          {/* )} */}
        </div>
      </div>

      <style jsx>{`
        .labelTime {
          position: absolute;
          white-space: nowrap;
          right: 20px;
        }
        .QuestionHover {
          position: relative;
          margin-left: 5px;
        }
        .Hovertip {
          position: absolute;
          top: 0%;
          left: 170%;
          display: none;
        }
        .QuestionHover:hover .Hovertip {
          display: flex;
        }

        .CustomorNumSub {
          position: relative;
          display: flex;
          flex-direction: row;
          transform: translateX(7%) translateY(-160%);
          align-items: center;
        }
        .CustomorNumSubName {
          position: relative;
          height: 16px;
          font-family: NotoSansKR;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: normal;
          color: #bababa;
          margin: 0px 0px;
          font-weight: 500;
        }
        .CustomorNumber {
          width: 27.18vw;
          height: 92px;
          border-radius: 4px;
          border: solid 2px #e6e6e6;
          margin-right: 1%;
        }
        .CustomorNumBox {
          margin: 24px 0px;
          display: flex;
          justify-content: space-between;
        }
        .CustomorNumBoxMain {
          display: flex;
          flex-direction: row;
        }
        .CustomorNumBoxMain p {
          position: relative;
          height: 36px;
          margin: 1px 4px 8px 35px;
          font-family: NotoSansKR;
          font-size: 32px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 0.5;
          letter-spacing: normal;
          color: #000;
        }
        .CustomorNumBoxMain span {
          font-family: NotoSansKR;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: normal;
          color: #3f3f3f;
          margin-top: 8px;
        }
        .Notice {
          width: 44px;
          height: 22px;
          font-family: NotoSansKR;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #7bcc94;
          border-radius: 3.9px;
          background-color: #f0fbed;
          text-justify: center;
          margin-right: 8%;
        }
        .Notice2 {
          width: 44px;
          height: 22px;
          font-family: NotoSansKR;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #e36a83;
          border-radius: 3.9px;
          background-color: #fdf2f1;
          text-justify: center;
          margin-right: 8%;
        }
      `}</style>
    </>
  );
}
