import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { EditButton } from "./EditButton"
  
  const appointments = [
    {
      student: "Ishanvi",
      teacher: "Kritika",
      date: "10-12-2024",
      time: "12:30",
    },
    {
      student: "Pritam",
      teacher: "Kritika",
      date: "11-12-2024",
      time: "11:00",
    },
    
  ]
  
  export function TableDemoTwo() {
    return (
      <Table>
        <TableCaption>A list of booked appointments for Normal Class</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Student Name</TableHead>
            <TableHead>Teacher Name</TableHead>
            <TableHead>Date</TableHead>
            <TableHead className="text-right">Time</TableHead>
            <TableHead className="text-right">Edit</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {appointments.map((appointment, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{appointment.student}</TableCell>
              <TableCell>{appointment.teacher}</TableCell>
              <TableCell>{appointment.date}</TableCell>
              <TableCell className="text-right">{appointment.time}</TableCell>
              <TableCell className="text-right">
                <EditButton name="Edit" type="button" />
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
        {/* <TableFooter>
          <TableRow>
            <TableCell colSpan={3}>Total</TableCell>
            <TableCell className="text-right">$2,500.00</TableCell>
          </TableRow>
        </TableFooter> */}
      </Table>
    )
  }
  