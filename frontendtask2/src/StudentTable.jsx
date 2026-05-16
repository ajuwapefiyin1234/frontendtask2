import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, ArrowUpDown, Edit3, Trash2, Save, X } from 'lucide-react';

const initialStudents = [
  { id: 1, firstName: 'Aisha', lastName: 'Khan', age: 17, rollNumber: 'STU-001', attendance: 96, score: 92 },
  { id: 2, firstName: 'Daniel', lastName: 'Park', age: 16, rollNumber: 'STU-002', attendance: 89, score: 85 },
  { id: 3, firstName: 'Mina', lastName: 'Nguyen', age: 18, rollNumber: 'STU-003', attendance: 81, score: 78 },
  { id: 4, firstName: 'Samuel', lastName: 'Adeyemi', age: 17, rollNumber: 'STU-004', attendance: 99, score: 96 },
  { id: 5, firstName: 'Priya', lastName: 'Sharma', age: 16, rollNumber: 'STU-005', attendance: 92, score: 88 },
];

const columns = [
  { key: 'firstName', label: 'First Name' },
  { key: 'lastName', label: 'Last Name' },
  { key: 'age', label: 'Age' },
  { key: 'rollNumber', label: 'Roll No' },
  { key: 'attendance', label: 'Attendance %' },
  { key: 'score', label: 'Score' },
];

export default function StudentTable() {
  const [students, setStudents] = useState(initialStudents);
  const [searchText, setSearchText] = useState('');
  const [sortConfig, setSortConfig] = useState({ key: 'rollNumber', direction: 'asc' });
  const [selectedId, setSelectedId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editValues, setEditValues] = useState({});

  const filteredStudents = useMemo(() => {
    const text = searchText.toLowerCase().trim();
    if (!text) return students;

    return students.filter((student) =>
      [student.firstName, student.lastName, student.rollNumber, String(student.age), String(student.attendance), String(student.score)]
        .some((value) => value.toLowerCase().includes(text))
    );
  }, [students, searchText]);

  const sortedStudents = useMemo(() => {
    const sorted = [...filteredStudents];
    sorted.sort((a, b) => {
      const aValue = a[sortConfig.key];
      const bValue = b[sortConfig.key];
      if (typeof aValue === 'string') {
        return sortConfig.direction === 'asc'
          ? aValue.localeCompare(bValue)
          : bValue.localeCompare(aValue);
      }
      return sortConfig.direction === 'asc' ? aValue - bValue : bValue - aValue;
    });
    return sorted;
  }, [filteredStudents, sortConfig]);

  const toggleSort = (key) => {
    setSortConfig((current) => {
      if (current.key === key) {
        return { key, direction: current.direction === 'asc' ? 'desc' : 'asc' };
      }
      return { key, direction: 'asc' };
    });
  };

  const handleDelete = (id) => {
    setStudents((current) => current.filter((student) => student.id !== id));
    if (selectedId === id) setSelectedId(null);
    if (editingId === id) setEditingId(null);
  };

  const startEdit = (student) => {
    setEditingId(student.id);
    setEditValues({
      firstName: student.firstName,
      lastName: student.lastName,
      age: student.age,
      rollNumber: student.rollNumber,
      attendance: student.attendance,
      score: student.score,
    });
  };

  const saveEdit = (id) => {
    setStudents((current) =>
      current.map((student) =>
        student.id === id
          ? { ...student, ...editValues, age: Number(editValues.age), attendance: Number(editValues.attendance), score: Number(editValues.score) }
          : student
      )
    );
    setEditingId(null);
  };

  return (
    <div className="rounded-3xl bg-white p-6 shadow-lg border border-slate-200">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold text-slate-900">Students</h2>
          <p className="text-sm text-slate-500">Search, sort, and highlight any student row with edit/delete actions.</p>
        </div>
        <div className="relative w-full md:w-80">
          <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
          <input
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-3 pl-10 pr-4 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
            placeholder="Search students..."
          />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full border-separate border-spacing-y-3 text-left">
          <thead>
            <tr className="text-sm text-slate-500">
              {columns.map((column) => (
                <th key={column.key} className="pb-3 pr-4">
                  <button
                    type="button"
                    onClick={() => toggleSort(column.key)}
                    className="inline-flex items-center gap-2 font-medium text-slate-700 hover:text-indigo-600"
                  >
                    {column.label}
                    <ArrowUpDown className="h-4 w-4 text-slate-400" />
                  </button>
                </th>
              ))}
              <th className="pb-3 pr-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {sortedStudents.length === 0 ? (
              <tr>
                <td colSpan={columns.length + 1} className="px-4 py-10 text-center text-sm text-slate-500">
                  No students match your search.
                </td>
              </tr>
            ) : (
              sortedStudents.map((student) => {
                const isSelected = selectedId === student.id;
                const rowClass = isSelected
                  ? 'bg-indigo-50 ring-2 ring-indigo-200'
                  : 'bg-white';

                return (
                  <tr
                    key={student.id}
                    onClick={() => setSelectedId(student.id)}
                    className={`${rowClass} cursor-pointer transition hover:bg-slate-50`}
                  >
                    {columns.map((column) => {
                      const value = student[column.key];
                      const isEditing = editingId === student.id;

                      return (
                        <td key={column.key} className="px-4 py-4 align-top text-sm text-slate-700">
                          {isEditing ? (
                            <input
                              value={editValues[column.key]}
                              onChange={(event) =>
                                setEditValues((current) => ({ ...current, [column.key]: event.target.value }))
                              }
                              className="w-full rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-100"
                            />
                          ) : (
                            column.key === 'attendance' ? `${value}%` : value
                          )}
                        </td>
                      );
                    })}
                    <td className="px-4 py-4 align-top text-sm text-slate-700">
                      {editingId === student.id ? (
                        <div className="flex gap-2">
                          <button
                            type="button"
                            onClick={() => saveEdit(student.id)}
                            className="inline-flex items-center gap-2 rounded-xl bg-emerald-600 px-3 py-2 text-white transition hover:bg-emerald-700"
                          >
                            <Save className="h-4 w-4" /> Save
                          </button>
                          <button
                            type="button"
                            onClick={(event) => { event.stopPropagation(); setEditingId(null); }}
                            className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-slate-700 transition hover:bg-slate-100"
                          >
                            <X className="h-4 w-4" /> Cancel
                          </button>
                        </div>
                      ) : (
                        <div className="flex flex-wrap gap-2">
                          <button
                            type="button"
                            onClick={(event) => { event.stopPropagation(); startEdit(student); }}
                            className="inline-flex items-center gap-2 rounded-xl border border-indigo-200 bg-indigo-50 px-3 py-2 text-indigo-700 transition hover:bg-indigo-100"
                          >
                            <Edit3 className="h-4 w-4" /> Edit
                          </button>
                          <Link
                            to={`/edit-student/${student.id}`}
                            onClick={(event) => event.stopPropagation()}
                            className="inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-blue-50 px-3 py-2 text-blue-700 transition hover:bg-blue-100"
                          >
                            <Edit3 className="h-4 w-4" /> Edit Details
                          </Link>
                          <button
                            type="button"
                            onClick={(event) => { event.stopPropagation(); handleDelete(student.id); }}
                            className="inline-flex items-center gap-2 rounded-xl border border-red-200 bg-red-50 px-3 py-2 text-red-700 transition hover:bg-red-100"
                          >
                            <Trash2 className="h-4 w-4" /> Delete
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
