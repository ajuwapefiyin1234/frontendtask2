import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, useParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { ArrowLeft } from 'lucide-react';

// Mock data - in real app, fetch from API
const initialStudents = [
  { id: 1, firstName: 'Aisha', lastName: 'Khan', age: 17, rollNumber: 'STU-001', attendance: 96, score: 92 },
  { id: 2, firstName: 'Daniel', lastName: 'Park', age: 16, rollNumber: 'STU-002', attendance: 89, score: 85 },
  { id: 3, firstName: 'Mina', lastName: 'Nguyen', age: 18, rollNumber: 'STU-003', attendance: 81, score: 78 },
  { id: 4, firstName: 'Samuel', lastName: 'Adeyemi', age: 17, rollNumber: 'STU-004', attendance: 99, score: 96 },
  { id: 5, firstName: 'Priya', lastName: 'Sharma', age: 16, rollNumber: 'STU-005', attendance: 92, score: 88 },
];

// Zod schema for student form
const studentSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  age: z.number().min(10, 'Age must be at least 10').max(25, 'Age must be at most 25'),
  rollNumber: z.string().min(1, 'Roll number is required'),
});

export default function EditStudent() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [student, setStudent] = useState(null);

  const form = useForm({
    resolver: zodResolver(studentSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      age: '',
      rollNumber: '',
    },
  });

  useEffect(() => {
    // Find student by id
    const foundStudent = initialStudents.find(s => s.id === parseInt(id));
    if (foundStudent) {
      setStudent(foundStudent);
      form.reset({
        firstName: foundStudent.firstName,
        lastName: foundStudent.lastName,
        age: foundStudent.age,
        rollNumber: foundStudent.rollNumber,
      });
    }
  }, [id, form]);

  const onSubmit = (data) => {
    // Here you would typically send the data to an API
    console.log('Updating student:', { id: parseInt(id), ...data });
    // For now, just navigate back to students
    navigate('/students');
  };

  if (!student) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/students')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Students
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Edit Student</h1>
          <p className="text-gray-600">Update the student's information</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Student Details</CardTitle>
            <CardDescription>Edit the student's information</CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="firstName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>First Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter first name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="lastName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Last Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Enter last name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="age"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Age</FormLabel>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="Enter age"
                          {...field}
                          onChange={(e) => field.onChange(parseInt(e.target.value) || '')}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="rollNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Roll Number</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter roll number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="flex gap-4">
                  <Button type="submit" className="flex-1">
                    Update Student
                  </Button>
                  <Button type="button" variant="outline" onClick={() => navigate('/students')}>
                    Cancel
                  </Button>
                </div>
              </form>
            </Form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}