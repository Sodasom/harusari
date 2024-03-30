import { useLocation, useNavigate } from "react-router-dom";

import ArrowLeftCircleIcon from "../../assets/icons/ArrowLeftCircleIcon";

export default function Header() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  // 페이지 뒤로 가기
  const handleBack = () => navigate(-1);

  return (
    <header
      className={`py-4 px-6 
      ${pathname === "/write" || pathname === "/edit" ? "write_header" : ""}`}
    >
      {pathname === "/write" || pathname === "/edit" ? (
        <>
          <button onClick={handleBack}>
            <ArrowLeftCircleIcon width="24" height="24" />
          </button>
          <h1 className="flex-grow text-center text-base-gray80 font-bold">
            {pathname === "/write" ? "하루 쓰기" : "하루 수정"}
          </h1>
        </>
      ) : (
        <h1 className="text-xl text-base-gray80 font-bold">하루사리</h1>
      )}
    </header>
  );
}
