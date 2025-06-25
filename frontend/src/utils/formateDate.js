export const formatDate = (dateStr) => {
  const date = new Date(dateStr);

  // Format: "12 Jun 2025"
  return date.toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });
};
