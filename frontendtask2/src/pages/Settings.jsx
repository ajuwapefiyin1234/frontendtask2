import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, Save } from 'lucide-react';

export default function Settings() {
  const navigate = useNavigate();

  const handleSave = () => {
    // Here you would save the settings
    console.log('Saving settings...');
    navigate('/dashboard');
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Button variant="ghost" onClick={() => navigate('/dashboard')} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Dashboard
          </Button>
          <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
          <p className="text-gray-600">Configure application settings</p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>General Settings</CardTitle>
              <CardDescription>Basic application configuration</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="school-name">School Name</Label>
                <Input id="school-name" placeholder="Enter school name" defaultValue="Sample School" />
              </div>
              <div>
                <Label htmlFor="academic-year">Academic Year</Label>
                <Input id="academic-year" placeholder="e.g., 2024-2025" defaultValue="2024-2025" />
              </div>
              <div>
                <Label htmlFor="admin-email">Admin Email</Label>
                <Input id="admin-email" type="email" placeholder="admin@school.com" defaultValue="admin@school.com" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Attendance Settings</CardTitle>
              <CardDescription>Configure attendance parameters</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="working-days">Working Days per Week</Label>
                <Input id="working-days" type="number" min="1" max="7" defaultValue="5" />
              </div>
              <div>
                <Label htmlFor="min-attendance">Minimum Attendance %</Label>
                <Input id="min-attendance" type="number" min="0" max="100" defaultValue="75" />
              </div>
              <div>
                <Label htmlFor="late-threshold">Late Threshold (minutes)</Label>
                <Input id="late-threshold" type="number" min="0" defaultValue="15" />
              </div>
            </CardContent>
          </Card>

          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Notifications</CardTitle>
              <CardDescription>Configure notification preferences</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="notification-email">Notification Email</Label>
                <Input id="notification-email" type="email" placeholder="notifications@school.com" />
              </div>
              <div>
                <Label htmlFor="notification-message">Default Notification Message</Label>
                <Textarea
                  id="notification-message"
                  placeholder="Enter default notification message"
                  defaultValue="Please ensure regular attendance to maintain good academic standing."
                />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6 flex justify-end gap-4">
          <Button variant="outline" onClick={() => navigate('/dashboard')}>
            Cancel
          </Button>
          <Button onClick={handleSave}>
            <Save className="h-4 w-4 mr-2" />
            Save Settings
          </Button>
        </div>
      </div>
    </div>
  );
}