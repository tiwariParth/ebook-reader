// Types for the ebook reader application

export interface Book {
  id: string;
  title: string;
  lastRead?: Date;
  currentPage?: number;
  totalPages?: number;
  path: string;
}

export interface ReadingProgress {
  bookId: string;
  page: number;
  timestamp: Date;
}
