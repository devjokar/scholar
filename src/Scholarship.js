const Scholarships = () => {
  const state = {
    scholarships: [
      {
        name: "Fulbright Scholarship",
        level: "Undergraduate",
        eligibilityCriteria: [
          "Be a citizen of a participating country",
          "Have a strong academic record",
          "Demonstrate leadership potential",
        ],
        value: "$50,000",
        duration: "1 year",
        keyDates: {
          deadline: "March 1st",
          applicationDate: "October 1st",
          interviewDate: "November 1st",
          applicationResultsDate: "December 1st",
        },
        scholarshipWebsite: "https://www.fulbright.org/",
        numberAwards: 50,
        basisForAward: "Merit-based",
        yearAwarded: 2023,
        modeOfStudy: "Full-time",
        coursesCovered: ["Computer Science", "Engineering", "Business"],
      },
      {
        name: "Gates Scholarship",
        level: "Undergraduate",
        eligibilityCriteria: [
          "Be a citizen of a developing country",
          "Have a strong academic record",
          "Demonstrate leadership potential",
        ],
        value: "$100,000",
        duration: "4 years",
        keyDates: {
          deadline: "January 1st",
          applicationDate: "September 1st",
          interviewDate: "October 1st",
          applicationResultsDate: "November 1st",
        },
        scholarshipWebsite: "https://www.gatesscholarship.org/",
        numberAwards: 300,
        basisForAward: "Merit-based",
        yearAwarded: 2023,
        modeOfStudy: "Full-time",
        coursesCovered: ["Computer Science", "Engineering", "Business"],
      },
    ],
  };

    return (
      <div>
        <h1>International Students Scholarships to the US</h1>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Level</th>
              <th>Eligibility Criteria</th>
              <th>Value</th>
              <th>Duration</th>
              <th>Key Dates</th>
              <th>Scholarship Website</th>
              <th>Number of Awards</th>
              <th>Basis for Award</th>
              <th>Year Awarded</th>
              <th>Mode of Study</th>
              <th>Courses Covered</th>
            </tr>
          </thead>
          <tbody>
            {state.scholarships.map((scholarship) => (
              <tr key={scholarship.name}>
                <td>{scholarship.name}</td>
                <td>{scholarship.level}</td>
                <td>{scholarship.eligibilityCriteria.map(ec => <p>{ec}</p>)}</td>
                <td>{scholarship.value}</td>
                <td>{scholarship.duration}</td>
                <td>
                  <p>Deadline: {scholarship.keyDates.deadline}</p>
                  <p>Application date: {scholarship.keyDates.applicationDate}</p>
                  <p>Interview date: {scholarship.keyDates.interviewDate}</p>
                  <p>Application results date: {scholarship.keyDates.applicationResultsDate}</p>
                </td>
                <td>{scholarship.scholarshipWebsite}</td>
                <td>{scholarship.numberAwards}</td>
                <td>{scholarship.basisForAward}</td>
                <td>{scholarship.yearAwarded}</td>
                <td>{scholarship.modeOfStudy}</td>
                <td>{scholarship.coursesCovered.map(cc => <p>{cc}</p>)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default Scholarships
