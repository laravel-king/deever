import Image from "next/image";
import Link from "next/link";

const AppLogo = () => {
  return (
      <div className="flex h-[60px] items-center px-6">
          <Link className="flex items-center gap-2 font-semibold" href="/">
              <BanknoteIcon className="h-8 w-8 text-indigo-500" />
              <span className="uppercase">Deever </span>Inc
          </Link>
      </div>
  )
}

function BanknoteIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect width="20" height="12" x="2" y="6" rx="2" />
            <circle cx="12" cy="12" r="2" />
            <path d="M6 12h.01M18 12h.01" />
        </svg>
    )
}


export default AppLogo;