import Image from "next/image";
import Link from "next/link";

const AppLogo = () => {
  return (
      <Link href="/" className="flex items-start">
        <Image src="/building-bank.svg" width={32} height={21} alt="applogo" />
          <span className="h3 font-bold pb-2 text-blue-600 hidden md:block">Deever</span>
      </Link>
  )
}

export default AppLogo;