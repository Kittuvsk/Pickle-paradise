import React from 'react';
import { Store } from 'lucide-react';

interface HeaderProps {
  isAdmin: boolean;
  onToggleAdmin: () => void;
}

export default function Header({ isAdmin, onToggleAdmin }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Store className="w-8 h-8 text-green-600" />
            <h1 className="text-2xl font-bold text-gray-900">Pickle Paradise</h1>
          </div>
          <button
            onClick={onToggleAdmin}
            className="btn-secondary"
          >
            {isAdmin ? 'Exit Admin Mode' : 'Admin Mode'}
          </button>
        </div>
      </div>
    </header>
  );
}