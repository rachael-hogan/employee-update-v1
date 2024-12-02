const { getUniqueCompanies, countAttendeesPerCompany } = require('./examples'); // Adjust the path if necessary

describe('Conference Utilities', () => {
  let attendees;

  beforeEach(() => {
    // Sample data for tests
    attendees = [
      { name: 'Alice', company: 'TechCorp' },
      { name: 'Bob', company: 'Innovate Inc' },
      { name: 'Charlie', company: 'TechCorp' },
      { name: 'David', company: 'DevSolutions' },
      { name: 'Eva', company: 'Innovate Inc' },
      { name: 'Frank', company: 'TechCorp' },
    ];
  });

//WILL NEED TO ADD 'export' to beginning of functions for tests to work
  describe('getUniqueCompanies', () => {
    it('should return an array of unique company names', () => {
      const result = getUniqueCompanies(attendees);
      const expected = ['TechCorp', 'Innovate Inc', 'DevSolutions'];

      // Test that the result contains the expected unique companies
      expect(result).toEqual(expect.arrayContaining(expected));
    });

    it('should return an empty array if no attendees are provided', () => {
      const result = getUniqueCompanies([]);
      expect(result).toEqual([]);
    });
  });

  describe('countAttendeesPerCompany', () => {
    it('should return an object with the count of attendees per company', () => {
      const result = countAttendeesPerCompany(attendees);
      const expected = {
        TechCorp: 3,
        'Innovate Inc': 2,
        DevSolutions: 1,
      };

      // Test that the result matches the expected count
      expect(result).toEqual(expected);
    });

    it('should return an empty object if no attendees are provided', () => {
      const result = countAttendeesPerCompany([]);
      expect(result).toEqual({});
    });

    it('should correctly count attendees even with one company', () => {
      const singleCompanyAttendees = [
        { name: 'Alice', company: 'TechCorp' },
        { name: 'Bob', company: 'TechCorp' },
      ];
      const result = countAttendeesPerCompany(singleCompanyAttendees);
      const expected = { TechCorp: 2 };

      expect(result).toEqual(expected);
    });
  });
});
