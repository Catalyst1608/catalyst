import React from 'react';
import { ChevronDown, Globe, Lock, User, Mail, Phone, MapPin } from 'lucide-react';

const InputField = ({ label, icon: Icon, type = 'text', placeholder, required = false }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}{required && ' *'}
    </label>
    <div className="relative">
      {Icon && (
        <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-orange-500">
          <Icon size={18} />
        </span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        className={`w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out ${Icon ? 'pl-10' : ''}`}
        required={required}
      />
    </div>
  </div>
);

const SelectField = ({ label, options, required = false }) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}{required && ' *'}
    </label>
    <div className="relative">
      <select
        className="w-full px-3 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 appearance-none transition duration-150 ease-in-out"
        required={required}
      >
        <option value="">{`Select ${label}`}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
      <span className="absolute inset-y-0 right-0 pr-3 flex items-center text-orange-500 pointer-events-none">
        <ChevronDown size={18} />
      </span>
    </div>
  </div>
);

const countries = [
  "United States", "Canada", "United Kingdom", "Australia", "Germany", "France", "Japan", "India", "Brazil", "South Africa",
  "Mexico", "Italy", "Spain", "Netherlands", "Sweden", "Norway", "Denmark", "Finland", "New Zealand", "Singapore"
];

const RegistrationForm = () => {
  return (
    <div className="max-w-4xl mx-auto p-8 bg-white rounded-lg shadow-xl border border-orange-200 mt-4 mb-6">
      <h2 className="text-3xl font-bold text-orange-600 mb-6 text-center">Startup Registration</h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InputField label="First Name" icon={User} required placeholder="John" />
        <InputField label="Last Name" icon={User} placeholder="Doe" />
        <InputField label="Year of Birth" icon={Lock} required placeholder="YYYY" type="number" />
        <SelectField label="Gender" required options={['Male', 'Female', 'Non-binary', 'Prefer not to say']} />
        <SelectField label="Country of Residence" icon={Globe} required options={countries} />
        <InputField label="PIN Code" icon={MapPin} required placeholder="123456" />
        <InputField label="State" icon={MapPin} required placeholder="Your State" />
        <SelectField label="District" required options={['District 1', 'District 2', 'District 3']} />
        <InputField label="PAN" icon={Lock} placeholder="ABCDE1234F" />
        <InputField label="Email ID" icon={Mail} type="email" required placeholder="john.doe@example.com" />
        
        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
          <div className="relative flex">
            <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-orange-100 text-orange-600 text-sm">
              <Phone size={18} className="mr-2" />
              +91
            </span>
            <input
              type="tel"
              placeholder="1234567890"
              className="flex-1 px-3 py-2 bg-white border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition duration-150 ease-in-out"
              required
            />
          </div>
        </div>
        
        <div className="md:col-span-2">
          <label className="flex items-center space-x-3">
            <span className="text-sm font-medium text-gray-700">Is this your primary ID for all communication?</span>
            <div className="flex items-center space-x-2">
              <input type="radio" className="form-radio text-orange-500 focus:ring-orange-500" name="primary-id" value="yes" required />
              <span className="text-gray-700">Yes</span>
              <input type="radio" className="form-radio text-orange-500 focus:ring-orange-500" name="primary-id" value="no" />
              <span className="text-gray-700">No</span>
            </div>
          </label>
        </div>
      </form>
      
      <div className="mt-8 flex flex-col sm:flex-row justify-between">
        <button className="mb-4 sm:mb-0 px-6 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition duration-150 ease-in-out">
          Back
        </button>
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <button className="px-6 py-2 bg-indigo-900 text-white rounded-md hover:bg-green-400 hover:text-red-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out">
            Save as Draft
          </button>
          <button className="px-6 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 transition duration-150 ease-in-out">
            Preview and Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrationForm;