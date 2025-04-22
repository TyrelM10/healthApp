import React, { useState } from 'react';
import { submitHealthData } from '../utils/api';
import HealthForm from '../components/HealthForm';

function HealthData() {
  const [formData, setFormData] = useState({
    age: '',
    bmi: '',
    glucose: '',
    blood_pressure: '',
    insulin: '',
  });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.age || formData.age <= 0) newErrors.age = 'Age must be a positive number';
    if (!formData.bmi || formData.bmi <= 0) newErrors.bmi = 'BMI must be a positive number';
    if (!formData.glucose || formData.glucose <= 0) newErrors.glucose = 'Glucose must be a positive number';
    if (!formData.blood_pressure || formData.blood_pressure <= 0) newErrors.blood_pressure = 'Blood Pressure must be a positive number';
    if (!formData.insulin || formData.insulin <= 0) newErrors.insulin = 'Insulin must be a positive number';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleSubmit = async (data) => {
    setLoading(true);
    try {
      await submitHealthData(data);
      setSuccess('Health data submitted successfully!');
      setError('');
      setFormData({ age: '', bmi: '', glucose: '', blood_pressure: '', insulin: '' });
    } catch (error) {
      console.error('Submission error:', error);
      setError('Failed to submit health data. Please try again.');
      setSuccess('');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="h-full w-full flex items-center justify-center bg-black/50 p-4 sm:p-6">
      <div className="bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-md w-full backdrop-blur-md bg-opacity-80 overflow-y-auto max-h-[calc(100vh-8rem)]">
        <HealthForm onSubmit={handleSubmit} loading={loading} />
        {success && <p className="text-green-500 text-center mt-3 sm:mt-4 animate-fade-in text-xs sm:text-sm">{success}</p>}
        {error && <p className="text-red-500 text-center mt-3 sm:mt-4 animate-fade-in text-xs sm:text-sm">{error}</p>}
      </div>
    </div>
  );
}

export default HealthData;