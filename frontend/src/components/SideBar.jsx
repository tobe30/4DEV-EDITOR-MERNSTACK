import React from 'react';

const Sidebar = () => {
  return (
    <>
      {/* Mobile Navbar */}
      <nav className="navbar navbar-dark  d-md-none">
        <div className="container-fluid">
          <span className="navbar-brand mb-0 h1 gradient-text">4DEV</span>
        <button
  className="navbar-toggler"
  type="button"
  data-bs-toggle="offcanvas"
  data-bs-target="#sidebarMobile"
  aria-controls="sidebarMobile"
>
  <span className="navbar-toggler-icon"></span>
</button>

        </div>
      </nav>

      {/* Sidebar Desktop */}
      <div className="d-none d-md-block sidebar p-3 position-fixed">
        <a href="#" className="logo d-block text-center mb-4">
          <div className="gradient-text fw-bold">4DEV</div>
        </a>

        <div className="user-info mb-4 d-flex align-items-center">
          <div className="level-circle">L8</div>
          <div className="ms-2">
            <div className="text-white fw-semibold">Alex Cooper</div>
            <div className="user-role">Web3 Architect</div>
          </div>
        </div>

        <div className="mb-3">
          <div className="d-flex justify-content-between small mb-1">
            <span>Level 8</span><span>12,540 XP</span>
          </div>
          <div className="progress xp-ba">
            <div className="progress-bar"></div>
          </div>
        </div>

        <nav className="nav flex-column gap-2">
          <a href="#" className="nav-link active"><i className="bi bi-grid"></i> Dashboard</a>
          <a href="#" className="nav-link d-flex justify-content-between align-items-center">
            <span><i className="bi bi-code"></i> Projects</span>
            <span className="badge bg-purple text-dark rounded-pill">3</span>
          </a>
          <a href="#" className="nav-link"><i className="bi bi-chat-dots"></i> Collaboration</a>
          <a href="#" className="nav-link"><i className="bi bi-journal-code"></i> Learning</a>
          <a href="#" className="nav-link"><i className="bi bi-graph-up"></i> Analytics</a>
          <a href="#" className="nav-link"><i className="bi bi-people"></i> Community</a>
          <a href="#" className="nav-link mt-auto"><i className="bi bi-gear"></i> Settings</a>
        </nav>
      </div>

      {/* Sidebar Offcanvas for Mobile */}
      <div
        className="offcanvas offcanvas-start d-md-none"
        tabIndex="-1"
        id="sidebarMobile"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title gradient-text">4DEV</h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body">
          <div className="d-flex align-items-center mb-3">
            <div
              className="bg-purple rounded-circle text-white d-flex align-items-center justify-content-center"
              style={{
                width: '40px',
                height: '40px',
                backgroundColor: '#9b87f5',
              }}
            >
              L8
            </div>
            <div className="ms-2">
              <div className="text-white fw-semibold">Alex Cooper</div>
              <small className="text1">Web3 Architect</small>
            </div>
          </div>
          <div className="mb-3">
            <div className="d-flex justify-content-between small mb-1">
              <span className="text1">Level 8</span>
              <span className="text1">12,540 XP</span>
            </div>
            <div className="progress xp-ba">
              <div className="progress-bar"></div>
            </div>
          </div>
          <nav className="nav flex-column gap-2">
            <a href="#" className="nav-link active"><i className="bi bi-grid"></i> Dashboard</a>
            <a href="#" className="nav-link d-flex justify-content-between align-items-center">
              <span><i className="bi bi-code"></i> Projects</span>
              <span className="badge bg-purple text-dark rounded-pill">3</span>
            </a>
            <a href="#" className="nav-link"><i className="bi bi-chat-dots"></i> Collaboration</a>
            <a href="#" className="nav-link"><i className="bi bi-journal-code"></i> Learning</a>
            <a href="#" className="nav-link"><i className="bi bi-graph-up"></i> Analytics</a>
            <a href="#" className="nav-link"><i className="bi bi-people"></i> Community</a>
            <a href="#" className="nav-link mt-auto"><i className="bi bi-gear"></i> Settings</a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
