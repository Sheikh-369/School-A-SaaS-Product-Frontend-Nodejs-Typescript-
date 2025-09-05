import Link from "next/link"

const Navbar=()=>{
    return(
        <>
            <div>
            <meta charSet="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>Responsive Tailwind Navbar</title>
            <nav className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 shadow-lg">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 text-white text-2xl font-bold">
                    MySchool
                    </div>
                    {/* Desktop Menu */}
                    <div className="hidden md:flex space-x-6 text-white font-medium">
                    <a href="#" className="hover:text-yellow-300 transition">Home</a>
                    <a href="#" className="hover:text-yellow-300 transition">About</a>
                    <a href="#" className="hover:text-yellow-300 transition">Services</a>
                    <a href="#" className="hover:text-yellow-300 transition">Contact</a>
                    </div>
                    {/* Desktop Button */}
                    <div className="hidden md:flex gap-3.5">
                    <Link href="/auth/register" className="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold">
                        Register
                    </Link>
                    <Link href="/auth/login" className="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold">
                        Login
                    </Link>
                    <a href="#" className="bg-white text-indigo-700 px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold">
                        Become School
                    </a>
                    </div>
                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                    <button id="menu-toggle" className="text-white focus:outline-none text-2xl">
                        ☰
                    </button>
                    </div>
                </div>
                </div>
                {/* Mobile Menu */}
                <div id="mobile-menu" className="md:hidden hidden px-4 pb-4 space-y-2 text-white font-medium">
                <a href="#" className="block hover:text-yellow-300 transition">Home</a>
                <a href="#" className="block hover:text-yellow-300 transition">About</a>
                <a href="#" className="block hover:text-yellow-300 transition">Services</a>
                <a href="#" className="block hover:text-yellow-300 transition">Contact</a>
                <a href="#" className="block bg-white text-indigo-700 text-center px-4 py-2 rounded-xl hover:bg-yellow-300 transition-all font-semibold mt-2">
                    Get Started
                </a>
                </div>
            </nav>
            </div>
        </>
    )
}
export default Navbar