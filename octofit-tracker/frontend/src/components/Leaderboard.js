import React, { useEffect, useState } from 'react';

const Leaderboard = () => {
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/leaderboards/`;
  const [leaderboards, setLeaderboards] = useState([]);

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setLeaderboards(results);
        console.log('Leaderboard API endpoint:', apiUrl);
        console.log('Fetched leaderboards:', results);
      });
  }, [apiUrl]);

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Leaderboard</h2>
      <div className="card">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th>ID</th>
                <th>Team ID</th>
                <th>Score</th>
                <th>Week</th>
              </tr>
            </thead>
            <tbody>
              {leaderboards.map(lb => (
                <tr key={lb.id}>
                  <td>{lb.id}</td>
                  <td>{lb.team}</td>
                  <td>{lb.score}</td>
                  <td>{lb.week}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
