export default function formatDate() {
  const now = new Date();
  const options = { month: 'long', day: 'numeric', year: 'numeric' };
  const formattedDate = now.toLocaleDateString('en-US', options);
  return formattedDate;
}