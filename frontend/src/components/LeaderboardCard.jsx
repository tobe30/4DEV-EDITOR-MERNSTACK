
const LeaderboardCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-xl-4">
      <div className="card p-4 leaderboard-card h-100">
        <h5 className="mb-4 text-white">Community Leaderboard</h5>

        {/* Leader 1 */}
        <div className="leader-entry">
          <span className="badge bbb bg-yellow">1</span>
          <div className="leader-text">
            <strong>Sarah Chen</strong>
            <small>Agent Trainer • 24,560 XP</small>
          </div>
        </div>

        {/* Leader 2 */}
        <div className="leader-entry">
          <span className="badge bbb bg-secondary">2</span>
          <div className="leader-text">
            <strong>Ryan Davis</strong>
            <small>Web3 Architect • 22,140 XP</small>
          </div>
        </div>

        {/* Leader 3 */}
        <div className="leader-entry">
          <span className="badge bbb bg-orange">3</span>
          <div className="leader-text">
            <strong>Miguel Lopez</strong>
            <small>Web3 Architect • 19,870 XP</small>
          </div>
        </div>

        {/* Current User */}
        <div className="leader-entry highlight">
          <span
            className="badge bbb rank-badge"
            style={{ background: '#493c61' }}
          >
            8
          </span>
          <div className="leader-text">
            <strong>Alex Cooper (You)</strong>
            <small>Web3 Architect • 12,540 XP</small>
          </div>
        </div>

        <button className="but-c mt-3 mb-1">Full Leaderboard</button>
      </div>
    </div>
  );
};

export default LeaderboardCard;
