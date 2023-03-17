import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
// import { useRouter } from 'next/router';

export default function Sidebar() {
  // const router = useRouter();
  const [switchPage, setSwitchPage] = useState(false);
  const gotoManage = () => {
    setSwitchPage(true);
  };
  const gotoDashboard = () => {
    setSwitchPage(true);
    if (switchPage) {
      setSwitchPage(false);
    }
  };

  return (
    <div className="SidebarFlex">
      {/* <div className="SidebarWidth"></div> */}
      <div className="Sidebar">
        <Link href="/" onClick={gotoDashboard} style={{}}>
          <div className="DashBoardColor">
            <Image
              src="/dashboard.png"
              alt="대쉬보드 아이콘"
              width={18}
              height={18}
            />
            <p>대시보드</p>
          </div>
        </Link>
        <Link
          // style={{ textDecoration: 'none' }}
          href="/manage"
          onClick={gotoManage}
        >
          <div className="ManageColor">
            <Image
              src="/guest.png"
              alt="회원관리 아이콘"
              width={18}
              height={18}
            />
            <p>회원 관리</p>
          </div>
        </Link>
        {/* <div className="SidebarBlank"></div> */}
      </div>

      <style jsx>{`
        .SidebarFlex {
          display: flex;
          flex-direction: row;
        }
        .Sidebar {
          position: absolute;
          top: 108px;
          left: 0;
          height: 2400px;
          width: 11.458vw;
          background-color: #505050;
          min-width: 120px;
        }
        .Sidebar div {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: 72px;
          cursor: pointer;
          border: 0.1px solid #a3a3a3;
          border-left: none;
        }
        .DashBoardColor {
          background-color: ${switchPage ? '##505050;' : '#3f3f3f'};
        }
        .ManageColor {
          background-color: ${switchPage ? '#3f3f3f' : '##505050;'};
        }

        .Sidebar p {
          height: 18px;
          margin: 0 12px;
          font-family: NotoSansKR;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: -0.7px;
          color: #fff;
        }
         {
          /* .SidebarWidth {
          width: 11.458vw;
          height: 50px;
          margin-left: 100px;
          padding-left: 100px;
        } */
        }
        .SidebarBlank {
        }
      `}</style>
    </div>
  );
}
