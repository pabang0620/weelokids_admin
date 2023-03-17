import Image from 'next/image';
import { useState } from 'react';
import Selecter from '../DashboardComponent/Selecter';
import { trpcDataType3 } from '~/components/Dashboard/dataType';

export default function NewMemberActHeader({ title }: trpcDataType3) {
  const [tipHover, setTipHover] = useState(false);
  return (
    <>
      <div className="CustomorNumber">
        <div className="CustomorNumBox">
          <div className="CustomorNumSubName">{title}</div>
          <div
            className="QuestionHover"
            onMouseOver={() => setTipHover(true)}
            onMouseOut={() => setTipHover(false)}
            style={{ height: '22px' }}
          >
            <Image src="/question.png" alt="?" width={16} height={16} />
            {tipHover && (
              <div className="Hovertip">
                <Image src="/tipImage.png" alt="tip" width={384} height={40} />
              </div>
            )}
          </div>
        </div>
        {/* <div className="SelectFlexRow">
          <Selecter />
        </div> */}
      </div>
      <div></div>

      <style jsx>{`
        .SelectFlexRow {
          display: flex;
          flex-direction: row;
        }
        .QuestionHover {
          margin-left: 5px;
          position: relative;
        }

        .Hovertip {
          position: absolute;
          top: 0%;
          left: 150%;
        }
        .CustomorNumSub {
          display: flex;
          flex-direction: row;
          align-items: center;
           {
            /* transform: translateX(7%) translateY(-160%); */
          }
        }
        .CustomorNumSubName {
          width: 240px;
          font-family: NotoSansKR;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #000;
          margin: 0 0 0 5%;
          font-weight: 600;
        }
        .CustomorNumber {
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 40.5px 2% 10px 2%;
        }
        .CustomorNumBox {
          display: flex;
        }
        .CustomorNumBoxMain {
          display: flex;
          flex-direction: row;
          position: relative;
        }
      `}</style>
    </>
  );
}
