
const ProjectVisualization = () => {
  return (
    <div>
      <h5 className="text-white mb-4 mt-4 fw-semibold">Current Project Visualization</h5>
      <div className="project-card-container p-4">
        <div className="row g-4">
          {/* Left Section */}
          <div className="col-12 col-lg-7">
            <div className="left-card">
              <div className="d-flex justify-content-between align-items-start mb-3">
                <h6 className="text-white fw-semibold mb-0">NFT Marketplace Visualization</h6>
                <div className="d-flex gap-2">
                  <button className="btn btn-sm btn-dark px-3 fw-medium border-0 text-white">Live View</button>
                  <button className="btn btn-sm btn-purple px-3 fw-medium">Edit Project</button>
                </div>
              </div>

              <div className="visual-box d-flex flex-column justify-content-center align-items-center rounded-3">
                <i className="bi bi-graph-up text3 fs-1 mb-2"></i>
                <p className="mb-0 text4 fw-medium">Interactive project visualization</p>
                <small className="text3">Click Edit Project to view in detail</small>
              </div>
            </div>
          </div>

          {/* Right Section */}
           <div className="col-12 col-lg-5">
            <h6 className="text-white fw-semibold mb-3">Project Metrics</h6>

            <div className="row g-3 mb-3">
              <div className="col-6">
                <div className="metric-box p-3 rounded-2">
                  <small className="text4 fw-medium">Smart Contracts</small>
                  <h5 className="mb-0 text-white fw-semibold">3</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="metric-box p-3 rounded-2">
                  <small className="text4 fw-medium">Transactions</small>
                  <h5 className="mb-0 text-white fw-semibold">142</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="metric-box p-3 rounded-2">
                  <small className="text4 fw-medium">Gas Used</small>
                  <h5 className="mb-0 text-white fw-semibold">0.42 ETH</h5>
                </div>
              </div>
              <div className="col-6">
                <div className="metric-box p-3 rounded-2">
                  <small className="text4 fw-medium">NFTs Minted</small>
                  <h5 className="mb-0 text-white fw-semibold">28</h5>
                </div>
              </div>
            </div>

            <div className="table-container rounded-3 overflow-hidden">
              <table className="custom-table w-100 mb-0">
                <thead>
                  <tr>
                    <th>Contract</th>
                    <th>Status</th>
                    <th>Deployment</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>NFT.sol</td>
                    <td className="text-success">Active</td>
                    <td>Ethereum Testnet</td>
                  </tr>
                  <tr>
                    <td>Marketplace.sol</td>
                    <td className="text-success">Active</td>
                    <td>Ethereum Testnet</td>
                  </tr>
                  <tr>
                    <td>Auction.sol</td>
                    <td className="text-warning">Draft</td>
                    <td>Not Deployed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectVisualization;
