import { getTimeAgo } from "./utils/chatUtils";

function classNames(...classes: (string | boolean)[]): string {
  return classes.filter(Boolean).join(" ");
}

export interface MessageProps {
    user: string;
    text: string;
    createdAt: string;
}

export const Message = ({ user, text, createdAt }: MessageProps)=> {
  return (
    <li
      className={classNames(
        user === "01H2WYF18JXWGF2MX084MCFTGM" ? "justify-start" : "justify-end",
        "flex"
      )}
    >
      <div>
        <div
          className={classNames(
            user === "01H2WYF18JXWGF2MX084MCFTGM"
              ? "bg-blue-600 dark:bg-blue-500 text-white"
              : "text-gray-700 dark:text-gray-400 bg-white border border-gray-200 shadow-md dark:bg-gray-900 dark:border-gray-700",
            "relative max-w-xl px-4 py-2 rounded-lg shadow"
          )}
        >
          <span className="block font-normal">{text}</span>
        </div>
        <span className="block text-sm text-gray-700 dark:text-gray-400">
          {getTimeAgo(createdAt)}
        </span>
      </div>
    </li>
  );
}
