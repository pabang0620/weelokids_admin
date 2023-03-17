export default function NoResult() {
  return (
    <div>
      <span>검색 결과가 없습니다.</span>
      <style jsx>{`
        span {
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          display: flex;
          justify-content: center;
        }
        div {
          display: flex;
          justify-content: center;
        }
      `}</style>
    </div>
  );
}
