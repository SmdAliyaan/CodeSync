import React, { useState } from 'react';

function EditorPage() {
  const [clients, setClients] = useState([
    { id: '1', username: 'Aliyaan' },
    { id: '2', username: 'Adeefa' },
  ]);

  return (
    <div className="container-fluid vh-100">
      <div className="row h-100">
        {/* Sidebar */}
        <div 
          className="col-md-2 bg-dark text-light d-flex flex-column h-100" 
          style={{ boxShadow: "2px 0px 4px rgba(0,0,0,0.1)" }}
        >
          <img 
            src="/images/logo.png" 
            alt="CODESYNC" 
            className='img-fluid mx-auto mt-3'
            style={{ maxWidth: '150px', marginTop: '-20px' }} 
          />
          <hr style={{ marginTop: "-3rem" }} />

          {/* Client List */}
          <div className="d-flex flex-column overflow-auto px-2">
            {clients.map(client => (
              <div key={client.id} className="text-center mb-3">
                <div 
                  className="rounded-circle bg-secondary mx-auto d-flex align-items-center justify-content-center"
                  style={{ width: '50px', height: '50px', fontSize: '1.2rem' }}
                >
                  {client.username.charAt(0).toUpperCase()}
                </div>
                <small>{client.username}</small>
              </div>
            ))}
          </div>

          {/* Buttons */}
          <div className="mt-auto px-3 pb-3">
            <hr />
            <button className='btn btn-success w-100 mb-2'>Copy Room ID</button>
            <button className='btn btn-danger w-100'>Leave Room</button>
          </div>
        </div>

        {/* Main Editor Section */}
        <div className="col-md-10 text-light d-flex flex-column h-100" style={{ backgroundColor: "#111" }}>
          <h1 className='p-4'>Editor Page</h1>
          <div className="flex-grow-1 p-4 bg-black rounded" style={{ minHeight: '300px' }}>
            <p className='text-muted'>/* Code editor area will go here */</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditorPage;

