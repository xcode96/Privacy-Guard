
import type React from 'react';

export interface Script {
  id: string;
  name: string;
  description: string;
  code: string;
  categoryId: string;
  subCategoryId?: string;
}

export interface Category {
  id: string;
  name: string;
  icon: React.ReactNode;
}

export interface SubCategory {
  id: string;
  name: string;
  categoryId: string;
}
