import Link from "next/link";

export default function CallToAction() {
    return (
        <div className="bg-white">
            <div className="px-6 py-24 sm:px-6 sm:py-32 lg:px-8">
                <div className="mx-auto max-w-3xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        Special day approaching?
                        <br />
                        Contact <Link href="https://boltviz.com/#contact" target="_blank" className="underline text-pink-500">Boltviz</Link>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        There is so much to do and so little time before the big day!
                    </p>
                    <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                        Why don&apos;t you take an affordable step to reduce the time consuming process of RSVP management.
                        <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">

                            Boltviz provides the HappilyEverAfter.rsvp software and can quickly get you up and running.
                        </p>
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            href="https://boltviz.com/#contact"
                            className='bg-pink-500 px-6 py-2 rounded-md col-span-full max-w-sm w-52 mt-8 mx-auto transition-colors ease-in-out duration-500 text-white border-2 border-pink-500 hover:text-pink-500 hover:bg-white hover:border-pink-500'>
                            <button>
                                Contact Boltviz 📧
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
