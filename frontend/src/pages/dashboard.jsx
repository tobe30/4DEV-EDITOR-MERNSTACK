import React from 'react';
import XPCard from '../components/XPcard';
import RecentProjectsCard from '../components/RecentProjectsCard';
import ActiveQuestsCard from '../components/ActiveQuestsCard';
import LeaderboardCard from '../components/LeaderboardCard';
import ProjectVisualization from '../components/ProjectVisualization';
import CodeEditor from '../components/CodeEditor';

const Dashboard = () => {
  return (
    <main className="main">
      <div className="d-flex justify-content-between align-items-center flex-wrap mb-3">
        <div>
          <h3 className="mb-1">Welcome back, Alex!</h3>
          <p className="mb-0 text1">Resume your tech adventure where you left off</p>
        </div>
        <div className="d-flex align-items-center mt-3 mt-md-0">
          <div className="me-3 position-relative">
            <i
              className="bi bi-search position-absolute text1"
              style={{ top: '50%', left: '12px', transform: 'translateY(-50%)' }}
            ></i>
            <input
              type="text"
              className="form-control search-input ps-5 text1"
              placeholder="Search projects, quests..."
            />
          </div>
          <div className="position-relative">
            <i className="bi bi-bell text-white fs-5"></i>
            <span
              className="badge rounded-pill bg-purple text-white position-absolute top-0 start-100 translate-middle"
              style={{ fontSize: '0.7rem', padding: '0.2em 0.4em' }}
            >
              3
            </span>
          </div>
        </div>
      </div>

      <div className="row g-4">
        <XPCard />
        <RecentProjectsCard />
        <ActiveQuestsCard />
        <LeaderboardCard />
        <ProjectVisualization/>
        <CodeEditor/>
      </div>
    </main>
  );
};

export default Dashboard;
