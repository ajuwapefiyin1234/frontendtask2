import React from 'react';
import { Users, Calendar, BarChart3, CheckCircle2, Percent } from 'lucide-react';

const stats = [
  {
    title: 'Total Students',
    value: '1,240',
    description: 'Students enrolled this semester',
    icon: Users,
    color: 'bg-indigo-100 text-indigo-700',
  },
  {
    title: 'Attendance Rate',
    value: '94%',
    description: 'Average attendance this week',
    icon: Percent,
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    title: 'Classes Today',
    value: '8',
    description: 'Scheduled lessons remaining',
    icon: Calendar,
    color: 'bg-sky-100 text-sky-700',
  },
  {
    title: 'Completed Reports',
    value: '18',
    description: 'Reports generated this month',
    icon: CheckCircle2,
    color: 'bg-violet-100 text-violet-700',
  },
  {
    title: 'Insights',
    value: '5',
    description: 'New analytics cards available',
    icon: BarChart3,
    color: 'bg-amber-100 text-amber-700',
  },
];

export default function Cards() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((item) => {
        const Icon = item.icon;
        return (
          <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm font-medium text-slate-500">{item.title}</p>
                <p className="mt-3 text-3xl font-semibold text-slate-900">{item.value}</p>
              </div>
              <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl ${item.color}`}>
                <Icon className="h-6 w-6" />
              </div>
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-500">{item.description}</p>
          </div>
        );
      })}
    </div>
  );
}
