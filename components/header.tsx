import Link from "next/link";

import { GroqIcon } from "./icons";

export const Header = () => {
  return (
    <div className="fixed right-0 left-0 w-full top-0 bg-white dark:bg-zinc-950">
      <div className="flex justify-between items-center p-4">
        <div className="flex flex-row items-center gap-2 shrink-0 ">
          <span className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-2 home-links">
            
            <div className="jsx-e3e12cc6f9ad5a71 w-4 text-lg text-center text-zinc-300 dark:text-zinc-600">
              <svg
                data-testid="geist-icon"
                height={16}
                strokeLinejoin="round"
                viewBox="0 0 16 16"
                width={16}
                style={{ color: "currentcolor" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4.01526 15.3939L4.3107 14.7046L10.3107 0.704556L10.6061 0.0151978L11.9849 0.606077L11.6894 1.29544L5.68942 15.2954L5.39398 15.9848L4.01526 15.3939Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div className="jsx-e3e12cc6f9ad5a71 flex flex-row items-center gap-4">
              <Link className="flex flex-row items-end gap-2" target="_blank" href="https://groq.com">
                <GroqIcon size={32} />
              </Link>
            </div>
          </span>
        </div>
     
      </div>
    </div>
  );
};
