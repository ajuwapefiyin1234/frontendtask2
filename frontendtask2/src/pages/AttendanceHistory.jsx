import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ArrowLeft, CheckCircle, XCircle, Clock } from 'lucide-react';

// Mock attendance history data
const attendanceHistory = [
  {
    date: '2024-05-15',
    students: [
      { id: 1, name: 'Aisha Khan', status: 'present' },
      { id: 2, name: 'Daniel Park', status: 'present' },
      { id: 3, name: 'Mina Nguyen', status: 'late' },
      { id: 4, name: 'Samuel Adeyemi', status: 'present' },
      { id: 5, name: 'Priya Sharma', status: 'absent' },
    ]
  },
  {
    date: '2024-05-14',
    students: [
      { id: 1, name: 'Aisha Khan', status: 'present' },
      { id: 2, name: 'Daniel Park', status: 'absent' },
      { id: 3, name: 'Mina Nguyen', status: 'present' },
      { id: 4, name: 'Samuel Adeyemi', status: 'present' },
      { id: 5, name: 'Priya Sharma', status: 'present' },
    ]
  },
  {
    date: '2024-05-13',
    students: [
      { id: 1, name: 'Aisha Khan', status: 'present' },
      { id: 2, name: 'Daniel Park', status: 'present' },
      { id: 3, name: 'Mina Nguyen', status: 'present' },
      { id: 4, name: 'Samuel Adeyemi', status: 'late' },
      { id: 5, name: 'Priya Sharma', status: 'present' },
    ]
  },
];

export default function AttendanceHistory() {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(attendanceHistory[0].date);

  const selectedRecord = attendanceHistory.find(record => record.date === selectedDate);

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case 'absent':
        return <XCircle className="h-4 w-4 text-red-500" />;
      case 'late':
        return <Clock className="h-4 w-4 text-yellow-500" />;
      default:
        return null;
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'present':
        return 'Present';
      case 'absent':
        return 'Absent';
      case 'late':
        return 'Late';
      default:
        return status;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Attendance History</h1>
          <p className="text-gray-600">View past attendance records</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* Date Selector */}
          <Card>
            <CardHeader>
              <CardTitle>Select Date</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                {attendanceHistory.map((record) => (
                  <Button
                    key={record.date}
                    variant={selectedDate === record.date ? "default" : "outline"}
                    className="w-full justify-start"
                    onClick={() => setSelectedDate(record.date)}
                  >
                    {new Date(record.date).toLocaleDateString()}
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Attendance Table */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Attendance for {new Date(selectedDate).toLocaleDateString()}</CardTitle>
              <CardDescription>Student attendance status</CardDescription>
            </CardHeader>
            <CardContent>
              {selectedRecord ? (
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Student Name</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {selectedRecord.students.map((student) => (
                      <TableRow key={student.id}>
                        <TableCell className="flex items-center gap-2">
                          {getStatusIcon(student.status)}
                          {student.name}
                        </TableCell>
                        <TableCell className="capitalize">{getStatusText(student.status)}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <p>No records found for this date.</p>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}