interface userDataTyle {
  key: number;
  userID: string;
  name: string;
  Email: string;
  gender: string;
  birth: string;
  signDay: string;
  currentDate: string;
  workOut: string;
  count: string;
  allTime: string;
}
// 데이터가 나오면 타입을 지정해줘야함
export default function Member({
  userID,
  name,
  Email,
  gender,
  birth,
  signDay,
  currentDate,
  workOut,
  count,
  allTime,
}: userDataTyle) {
  return (
    <>
      <ul>
        <li id="empty">
          <input type="checkbox"></input>
        </li>
        <li id="samewidth">{userID}</li>
        <li id="name">{name}</li>
        <li id="email">{Email}</li>
        <li id="gender">{gender}</li>
        <li id="samewidth">{birth}</li>
        <li id="samewidth">{signDay}</li>
        <li id="samewidth">{currentDate}</li>
        <li id="samewidth">{workOut}</li>
        <li id="times">{count}</li>
        <li id="allTime">{allTime}</li>
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
          margin: 0px;
          padding: 0px;
        }
        li {
          border: 1px solid #f1f1f2;
          list-style: none;
          padding: 9px 15px;
          height: 24px;
          margin: auto;
          white-space: nowrap;
          font-size: 14px;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </>
  );
}
