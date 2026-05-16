import React from 'react';
import { Link } from 'react-router-dom';
import StudentTable from '../StudentTable';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

export default function Students() {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8 flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Students</h1>
            <p className="text-gray-600">Manage student records</p>
          </div>
          <Button asChild>
            <Link to="/add-student">
              <Plus className="h-4 w-4 mr-2" />
              Add Student
            </Link>
          </Button>
        </div>

        <StudentTable />
      </div>
    </div>
  );
}