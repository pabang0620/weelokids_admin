import Image from 'next/image';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { trpcDataType2 } from '~/pages/api/trpc/WithDrowUsers';

export default function ContentsClickHead({
  setSelecter,
  title,
  valueData,
}: trpcDataType2) {
  const options = [
    { value: 'daily', label: '일별' },
    { value: 'weekly', label: '주별' },
    { value: 'monthly', label: '월별' },
    { value: 'all', label: '누적' },
  ];
  const defaultValue = options[3];
  // 셀렉트 타입
  const selectChange = (selectedOption: any) => {
    setSelecter(selectedOption.value);
  };

  return (
    <>
      <div className="CustomorNumber">
        <div className="CustomorNumBox">
          <div className="CustomorNumSubName">{title}</div>
          <div className="QuestionHover" style={{ height: '22px' }}>
            <Image src="/question.png" alt="?" width={16} height={16} />
            <div className="Hovertip">
              <Image src="/tipImage.png" alt="tip" width={384} height={40} />
            </div>
          </div>
        </div>
        <div className="SelectFlexRow">
          <Select
            defaultValue={defaultValue}
            options={options}
            onChange={selectChange}

            // isOptionSelected={setSelecter}
          />
        </div>
      </div>

      <style jsx>{`
    }
        .QuestionHover {
          margin-left: 5px;
          position: relative;
        }
        .QuestionHover:hover .Hovertip {
          display: block;
        }
        .SelectFlexRow {
          display: flex;
          flex-direction: row;
        }
        .QuestionHover {
          margin-left: 5px;
          position: relative;
        }

        .Hovertip {
          display: none;
          position: absolute;
          top: 0%;
          left: 150%;
          z-index: 2;
        }
        .CustomorNumSub {
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .CustomorNumSubName {
          white-space: nowrap;
          font-size: 16px;
          font-weight: 600;
          font-stretch: normal;
          font-style: normal;
          line-height: 1;
          letter-spacing: normal;
          color: #000;
          margin: 2px 0 0 5%;
        }
        .CustomorNumber {
          width: 488px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;
          margin: 40.5px 15px 10px 15px;
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
