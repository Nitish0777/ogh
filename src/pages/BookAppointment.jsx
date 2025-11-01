import React, { useState } from 'react';

const BookAppointment = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    age: '',
    gender: '',
    department: '',
    doctor: '',
    date: '',
    time: '',
    symptoms: '',
    emergencyContact: '',
    address: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const departments = [
    { id: 'endocrinology', name: 'Endocrinology' },
    { id: 'gastroenterology', name: 'Gastroenterology' },
    { id: 'neurology', name: 'Neurology' },
    { id: 'orthopedics', name: 'Orthopedics' },
    { id: 'pediatrics', name: 'Pediatrics' },
    { id: 'psychiatry', name: 'Psychiatry' },
    { id: 'emergency', name: 'Emergency Medicine' },
    { id: 'surgery', name: 'Surgery' },
    { id: 'gynecology', name: 'Gynecology' },
    { id: 'oncology', name: 'Oncology' },
    { id: 'nephrology', name: 'Nephrology' },
    { id: 'spine', name: 'Spine Surgery' },
    { id: 'plastic', name: 'Plastic Surgery' },
    { id: 'general', name: 'General Medicine' },
    { id: 'pathology', name: 'Pathology' },
    { id: 'urology', name: 'Urology' },
    { id: 'critical', name: 'Critical Care' },
    { id: 'anesthesia', name: 'Anesthesia' },
    { id: 'ent', name: 'ENT' },
    { id: 'ophthalmology', name: 'Ophthalmology' }
  ];

  const doctors = [
    {
      id: 1,
      name: 'Dr. Prakash Shendge',
      specialization: 'General & Laparoscopic Surgeon',
      department: 'surgery',
      experience: '26+ Years',
      availability: 'Mon - Fri: 11:00 AM - 1:00 PM & 7 PM to 9 PM'
    },
    {
      id: 2,
      name: 'Dr. Rekha Kaushal',
      specialization: 'Gynaecologists',
      department: 'gynecology',
      experience: '14+ Years',
      availability: 'Mon - Sat: 10:00 AM - 6:00 PM'
    },
    {
      id: 3,
      name: 'Dr. Shirish Shetty',
      specialization: 'Oncology',
      department: 'oncology',
      experience: '15+ Years',
      availability: 'Tue - Sat: 8:00 AM - 4:00 PM'
    },
    {
      id: 4,
      name: 'Dr. Amit Nagrik',
      specialization: 'Nephrologist',
      department: 'nephrology',
      experience: '11+ Years',
      availability: 'Mon - Fri: 10:00 AM - 4:00 PM'
    },
    {
      id: 5,
      name: 'Dr. Arvind Vatkar',
      specialization: 'Spine Surgeon',
      department: 'spine',
      experience: '13+ Years',
      availability: 'Tue - Sat: 9:00 AM - 3:00 PM'
    },
    {
      id: 6,
      name: 'Dr. Manpreet Juneja',
      specialization: 'Plastic Surgeon',
      department: 'plastic',
      experience: '10+ Years',
      availability: 'Wed - Sun: 11:00 AM - 5:00 PM'
    },
    {
      id: 7,
      name: 'Dr. Vikas Deshmukh',
      specialization: 'General Medicine',
      department: 'general',
      experience: '12+ Years',
      availability: 'Mon - Sat: 8:00 AM - 6:00 PM'
    },
    {
      id: 8,
      name: 'Dr. Sachin Kale',
      specialization: 'Orthopaedics',
      department: 'orthopedics',
      experience: '14+ Years',
      availability: 'Mon - Fri: 9:00 AM - 5:00 PM'
    },
    {
      id: 9,
      name: 'Dr. Shonit Agarwal',
      specialization: 'Pathologist',
      department: 'pathology',
      experience: '11+ Years',
      availability: 'Mon - Sat: 7:00 AM - 3:00 PM'
    },
    {
      id: 10,
      name: 'Dr. Amit Bhoir',
      specialization: 'Urologist',
      department: 'urology',
      experience: '13+ Years',
      availability: 'Mon - Fri: 10:00 AM - 4:00 PM'
    },
    {
      id: 11,
      name: 'Dr. Mustafa',
      specialization: 'Pediatrician',
      department: 'pediatrics',
      experience: '8+ Years',
      availability: 'Mon - Sat: 9:00 AM - 5:00 PM'
    },
    {
      id: 12,
      name: 'Dr. Rohit Moharir',
      specialization: 'Critical Care Intensivist',
      department: 'critical',
      experience: '12+ Years',
      availability: 'Available 24/7 for emergencies'
    },
    {
      id: 13,
      name: 'Dr. Vikas Deshmukh',
      specialization: 'Psychiatrist',
      department: 'psychiatry',
      experience: '10+ Years',
      availability: 'Mon - Fri: 2:00 PM - 7:00 PM'
    },
    {
      id: 14,
      name: 'Dr. Rajendra Khade',
      specialization: 'Anesthetist',
      department: 'anesthesia',
      experience: '15+ Years',
      availability: 'Available during surgical procedures'
    },
    {
      id: 15,
      name: 'Dr. Sachin Nemane',
      specialization: 'ENT Specialist',
      department: 'ent',
      experience: '9+ Years',
      availability: 'Tue - Sat: 10:00 AM - 4:00 PM'
    },
    {
      id: 16,
      name: 'Dr. Rajpal Usnale',
      specialization: 'Ophthalmologist',
      department: 'ophthalmology',
      experience: '11+ Years',
      availability: 'Mon - Fri: 9:00 AM - 3:00 PM'
    }
  ];

  const timeSlots = [
    '09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM',
    '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM', '05:00 PM'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.age) newErrors.age = 'Age is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.department) newErrors.department = 'Department is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
      // Clear doctor selection when department changes
      ...(name === 'department' && { doctor: '' })
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      setSubmitStatus('error');
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      console.log('Appointment Data:', formData);
      setSubmitStatus('success');
      
      // Reset form after successful submission
      setTimeout(() => {
        setFormData({
          firstName: '', lastName: '', email: '', phone: '', age: '',
          gender: '', department: '', doctor: '', date: '', time: '',
          symptoms: '', emergencyContact: '', address: ''
        });
        setSubmitStatus(null);
      }, 3000);
      
    } catch (error) {
      console.error('Error booking appointment:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getTomorrowDate = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    return tomorrow.toISOString().split('T')[0];
  };

  // Get available doctors for selected department
  const getAvailableDoctors = () => {
    if (!formData.department) return [];
    return doctors.filter(doctor => doctor.department === formData.department);
  };

  // Get departments that have doctors available
  const getAvailableDepartments = () => {
    const departmentsWithDoctors = new Set(doctors.map(doctor => doctor.department));
    return departments.filter(dept => departmentsWithDoctors.has(dept.id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-green-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Book Your Appointment
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Take the first step towards better health. Our experienced medical professionals 
            are here to provide you with the best care possible.
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Status Messages */}
        {submitStatus === 'success' && (
          <div className="mb-8 bg-green-50 border border-green-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-green-800">
                  Appointment Booked Successfully!
                </h3>
                <p className="text-sm text-green-700 mt-1">
                  We'll send you a confirmation email shortly with your appointment details.
                </p>
              </div>
            </div>
          </div>
        )}

        {submitStatus === 'error' && (
          <div className="mb-8 bg-red-50 border border-red-200 rounded-lg p-4">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <h3 className="text-sm font-medium text-red-800">
                  Please correct the errors below
                </h3>
              </div>
            </div>
          </div>
        )}

        {/* Main Form */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <form onSubmit={handleSubmit} className="divide-y divide-gray-200">
            
            {/* Personal Information Section */}
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-blue-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Personal Information</h2>
                  <p className="text-gray-600">Tell us about yourself</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.firstName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.lastName ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Age <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="number"
                    name="age"
                    value={formData.age}
                    onChange={handleChange}
                    min="1"
                    max="120"
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.age ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="25"
                  />
                  {errors.age && <p className="text-red-500 text-sm mt-1">{errors.age}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.email ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="john.doe@email.com"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.phone ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="+1 (555) 123-4567"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Gender <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.gender ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                    <option value="prefer-not-to-say">Prefer not to say</option>
                  </select>
                  {errors.gender && <p className="text-red-500 text-sm mt-1">{errors.gender}</p>}
                </div>
              </div>
            </div>

            {/* Appointment Details Section */}
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-green-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Appointment Details</h2>
                  <p className="text-gray-600">Choose your preferred time and department</p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Department <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="department"
                    value={formData.department}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.department ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Department</option>
                    {getAvailableDepartments().map((dept) => (
                      <option key={dept.id} value={dept.id}>
                        {dept.name}
                      </option>
                    ))}
                  </select>
                  {errors.department && <p className="text-red-500 text-sm mt-1">{errors.department}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Doctor
                  </label>
                  <select
                    name="doctor"
                    value={formData.doctor}
                    onChange={handleChange}
                    disabled={!formData.department}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed"
                  >
                    <option value="">
                      {!formData.department ? 'Select Department First' : 'Select Doctor (Optional)'}
                    </option>
                    {getAvailableDoctors().map((doctor) => (
                      <option key={doctor.id} value={doctor.name}>
                        {doctor.name} - {doctor.specialization} ({doctor.experience})
                      </option>
                    ))}
                  </select>
                  {formData.department && getAvailableDoctors().length === 0 && (
                    <p className="text-amber-600 text-sm mt-1">
                      No doctors available for this department currently
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                    min={getTomorrowDate()}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.date ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  />
                  {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Preferred Time <span className="text-red-500">*</span>
                  </label>
                  <select
                    name="time"
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200 ${
                      errors.time ? 'border-red-500 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select Time</option>
                    {timeSlots.map((time) => (
                      <option key={time} value={time}>{time}</option>
                    ))}
                  </select>
                  {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
                </div>
              </div>
            </div>

            {/* Additional Information Section */}
            <div className="p-8">
              <div className="flex items-center mb-8">
                <div className="bg-purple-100 rounded-full p-3 mr-4">
                  <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Additional Information</h2>
                  <p className="text-gray-600">Help us prepare for your visit</p>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Symptoms / Reason for Visit
                  </label>
                  <textarea
                    name="symptoms"
                    value={formData.symptoms}
                    onChange={handleChange}
                    rows="4"
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                    placeholder="Please describe your symptoms, concerns, or reason for the appointment in detail..."
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Emergency Contact
                    </label>
                    <input
                      type="tel"
                      name="emergencyContact"
                      value={formData.emergencyContact}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="+1 (555) 987-6543"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Address
                    </label>
                    <input
                      type="text"
                      name="address"
                      value={formData.address}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-200"
                      placeholder="123 Main St, City, State, ZIP"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Submit Section */}
            <div className="p-8 bg-gray-50">
              <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
                <div className="text-sm text-gray-600">
                  <p className="flex items-center">
                    <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    Your information is secure and protected
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`px-8 py-4 rounded-xl font-semibold text-lg transition duration-200 transform hover:scale-105 ${
                    isSubmitting
                      ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-600 to-green-600 text-white hover:from-blue-700 hover:to-green-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2'
                  }`}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-gray-700" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Booking Appointment...
                    </div>
                  ) : (
                    'Book Appointment'
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default BookAppointment;
