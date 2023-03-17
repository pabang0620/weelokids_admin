import Image from 'next/image';

export default function LayoutNavbar() {
  return (
    <>
      <nav className="LayoutNavbar">
        <div className="LayoutNavbarBox">
          <Image src="/logo.png" alt="윌로키즈 로고" width={170} height={21} />
          <div className="LayoutSlice"></div>
          <button id="OtherColor">관리자 페이지</button>
        </div>
        <div className="LayoutNavbarBox">
          <button>키즈웹페이지 가기</button>
          <button>딕셔너리 페이지 가기</button>
          <button>로그아웃</button>
        </div>
      </nav>
      <nav className="WebAppNav">
        <div className="LayoutNavbarBox">
          <button>WEB</button>
          <button>APP</button>
        </div>
      </nav>
      <style jsx>{`
        button {
          height: 21px;
          font-family: NotoSansKR;
          font-size: 16px;
          border: none;
          background-color: white;
          letter-spacing: -0.7px;
          color: #797979;
          cursor: pointer;
          margin: 0 5px;
        }
        #OtherColor {
          color: #bbb;
        }
        .LayoutSlice {
          width: 2px;
          height: 21px;
          margin: 2px 14px 1px 14px;
          background-color: #bbb;
        }
        .LayoutNavbar {
          width: 100%;
          position: absolute;
          top: 0;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          height: 54px;
        }
        .LayoutNavbarBox {
          display: flex;
          flex-direction: row;
          align-items: center;
          margin: 0px 2.447%;
        }
        .LayoutNavbarBox button:hover {
          color: #3987ff;
        }
        .LayoutNavbarBox div {
          align-self: center;
        }
        .WebAppNav {
          width: 100%;
          position: absolute;
          top: 54px;
          display: flex;
          flex-direction: row;
          height: 54px;
          background-color: #eaeaea;
          align-items: center;
        }
        .WebAppNav button {
          width: 85px;
          height: 54px;
          padding: 15px 27px 15px 28px;
          background-color: #eaeaea;
          margin: 0px 2.447%;
          cursor: pointer;
        }
      `}</style>
    </>
  );
}
