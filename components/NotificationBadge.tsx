const NotificationBadge = () => {
  return (
    <div className="fixed flex gap-2 items-center bottom-10 right-5 border border-orange-400 rounded-md p-3 bg-black">
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
      <p>copied to clipboard</p>
    </div>
  );
};

export default NotificationBadge;
