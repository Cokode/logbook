export default function Time() {
  const now = new Date();
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const ampm = hours >= 12 ? 'PM' : 'AM';

  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (12 AM)

  const formattedTime = `${hours}:${String(minutes).padStart(2, '0')} ${ampm}`;
  return formattedTime;
}