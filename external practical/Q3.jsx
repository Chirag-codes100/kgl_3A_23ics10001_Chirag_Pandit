import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

function RequireAuth({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return children;
}

function Login({ isAuthenticated, toggleAuth }) {
  return (
    <div>
      <h1>Login Page</h1>
      <p>Authenticated: {isAuthenticated ? 'Yes' : 'No'}</p>
      <button onClick={toggleAuth}>
        {isAuthenticated ? 'Logout' : 'Login'}
      </button>
      <div style={{ marginTop: 16 }}>
        <Link to="/dashboard">Go to Dashboard</Link>
      </div>
    </div>
  );
}

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is a protected route.</p>
      <Link to="/login">Back to Login</Link>
    </div>
  );
}

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated((prev) => !prev);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<Login isAuthenticated={isAuthenticated} toggleAuth={toggleAuth} />}
        />
        <Route
          path="/dashboard"
          element={
            <RequireAuth isAuthenticated={isAuthenticated}>
              <Dashboard />
            </RequireAuth>
          }
        />
        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
