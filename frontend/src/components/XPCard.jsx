
const XPCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-xl-4">
      <div className="card p-4 xp-card">
        <h5 className="mb-3 fw-bold">Your XP Journey</h5>

        <div className="d-flex justify-content-between small mb-1">
          <span className="fw-semibold">Level 8</span>
          <span className="fw-semibold">12,540 / 15,000 XP</span>
        </div>

        <div
          className="progress mb-3"
          style={{ height: '10px', backgroundColor: '#2d2f3f' }}
        >
          <div className="progress-bar xp-bar" style={{ width: '83%' }}></div>
        </div>

        <div className="d-flex justify-content-between">
          <div>
            <div className="text1 small">Current Title</div>
            <div className="fw-bold">Web3 Architect</div>
          </div>
          <div className="text1 text-end">
            <div className="text-muted small">Next Title</div>
            <div className="fw-bold text-gradient">Agent Trainer</div>
          </div>
        </div>

        <div className="d-flex align-items-center gap-2 mt-3">
          <span className="xpt text-white">+120 XP today</span>
          <small className="text1">Top 15% this week</small>
        </div>
      </div>
    </div>
  );
};

export default XPCard;
