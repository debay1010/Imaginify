"use client";
import {
	Sheet,
	SheetContent,
	SheetDescription,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from "@/components/ui/sheet";
import { navLinks } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";

const MobileNav = () => {
	const pathname = usePathname();
	return (
		<header className="header">
			<Link href="/" className=" flex items-center gap-2">
				<Image
					src="/assets/images/logo-text.svg"
					alt="logo"
					className=""
					width={180}
					height={28}
				/>
			</Link>
			<nav className="flex gap-2">
				<SignedIn>
					<UserButton afterSignOutUrl="/" />
					<Sheet>
						<SheetTrigger>
							<Image
								src="/assets/icons/menu.svg"
								alt="logo"
								width={32}
								height={32}
								className=" cursor-pointer"
							></Image>
						</SheetTrigger>
						<SheetContent className="sheet-content sm:w-64">
							<>
								<Image
									src="/assets/images/logo-text.svg"
									alt="logo"
									width={140}
									height={20}
									className=""
								></Image>

								<ul className="header-nav_elements">
									{navLinks.map((link) => {
										const isActive =
											pathname === link.route;
										return (
											<li
												key={link.label}
												className={`${
													isActive && "gradient-text"
												} p-18 whitespace-nowrap flex text-dark-700`}
											>
												<Link
													className="sidebar-link cursor-pointer"
													href={link.route}
												>
													<Image
														src={link.icon}
														alt="icon image"
														width={24}
														height={24}
														// className={`${
														// 	isActive &&
														// 	"brightness-200"
														// }`}
													/>
													{link.label}
												</Link>
											</li>
										);
									})}
								</ul>
							</>
						</SheetContent>
					</Sheet>
				</SignedIn>

				<SignedOut>
					<Button
						asChild
						className="button bg-cover bg-purple-gradient"
					>
						<Link href="/sign-in" className="">
							Login
						</Link>
					</Button>
				</SignedOut>
			</nav>
		</header>
	);
};

export default MobileNav;
