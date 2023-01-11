import { useState } from "react";
interface CodeCardProps {
  id: number;
  title: string;
  code: string;
}

export default function CodeCard({ id, title, code }: CodeCardProps) {
  const [isCopied, setCopied] = useState(false);
  const copyToClipboard = () => {
    const reset = () => {
      setCopied(false);
    };
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(reset, 2000);
  };
  return (
    <li key={id} className="w-full">
      <p className="mt-8 mb-8">{title}</p>
      <div className=" w-full max-w-5xl bg-transparent border border-slate-800 rounded-md mt-4 p-4 relative">
        <button
          onClick={copyToClipboard}
          className="absolute right-0 top-0 m-2 p-1 rounded-md backdrop-blur-sm hover:bg-gradient-to-br from-[#FF4D4D] to-orange-500"
        >
          {isCopied ? (
            <svg
              className="w-5 h-5 rounded-md "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
              ></path>
            </svg>
          ) : (
            <svg
              className="w-5 h-5 rounded-md "
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
              ></path>
            </svg>
          )}
        </button>
        <pre className="overflow-x-auto w-full">
          <code className="text-slate-400">{code} </code>
        </pre>
      </div>
    </li>
  );
}
