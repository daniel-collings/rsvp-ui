export default function AttendanceList({ rsvps }: any) {
    return (
        <div>
            <ul>
                {rsvps.map((o: any, i: number) => (
                    <li key={i}>{o.id}</li>
                ))}
            </ul>
        </div>
    )

}