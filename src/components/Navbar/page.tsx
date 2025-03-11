"use client"

import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";
// import black_logo from "../../assets/images/logo_black.png";



export default function Navbar() {

	const navItems = [
		{
			title: "Platform",
			href: "platform",
		},
		
		{
			title: "Ressource",
			// href: "/resources",
			dropdown: [
				{ title: "Why ", href: "/why-mansar" },
			],
		},
	];


	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [activeDropdowns, setActiveDropdowns] = useState<{ [key: string]: boolean }>({});
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Toggle dropdown
	const toggleDropdown = (name: string) => {
		setActiveDropdowns((prev) => ({
			...prev,
			[name]: !prev[name], // Toggle the dropdown for the given name
		}));
	};

	// Close dropdowns when clicking outside
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
				setActiveDropdowns({});
			}
		};

		// Add event listener only if any dropdown is open
		if (Object.values(activeDropdowns).includes(true)) {
			document.addEventListener("mousedown", handleClickOutside);
		} else {
			document.removeEventListener("mousedown", handleClickOutside);
		}

		return () => {
			document.removeEventListener("mousedown", handleClickOutside);
		};
	}, [activeDropdowns]);


	return (
		<nav className="bg-white shadow-md z-1000 " ref={dropdownRef}>
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between h-auto ">
					<div className="flex items-center">
						<a href="/" className="flex items-center uppercase text-xl">
							<img src="/LOGO QUANTIVO PNG.png" alt="logo" className="w-24 h-24" />
						</a>
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center z-[500] flex-nowrap">
					{/* {navItems.map((item, index) => (
							<div key={index} className="relative ml-3">
								<button
									onClick={() => toggleDropdown(item.title)}
									className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-secondary transition-colors">
									<a
										href={item.href}
										className="inline-flex items-center px-1 pt-1 text-sm font-medium text-gray-900 hover:text-yellow-400 transition-colors whitespace-nowrap">
										{item.title}
										{item.dropdown && (
											<i
												className={`fi fi-sr-${activeDropdowns[item.title] ? "angle-small-up" : "angle-small-down"} ml-1 h-4 w-4 transition-transform }`}></i>
										)}
									</a>
								</button>
								{item.dropdown && activeDropdowns[item.title] && (
									<div className="absolute z-[500] mt-2 w-54 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
										<div
											className="py-1"
											role="menu"
											aria-orientation="vertical"
											aria-labelledby="options-menu">
											{item.dropdown.map((dropdownItem, index) => (
												<a
													key={index}
													href={dropdownItem.href}
													className="block px-4 py-2 text-sm text-gray-700 hover:bg-yellow-500 hover:text-gray-900 whitespace-nowrap"
													role="menuitem">
													{dropdownItem.title}
												</a>
											))}
										</div>
									</div>
								)}
							</div>
						))} */}
					</div>
					<div className="hidden sm:ml-6 sm:flex sm:items-center">
						<Button
							className="bg-gradient-to-b from-red-600 to-red-800 hover:text-white text-white px-5 py-2 rounded-full">
							Request A Call
						</Button>
					</div>
					<div className="-mr-2 flex items-center sm:hidden">
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent">
							<span className="sr-only">
								Open Main
							</span>
							{mobileMenuOpen ? (
								<i className={`fi fi-sr-cross ml-1 h-4 w-4  }`}></i>
							) : (
								<i className="fi fi-br-menu-burger text-3xl h-10 w-10"></i>
							)}
						</button>
					</div>
				</div>
			</div>
			{mobileMenuOpen && (
				<div className="sm:hidden">
					<div className="pt-2 pb-3 space-y-1">
						{/* {navItems.map((item, index) => (
							<div key={index}>
								<button
									onClick={() => toggleDropdown(item.title)}
									className="flex items-center pl-3 pr-4 py-2 border-l-4 text-base font-medium text-gray-900 hover:bg-gray-50 hover:border-yellow-300 transition-colors w-full text-left">
									{item.title}
									{item.dropdown && (
										<i
											className={`fi fi-sr-angle-small-down ml-1 h-4 w-4 text-xl`}></i>
									)}
								</button>
								{item.dropdown && activeDropdowns[item.title] && (
									<div className="bg-gray-50 pl-6">
										{item.dropdown.map((item, index) => (
											<a
												key={index}
												href={item.href}
												className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900">
												{item.title}
											</a>
										))}
									</div>
								)}
							</div>
						))} */}
					</div>
					<div className="pt-4 pb-3 border-t border-gray-200">
						<div className="mt-3 space-y-1">
							<Button
								className="bg-yellow-400 text-dark  w-full px-5 py-2 rounded-full">
								Request a call
							</Button>
						</div>
					</div>
				</div>
			)}
		</nav>
	);
}
