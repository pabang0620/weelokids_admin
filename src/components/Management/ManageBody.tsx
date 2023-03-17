import Image from 'next/image';
import SearchOption from './SearchOption';
import SearchResult from './SearchResult';

export default function ManageBody() {
  return (
    <div className="ManageBody">
      <div className="ManageBodyHeader">
        <div>회원정보 검색</div>
        <Image
          src="/question.png"
          alt="?"
          width={16}
          height={16}
          style={{ alignSelf: 'center' }}
        />
      </div>
      <SearchOption />
      <SearchResult />
      <style jsx>{`
        .ManageBody {
          width: 83.645vw;
        }
        .ManageBodyHeader {
          height: 22px;
          display: flex;
          flex-direction: row;
          padding: 9px 36px;
          background-color: #3f3f3f;
          color: #ffffff;
          margin-bottom: 20px;
          align-items: center;
        }
        .ManageBodyHeader div {
          margin-right: 0.5%;
        }
      `}</style>
    </div>
  );
}
