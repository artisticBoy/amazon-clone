import Link from "next/link";
import { navLinks } from "./index";
export default function Semibar() {
  return (
    <div className="bg-[#232f3e] p-2">
      {navLinks && navLinks.length > 0 && (
        <div className="text-white flex sm:gap-5 mobile:gap-4 mx-4 overflow-x-auto">
          {navLinks.map((navLink) => (
            <>
              <Link href={navLink.href}>
                <p className="hover:cursor-pointer">{navLink.name}</p>
              </Link>
            </>
          ))}
        </div>
      )}
    </div>
  );
}
