export default function formatDateTime(currentTimestamp) {
  // Create a Date object using the current timestamp
  const currentDate = new Date(currentTimestamp);

  // Format the Date object as a string (e.g., "01/12/21, 04:30 PM")
  const result = currentDate.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: '2-digit',
    year: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true
  });

  return result;
}

// Example usage with Date.now()
const currentTimestamp = Date.now();
const formattedString = formatDateTime(currentTimestamp);
console.log(formattedString);