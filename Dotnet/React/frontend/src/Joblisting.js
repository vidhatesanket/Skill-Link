import React from 'react';

export default class Joblisting extends  React.Component{
  constructor(props) {
    super(props);
    this.state = {
      jobListings: [],
      isLoading: false,
      error: null,
    };
  }

  componentDidMount() {
    this.setState({ isLoading: true });
    fetch('http://localhost:5020/Joblisting')
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to fetch data');
        }
      })
      .then(data => {
        this.setState({ jobListings: data, isLoading: false });
      })
      .catch(error => {
        this.setState({ error: error.message, isLoading: false });
      });
  }

  render() {
    const { jobListings, isLoading, error } = this.state;

    if (isLoading) {
      return <div>Loading...</div>;
    }

    if (error) {
      return <div>Error: {error}</div>;
    }

    return (
        <div>
        <h1>Job Listings</h1>
        <table border={"2px"}>
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Required Skills</th>
              <th>Descrpition</th>
              <th>Location</th>
              <th>Deadline</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map(job => (
              <tr key={job.id}>
                <td>{job.jobid}</td>
                <td>{job.title}</td>
                <td>{job.requiredskill}</td>
                <td>{job.description}</td>
                <td>{job.location}</td>
                <td>{job.deadline}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}


