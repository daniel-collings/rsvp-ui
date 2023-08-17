import db from '@/utils/db'
import AttendanceList from '@/components/AttendanceList'

const getData = async () => {
    const rsvps = await db.rsvp.findMany({})
    return rsvps
}

export default async function AdminPage(){
    const rsvps = await getData()

    return (
        <div>
            <h1>Admin</h1>
            <AttendanceList rsvps={rsvps} />
        </div>
    )

}