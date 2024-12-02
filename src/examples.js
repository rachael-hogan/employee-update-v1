// Find the unique companies at an event

// Sample data set of conference attendees

//WILL NEED TO ADD 'export' to beginning for tests to work
function getUniqueCompanies(attendees) {
  // Use map to extract the company names and pass it to a Set to ensure uniqueness
  const companies = attendees.map((attendee) => attendee.company);

  // A Set will automatically remove duplicates
  return [...new Set(companies)];
}

// Function to count attendees per company
function countAttendeesPerCompany(attendees) {
  return attendees.reduce((acc, attendee) => {
    const { company } = attendee;

    // If company exists in accumulator, increment the count, otherwise set it to 1
    if (acc[company]) {
      acc[company] += 1;
    } else {
      acc[company] = 1;
    }

    return acc;
  }, {}); // Initial value is an empty object
}

function main() {
  const attendees = [
    {
      name: 'Alice',
      company: 'TechCorp'
    },
    {
      name: 'Bob',
      company: 'Innovate Inc'
    },
    {
      name: 'Charlie',
      company: 'TechCorp'
    },
    {
      name: 'David',
      company: 'DevSolutions'
    },
    {
      name: 'Eva',
      company: 'Innovate Inc'
    },
    {
      name: 'Frank',
      company: 'TechCorp'
    },
  ];

  // Get the unique companies
  const uniqueCompanies = getUniqueCompanies(attendees);
  console.log(uniqueCompanies);

  // Get the count of attendees per company
  const attendeesCountByCompany = countAttendeesPerCompany(attendees);
  console.log(attendeesCountByCompany);
}

main();
