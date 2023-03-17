import Selecter from '../Dashboard/DashboardComponent/Selecter';
import Image from 'next/image';
import Select from 'react-select';

export default function SearchOption() {
  const options: any = [
    { value: 'all', label: '전체검색' },
    { value: 'name', label: '이름' },
    { value: 'Email', label: '이메일' },
  ];
  const defaultValue = options[0];
  return (
    <div className="ManageOption">
      <div>
        <div>검색어</div>
        <span>
          <Select
            styles={{
              control: (baseStyles) => ({
                ...baseStyles,
                width: '100px',
                fontSize: '14px',
                backgroundColor: '#f1f1f2',
              }),
            }}
            // id=
            className="selectStyle"
            defaultValue={defaultValue}
            options={options}
            // defaultInputValue={defaultValue}
            // defaultValue={defaultValue}
            // options={options}
          />
          {/* 리액트셀렉터로 수정예정 */}
          <input></input>
        </span>
      </div>
      <div>
        <div>(만)나이</div>
        <span className="SearchSec">
          <input></input>
          <p>세</p>
          <input></input>
          <p>세</p>
        </span>
        <div className="gender">성별</div>
        <span className="SearchSec">
          <input name="gender" id="Female" type="checkbox" />
          <label htmlFor="Female">여성</label>
          <input name="gender" id="Male" type="checkbox" />
          <label htmlFor="Male">남성</label>
          <input name="gender" id="Unknown" type="checkbox" />
          <label htmlFor="Unknown">모름</label>
        </span>
      </div>
      <div>
        <div>이메일 수신 여부</div>
        <span className="SearchSec">
          <input name="EmailAll" type="radio" />
          <label>전체</label>
          <input name="EmailAll" type="radio" />
          <label>수신허용</label>
          <input name="EmailAll" type="radio" />
          <label>수신안함</label>
        </span>
      </div>
      <div>
        <div>가입 경로</div>
        <span className="SearchSec">
          <input id="SelfEmail" type="checkbox" />
          <label htmlFor="SelfEmail">자사이메일</label>
          <input id="Google" type="checkbox" />
          <label htmlFor="Google">구글</label>
          <input id="Naver" type="checkbox" />
          <label htmlFor="Naver">네이버</label>
          <input id="Kakao" type="checkbox" />
          <label htmlFor="Kakao">카카오</label>
        </span>
      </div>
      <div>
        <div>신규 가입일</div>
        <span>
          <input></input>{' '}
          <Image
            src="/calender.png"
            alt="calender"
            width={14}
            height={16}
            style={{ transform: 'translateX(-200%)' }}
          />
          <p>~</p>
          <input></input>{' '}
          <Image
            src="/calender.png"
            alt="calender"
            width={14}
            height={16}
            style={{ transform: 'translateX(-200%)' }}
          />
        </span>
      </div>
      <div>
        <div>최근 활동일</div>
        <span>
          <input></input>{' '}
          <Image
            src="/calender.png"
            alt="calender"
            width={14}
            height={16}
            style={{ transform: 'translateX(-200%)' }}
          />
          <p>~</p>
          <input></input>{' '}
          <Image
            src="/calender.png"
            alt="calender"
            width={14}
            height={16}
            style={{ transform: 'translateX(-200%)' }}
          />
        </span>
      </div>
      <div>
        <div>콘텐츠 클릭일</div>
        <span>
          <input></input>
          <Image
            src="/calender.png"
            alt="calender"
            width={14}
            height={16}
            style={{ transform: 'translateX(-200%)' }}
          />
          <p>~</p>
          <input></input>
          <Image
            src="/calender.png"
            alt="calender"
            width={14}
            height={16}
            style={{ transform: 'translateX(-200%)' }}
          />
        </span>
      </div>
      <div>
        <div>콘텐츠 클릭 여부</div>
        <span>
          <input></input>
        </span>
      </div>
      <div>
        <div>콘텐츠 완강 여부</div>
        <span>
          <input></input>
        </span>
      </div>
      <div>
        <div>콘텐츠 완강 횟수</div>
        <span>
          <input></input>
          <p>회</p>
          <p>~</p>
          <input></input>
          <p>회</p>
        </span>
      </div>
      <div>
        <div>누적운동시간</div>
        <span>
          <input></input>
          <p>시간</p>
          <input></input>
          <p>분</p>
          <p>~</p>
          <input></input>
          <p>시간</p>
          <input></input>
          <p>분</p>
        </span>
      </div>

      <div className="SearchButton">
        <button className="reset">초기화</button>
        <button className="search">검색</button>
      </div>

      <style jsx>{`
        input {
          height: 27px;
          border: 1px solid #e2e2e2;
          border-radius: 5px;
          outline: none;
        }
        p {
          margin: 0 10px;
        }
        .ManageOption {
          border: 1px solid #dedede;
          border-bottom: none;
        }
        .ManageOption div {
          display: flex;
          flex-direction: row;
          align-items: center;
          border: 1px solid #dedede;
          border-top: none;
          border-left: none;
          color: #797979;
        }
        .ManageOption div div {
          height: 58px;
          width: 11.5vw;
          padding: 0px 35px;
          background-color: #f1f1f2;
        }
        .ManageOption span {
          margin: 0 2%;
          display: flex;
          flex-direction: row;
          align-items: center;
        }
        .SearchFirst .SearchSec {
          width: 32.627vw;
        }
        .SearchSec label {
          margin: 0px 20px 0px 10px;
        }
        .SearchButton {
          display: flex;
          justify-content: center;
        }

        .SearchButton button {
          width: 200px;
          height: 52px;
          margin: 19px 10px 20px;
          cursor: pointer;
        }
        .reset {
          background-color: white;
          color: #3987ff;
          border: 2px solid #3987ff;
          border-radius: 10px;
        }
        .search {
          color: #4b4b4b;
          border: none;
          border-radius: 10px;
        }
        .gender {
          border: 1px solid #f1f1f2 !important;
          border-bottom: none !important;
        }
      `}</style>
    </div>
  );
}
