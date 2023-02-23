import { memo } from "react";
import { Link } from "react-router-dom";

 const FailedLogin = memo(() => {
  return (
  <>
    <h1>登録またはログイン失敗です。</h1>
    <div>
      新規登録は<Link to={`/register/`}>こちら</Link>
    </div>
    <div>
      <Link to={`/`}>ホームに戻る</Link>
    </div>
  </>
  )
});

export default FailedLogin;