// Utility functions for the ebook reader

export const generateBookId = () => {
  return Math.random().toString(36).substr(2, 9);
};

export const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
};
