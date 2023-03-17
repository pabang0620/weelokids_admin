import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import app from './api/trpc/Firebase';
import Image from 'next/image';

export default function adminLogin({}) {
  const provider = new GoogleAuthProvider();
  const auth = getAuth(app);
  const googleLogin = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential !== null && credential.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log(result);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
      });
  };

  return (
    <div>
      <div className="loginNav">
        <div></div>
        <Image src="/logo.png" alt="윌로키즈 로고" width={170} height={21} />
      </div>
      <div className="loginBody">
        <Image src="/logoBig.png" alt="윌로키즈 로고" width={460} height={56} />
        <div className="adminPage">관리자 페이지</div>
        <button onClick={googleLogin} className="googleStart">
          <Image
            src="/login-google@3x.png"
            alt="googleIcon"
            width={30}
            height={30}
          ></Image>
          <span>구글로 시작하기</span>
        </button>
      </div>
      <style jsx>{`
        .loginNav div {
          width: 50px;
          height: 54px;
        }
        .loginBody {
          width: 98vw;
          height: 700px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        .loginNav {
          position: absolute;
          width: 98vw;
          height: 54px;
          display: flex;
          align-items: center;
        }
        .adminPage {
          width: 460px;
          height: 46px;
          font-family: NanumBarunGothicOTF;
          font-size: 40px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #bbb;
          margin: 32px 0px 86px 0px;
        }
        .googleStart {
          width: 300px;
          height: 52px;
          border-radius: 8px;
          border: solid 2px #3987ff;
          background-color: #fff;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        span {
          width: 157px;
          height: 24px;
          background-color: white;
          border-radius: 8px;
          border: none;
          color: #3987ff;
          font-family: NotoSansKR;
          font-size: 16px;
        }
      `}</style>
    </div>
  );
}
