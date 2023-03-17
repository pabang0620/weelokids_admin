export default function ResultHeader() {
  return (
    <>
      <div className="ExcelDown">
        <span>선택회원 엑셀 다운로드</span>
        <select>
          <option value="day">일별</option>
          <option value="week">주별</option>
          <option value="month">월별</option>
        </select>
      </div>
      <ul>
        <li id="empty"></li>
        <li id="samewidth">사용자 아이디</li>
        <li id="name">이름</li>
        <li id="email">이메일</li>
        <li id="gender">성별</li>
        <li id="samewidth">생년월일</li>
        <li id="samewidth">신규 가입일</li>
        <li id="samewidth">최근 활동일</li>
        <li id="samewidth">최근 운동일</li>
        <li id="times">완강 횟수</li>
        <li id="allTime">누적 운동 시간</li>
      </ul>
      <style jsx>{`
        #empty {
          width: 2.615%;
        }
        #samewidth {
          width: 10%;
        }
        #name {
          width: 9.5%;
        }
        #email {
          width: 16.5%;
        }
        #gender {
          width: 7.09%;
        }

        #times {
          width: 5.915%;
        }
        #allTime {
          width: 8.71%;
        }

        ul {
          display: flex;
          flex-direction: row;
          background-color: #d9d9d9;
          margin: 0px;
          padding: 0px;
        }
        li {
          list-style: none;
          padding: 9px 15px;
          height: 24px;
          margin: auto;
          color: #4b4b4b;
          font-size: 14px;
          white-space: nowrap;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .ExcelDown {
          height: 103px;
          display: flex;
          justify-content: end;
          align-content: flex-end;
          position: relative;
           {
            /* border: none !important; */
          }
        }
        .ExcelDown span {
          position: absolute;
          right: 5%;
          bottom: 20px;
          height: 16px;
          width: 182px;
          text-decoration: underline;
          cursor: pointer;
        }
        .ExcelDown select {
          position: absolute;
          bottom: 18px;
          height: 16px;
        }
      `}</style>
    </>
  );
}
