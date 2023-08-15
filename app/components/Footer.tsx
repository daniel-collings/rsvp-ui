import Link from "next/link";

export default function Footer() {
    return (
        <footer className="bg-white border-t-2 border-slate-200">
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div>
                    <p className="text-center text-xs leading-5">
                        &copy; 2023 Daniel Collings, Boltviz ⚡️. All rights reserved.
                    </p>
                </div>
                <div className="flex justify-center space-x-6 md:order-2">
            <Link href="https://boltviz.com/privacy-policy" target="_blank" className="text-gray-500 hover:text-gray-700">Privacy & Cookie Policy
              <span className="sr-only"></span>
            </Link>
        </div>
            </div>
        </footer>
    )
}
