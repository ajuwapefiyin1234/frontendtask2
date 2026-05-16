import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowLeft, CheckCircle, XCircle, Clock } from 'lucide-react';

// Mock students data
const initialStudents = [
  { id: 1, firstName: 'Aisha', lastName: 'Khan', rollNumber: 'STU-001' },
  { id: 2, firstName: 'Daniel', lastName: 'Park', rollNumber: 'STU-002' },
  { id: 3, firstName: 'Mina', lastName: 'Nguyen', rollNumber: 'STU-003' },
  { id: 4, firstName: 'Samuel', lastName: 'Adeyemi', rollNumber: 'STU-004' },
  { id: 5, firstName: 'Priya', lastName: 'Sharma', rollNumber: 'STU-005' },
];

export default function Attendance() {
  const navigate = useNavigate();
  const [attendance, setAttendance] = useState(
    initialStudents.reduce((acc, student) => {
      acc[student.id] = 'present'; // default to present
      return acc;
    }, {})
  );

  const handleAttendanceChange = (studentId, status) => {
    setAttendance(prev => ({
      ...prev,
      [studentId]: status
    }));
  };

  const handleSubmit = () => {
    // Here you would send the attendance data to an API
    console.log('Submitting attendance:', attendance);
    navigate('/dashboard');
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'present':
        return <CheckCircle className="h-5 w-5 text-green-500" />;
      case 'absent':
        return <XCircle className="h-5 w-5 text-red-500" />;
      case 'late':
        return <Clock className="h-5 w-5 text-yellow-500" />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Mark Attendance</h1>
          <p className="text-gray-600">Mark attendance for today's session</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Attendance</CardTitle>
            <CardDescription>Select the attendance status for each student</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {initialStudents.map((student) => (
                <div key={student.id} className="flex items-center justify-between p-4 border rounded-lg">
                  <div className="flex items-center gap-4">
                    {getStatusIcon(attendance[student.id])}
                    <div>
                      <p className="font-medium">{student.firstName} {student.lastName}</p>
                      <p className="text-sm text-gray-500">{student.rollNumber}</p>
                    </div>
                  </div>
                  <Select
                    value={attendance[student.id]}
                    onValueChange={(value) => handleAttendanceChange(student.id, value)}
                  >
                    <SelectTrigger className="w-32">
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="present">Present</SelectItem>
                      <SelectItem value="absent">Absent</SelectItem>
                      <SelectItem value="late">Late</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              ))}
            </div>

            <div className="mt-6 flex gap-4">
              <Button onClick={handleSubmit} className="flex-1">
                Submit Attendance
              </Button>
              <Button variant="outline" onClick={() => navigate('/dashboard')}>
                Cancel
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}