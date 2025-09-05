import { useState } from "react";
import { Menu, X } from "lucide-react"; // icons
import { NotebookPen } from "lucide-react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
            <div className="container mx-auto flex items-center justify-between p-4">
                {/* Logo */}
                <h1 className="text-2xl font-bold text-mainColor flex items-center gap-1">
                    <NotebookPen />

                    <span>Notes</span></h1>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 text-gray-700 font-medium">
                    <li><a href="/" className="hover:text-blue-600">Home</a></li>
                    <li><a href="/about" className="hover:text-blue-600">About</a></li>
                    <li><a href="/services" className="hover:text-blue-600">Services</a></li>
                    <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden text-gray-700"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Dropdown Menu */}
            {isOpen && (
                <div className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col p-4 gap-4 text-gray-700 font-medium">
                        <li><a href="/" className="hover:text-blue-600">Home</a></li>
                        <li><a href="/about" className="hover:text-blue-600">About</a></li>
                        <li><a href="/services" className="hover:text-blue-600">Services</a></li>
                        <li><a href="/contact" className="hover:text-blue-600">Contact</a></li>
                    </ul>
                </div>
            )}
        </nav>
    );
}
