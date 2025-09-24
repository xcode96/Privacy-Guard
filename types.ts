
import type React from 'react';

export interface Script {
  id: string;
  name: string;
  description: string;
  code: string;
  categoryId: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}
