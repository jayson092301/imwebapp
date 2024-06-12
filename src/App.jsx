import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './page/dashboard';
import NewLogin from './page/NewLogin';
import Register from './page/Register';
import Patient from './page/Patient'; // Importing the Patient component

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<NewLogin />} />
          <Route path="/login" element={<NewLogin />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />}>
            <Route path="Patient" element={<Patient />} /> {/* Child route for Patient */}
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
