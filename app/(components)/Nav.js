import Image from "next/image";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import Link from "next/link";

export default function Nav() {
  return (
    <nav className="bg-[#131A22] w-full p-3">
      <div className="w-full lg:flex lg:justify-evenly lg:items-center">
        {/* image */}
        <div className="mobile:flex md:w-[90vw] sm:w-[85vw] mobile:w-[80vw] mobile:justify-between lg:w-auto">
          <Link href={"/"}>
            <Image
              src={
                "https://zeevector.com/wp-content/uploads/Amazon-Logo-White@zeevector.png"
              }
              width={110}
              height={80}
              alt="amazon-logo"
            />
          </Link>
          {/* sign in for mobile */}
          <div className="lg:hidden mobile:flex text-white hover:cursor-pointer">
            <p>Sign in</p>
            <ArrowForwardIosIcon />
            <PersonOutlineIcon />
          </div>
        </div>
        {/* Deliver option */}
        <div className="mobile:small mobile:gap-1 lg:big">
          <p className="text-white text-xs font-[80]">Deliver to</p>
          <p className="text-white font-bold">Nepal</p>
        </div>
        <br />
        {/* input values */}
        <div className="mobile:w-full mobile:mt-2 flex lg:w-[60%] border-none">
          <div className="mobile:hidden lg:flex items-center px-2 text-sm text-black bg-[#f5f5f5] border-[2px] rounded-l-lg hover:cursor-pointer">
            <p>All</p>
            <ArrowDropDownIcon />
          </div>
          <input
            type="text"
            placeholder="Search Amazon"
            className="lg:w-[100%] mobile:rounded-l-lg mobile:w-full lg:rounded-l-none"
          />
          <div className="border-[2px] bg-[#FEBD69] p-2 flex items-center rounded-r-lg hover:cursor-pointer font-bold text-black text-xl">
            <SearchIcon />
          </div>
        </div>
        {/* language section */}
        <div className="lg:flex mobile:hidden items-center cursor-pointer text-white font-bold hover:cursor-pointer">
          <p>EN</p>
          <ArrowDropDownIcon />
        </div>
        {/* sig in and accounts */}
        <Link href={"/account"}>
          <div className="mobile:hidden lg:flex lg:flex-col text-white hover:cursor-pointer">
            <span className="font-thin text-xs">Hello, sign in</span>
            <p className="font-bold">Account & Lists</p>
          </div>
        </Link>
        {/* Returns and orders */}
        <div className="mobile:hidden lg:flex lg:flex-col text-white hover:cursor-pointer">
          <span className="font-thin text-xs">Returns</span>
          <p className="font-bold">& Orders</p>
        </div>
        {/* cart */}
        <Link href={"/checkout"}>
          <div className="lg:static mobile:flex mobile:items-center mobile:gap-1 mobile:fixed mobile:right-4 mobile:top-3 text-white hover:cursor-pointer">
            <ShoppingBasketIcon />
            <p>0</p>
          </div>
        </Link>
      </div>
    </nav>
  );
}
