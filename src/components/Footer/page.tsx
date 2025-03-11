import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react"

export default function Footer() {
    return (
        <footer className="w-full bg-gradient-to-b from-red-600 to-red-800 text-white mt-[400px]">
            <div className="container mx-auto px-4 py-12">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <Image
                                src="/LOGO QUANTIVO PNG.png"
                                alt="Quantivo Logo"
                                width={100}
                                height={100}
                                className="rounded-md bg-white p-1"
                            />
                            <h2 className="text-2xl font-bold">Quantivo</h2>
                        </div>
                        <p className="text-sm text-red-100">
                            Innovative solutions for tomorrow's challenges. We help businesses transform through data-driven insights.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
                        <ul className="space-y-2">
                            {["About", "Services", "Products", "Case Studies"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-red-100 transition-colors hover:text-white hover:underline"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Resources</h3>
                        <ul className="space-y-2">
                            {["Blog", "Documentation", "Support", "Contact"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-red-100 transition-colors hover:text-white hover:underline"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Legal */}
                    <div>
                        <h3 className="mb-4 text-lg font-semibold">Legal</h3>
                        <ul className="space-y-2">
                            {["Privacy Policy", "Terms of Service", "Cookie Policy", "GDPR"].map((item) => (
                                <li key={item}>
                                    <Link
                                        href={`/${item.toLowerCase().replace(" ", "-")}`}
                                        className="text-red-100 transition-colors hover:text-white hover:underline"
                                    >
                                        {item}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Social Media & Copyright */}
                <div className="mt-12 border-t border-red-500 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <div className="flex space-x-4">
                            <Link
                                href="https://www.facebook.com/profile.php?id=61573793630605&mibextid=ZbWKwL"
                                className="rounded-full bg-red-700 p-2 transition-colors hover:bg-red-500"
                            >
                                <Facebook size={20} />
                                <span className="sr-only">Facebook</span>
                            </Link>
                            <Link
                                href="https://x.com/quantivo_inc"
                                className="rounded-full bg-red-700 p-2 transition-colors hover:bg-red-500"
                            >
                                <Twitter size={20} />
                                <span className="sr-only">Twitter</span>
                            </Link>
                            <Link
                                href="https://www.instagram.com/quantivo_inc?igsh=aDZod3d0cTZ6eWww”"
                                className="rounded-full bg-red-700 p-2 transition-colors hover:bg-red-500"
                            >
                                <Instagram size={20} />
                                <span className="sr-only">Instagram</span>
                            </Link>
                            <Link
                                href="https://www.linkedin.com/company/quanitvo-inc/"
                                className="rounded-full bg-red-700 p-2 transition-colors hover:bg-red-500"
                            >
                                <Linkedin size={20} />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                        </div>
                        <div className="text-sm text-red-100">&copy; {new Date().getFullYear()} Quantivo. All rights reserved.</div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

