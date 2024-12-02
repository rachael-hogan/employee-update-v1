// Function to fetch employee data
async function fetchEmployees() {
  try {
    const response = await fetch('https://api.example.com/employees');

    if (!response.ok) {
      throw new Error(`Failed to fetch employees: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching employees:', error);
    throw error; // rethrow to handle in the caller
  }
}

// Function to update employee salaries and filter out HR employees
function processEmployees(employees) {
  return employees
    .filter((emp) => emp.department !== 'HR')
    .map((emp) => ({
      ...emp,
      salary: emp.salary * 1.10, // Increase salary by 10%
    }));
}

// Function to send updated employee data
async function sendUpdatedEmployees(updatedEmployees) {
  try {
    const response = await fetch('https://api.example.com/updated-employees', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(updatedEmployees),
    });

    if (!response.ok) {
      throw new Error(`Failed to send updated employees: ${response.statusText}`);
    }

    console.log('Updated employees successfully sent.');
  } catch (error) {
    console.error('Error sending updated employees:', error);
    throw error;
  }
}

// Main function to execute the full workflow
async function main() {
  try {
    const employees = await fetchEmployees();
    const updatedEmployees = processEmployees(employees);
    await sendUpdatedEmployees(updatedEmployees);
  } catch (error) {
    console.error('Failed to complete the employee update process:', error);
  }
}

// Call the main function to run the program
main();
