import React from 'react';

const Home = () => {
  return (
    <div
      className='container-fluid text-light min-vh-100 d-flex justify-content-center align-items-center'
      style={{
        background: 'linear-gradient(135deg, #0f0f0f, #1a1a1a)',
      }}
    >
      <div className="col-12 col-md-6 col-lg-4">
        <div
          className="card shadow-lg border-0 rounded-4 px-4 py-5"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(12px)',
            border: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <div className="text-center">
            <img 
              src="/images/logo.png" 
              alt="CODESYNC" 
              style={{ maxWidth: '120px', borderRadius: '12px', marginBottom: '20px' }} 
              className="img-fluid"
            />
            <h4 className='mb-4 text-light'>Join a Room</h4>
          </div>
          <div className="form-group mb-3">
            <input 
              type="text" 
              className='form-control bg-secondary border-0 text-light' 
              placeholder='Room ID' 
            />
          </div>
          <div className="form-group mb-4">
            <input 
              type="text" 
              className='form-control bg-secondary border-0 text-light' 
              placeholder='Username' 
            />
          </div>
          <button className='btn btn-success w-100 fw-bold'>Join</button>
          <p className='mt-3 text-center text-light'>
            Don't have a room ID? <span className='text-success' style={{ cursor: 'pointer' }}>New Room</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;


