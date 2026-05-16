import React from 'react';
import { Link } from 'react-router-dom';
import Cards from '../cards';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Plus, Edit, Calendar, Settings } from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
          <p className="text-gray-600">Welcome to the Student Attendance Tracker</p>
        </div>

        {/* Summary Cards */}
        <div className="mb-8">
          <Cards />
        </div>

        {/* Quick Actions */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                Students
              </CardTitle>
              <CardDescription>Manage student records</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link to="/students">View Students</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/add-student">
                    <Plus className="h-4 w-4 mr-2" />
                    Add Student
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                Attendance
              </CardTitle>
              <CardDescription>Mark and view attendance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <Button asChild className="w-full">
                  <Link to="/attendance">Mark Attendance</Link>
                </Button>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/attendance-history">View History</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Settings className="h-5 w-5" />
                Settings
              </CardTitle>
              <CardDescription>Configure application</CardDescription>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to="/settings">Open Settings</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}