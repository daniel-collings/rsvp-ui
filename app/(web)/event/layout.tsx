import RsvpForm from "@/components/RsvpForm"

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            public layout
            <div>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}