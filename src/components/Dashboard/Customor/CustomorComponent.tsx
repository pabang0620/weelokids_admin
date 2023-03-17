import Image from 'next/image';
import { useEffect } from 'react';
import Select from 'react-select';
import { trpcDataType, Period } from '~/pages/api/trpc/WithDrowUsers';

interface OptionType {
  value: Period;
  label: string;
}

export default function CustomorComponent({
  // selecter,
  setSelecter,
  title,
  valueData,
}: trpcDataType) {
  const options: OptionType[] = [
    // const options: any = [
    { value: 'daily', label: '일별' },
    { value: 'weekly', label: '주별' },
    { value: 'monthly', label: '월별' },
  ];

  const defaultValue: OptionType = { value: 'daily', label: '일별' };

  // const sum = valueData?.reduce((stack, el) => {
  //   return stack + el;
  // }, 0);

  // let sum = 0;
  // valueData?.forEach(function (el) {
  //   sum += el;
  // });
  // 누적
  const lastData = valueData?.at(-1);

  const last = valueData && valueData[valueData.length - 1];
  // const sum = valueData.reduce((a, b) => a + b);

  const handleSelectChange = (selectedOption: OptionType) => {
    setSelecter(selectedOption.value);
  };

  useEffect(() => {
    setSelecter(defaultValue.value);
  }, []);
  // 첫 렌더링에 selecet 값을 daily로 넣는다
  return (
    <>
      <div className="CustomorNumber">
        <div className="CustomorNumBox">
          <div className="CustomorNumBoxMain">
            <p className="pTagMargin">{lastData}</p>
            {/* API 데이터  */}
            <span>명</span>
            <div className="Notice">+{last}</div>
            {/* API 데이터  */}
          </div>
          <div>
            <Select
              defaultValue={defaultValue}
              options={options}
              onChange={(value) => {
                if (value) {
                  handleSelectChange(value);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div>
        <div className="CustomorNumSub">
          <div className="CustomorNumSubName">{title}</div>
          <div className="QuestionHover" style={{ height: '22px' }}>
            <Image src="/question.png" alt="?" width={16} height={16} />

            <div className="Hovertip">
              <Image src="/tipImage.png" alt="tip" width={384} height={40} />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .pTagMargin {
          margin: 0;
        }
        .QuestionHover {
          margin-left: 5px;
          position: relative;
        }
        .QuestionHover:hover .Hovertip {
          display: block;
        }
        .Hovertip {
          display: none;
          position: absolute;
          top: 0%;
          left: 150%;
        }
        .CustomorNumSub {
          display: flex;
          flex-direction: row;
          align-items: center;

          transform: translateY(-65%);
        }
        .CustomorNumSubName {
          height: 16px;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: normal;
          color: #bababa;
          margin: 0 0 0 30px;
        }
        .CustomorNumber {
          width: 522px;
          display: flex;
          flex-direction: row;
          margin: 40.5px 0 10px;
        }
        .CustomorNumBox {
          width: 500px;
          display: flex;
          justify-content: space-between;
        }
        .CustomorNumBoxMain {
          display: flex;
          flex-direction: row;
          position: relative;
        }
        .CustomorNumBoxMain p {
          margin: 1px 4px 0 35%;
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
          margin: 1px 4px 12px 0;
          font-size: 14px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.14;
          letter-spacing: normal;
          color: #3f3f3f;
          align-self: end;
        }
        .Notice {
          position: absolute;
          width: 50px;
          left: 150%;
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
          margin-right: 8%;
          text-align: center;
        }
      `}</style>
    </>
  );
}
