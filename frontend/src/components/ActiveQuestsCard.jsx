
const ActiveQuestsCard = () => {
  return (
    <div className="col-12 col-sm-6 col-md-6 col-xl-4">
      <div className="card p-4 active-quests-card">
        <h5 className="mb-4">
          Active Quests
          <span className="activate float-end">3 Active</span>
        </h5>

        {/* Quest 1 */}
        <div className="quest-box mb-3 p-3">
          <div className="d-flex justify-content-between align-items-center">
            <strong className="text-white mb-1">Deploy Smart Contract</strong>
            <span className="badge bg-purple text-white">300 XP</span>
          </div>
          <small className="text1 d-block">Create and deploy an ERC-721 contract on testnet</small>
          <div className="progress mt-2">
            <div
              className="progress-bar"
              style={{
                width: '60%',
                background: 'linear-gradient(to right, #e97fff, #4287f5)',
              }}
            ></div>
          </div>
          <small className="text2 mt-1 d-block text-end">60% Complete</small>
        </div>

        {/* Quest 2 */}
        <div className="quest-box p-3">
          <div className="d-flex justify-content-between align-items-center">
            <strong className="text-white mb-1">Train AI Agent</strong>
            <span className="badge bg-purple text-white">500 XP</span>
          </div>
          <small className="text1 d-block">Create an AI agent that can answer customer queries</small>
          <div className="progress mt-2" style={{ height: '6px' }}>
            <div
              className="progress-bar"
              style={{
                width: '25%',
                background: 'linear-gradient(to right, #5eead4, #64748b)',
              }}
            ></div>
          </div>
          <small className="text2 mt-1 d-block text-end">25% Complete</small>
        </div>

        <button className="but-c mt-3">View All Quests</button>
      </div>
    </div>
  );
};

export default ActiveQuestsCard;
