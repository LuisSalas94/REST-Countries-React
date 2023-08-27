import { useNavigate } from "react-router-dom";

const CountryButton = () => {
  const navigation = useNavigate();

  return (
    <div className="p-10">
      <button
        onClick={() => navigation("/")}
        className="flex items-center rounded border border-slate-400 bg-white px-6 py-2 font-medium text-slate-400 shadow-xl"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19.5 12h-15m0 0l6.75 6.75M4.5 12l6.75-6.75"
          />
        </svg>
        <span className="mx-3">Back</span>
      </button>
    </div>
  );
};

export default CountryButton;
