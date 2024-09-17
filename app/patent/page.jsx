'use client'
import React, { useState } from "react";
import { motion } from "framer-motion";
import { FileText, Save, X, Upload, Plus, Trash } from "lucide-react";

const PatentForm = () => {
  const [formData, setFormData] = useState({
    // Registered Patents Information
    registeredPatents: [
      {
        patentTitle: "",
        patentNumber: "",
        patentDescription: "",
        patentField: "",
        filingDate: new Date().toISOString().split("T")[0], // Default to today's date
        status: "filed",
      },
    ],

    // Intellectual Property Specialization
    ipSpecialization: "patent",

    // File Uploads
    files: [],
  });

  const handleChange = (e, index, field) => {
    const { name, value } = e.target;

    if (name.startsWith("registeredPatents")) {
      const newPatents = [...formData.registeredPatents];
      newPatents[index][field] = value;
      setFormData((prevState) => ({
        ...prevState,
        registeredPatents: newPatents,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const addPatent = () => {
    setFormData((prevState) => ({
      ...prevState,
      registeredPatents: [
        ...prevState.registeredPatents,
        {
          patentTitle: "",
          patentNumber: "",
          patentDescription: "",
          patentField: "",
          filingDate: new Date().toISOString().split("T")[0],
          status: "filed",
        },
      ],
    }));
  };

  const removePatent = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      registeredPatents: prevState.registeredPatents.filter(
        (_, i) => i !== index
      ),
    }));
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files).map((file) => ({
      filename: file.name,
      fileUrl: URL.createObjectURL(file), 
      size: file.size,
      uploadDate: new Date().toISOString().split("T")[0],
    }));

    setFormData((prevState) => ({
      ...prevState,
      files: [...prevState.files, ...files],
    }));
  };

  const removeFile = (index) => {
    setFormData((prevState) => ({
      ...prevState,
      files: prevState.files.filter((_, i) => i !== index),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-white/10 backdrop-blur-sm rounded-xl p-8 shadow-lg"
      >
        <h2 className="text-3xl font-bold text-orange-500 mb-6 flex items-center">
          <FileText className="mr-2" />
          Patent Registration Form
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Registered Patents */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">
              Registered Patents
            </h3>
            {formData.registeredPatents.map((patent, index) => (
              <div key={index} className="space-y-2 p-4 bg-gray-200 rounded-md">
                <input
                  type="text"
                  name={`registeredPatents[${index}].patentTitle`}
                  value={patent.patentTitle}
                  onChange={(e) => handleChange(e, index, "patentTitle")}
                  placeholder="Patent Title"
                  className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="text"
                  name={`registeredPatents[${index}].patentNumber`}
                  value={patent.patentNumber}
                  onChange={(e) => handleChange(e, index, "patentNumber")}
                  placeholder="Patent Number"
                  className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <textarea
                  name={`registeredPatents[${index}].patentDescription`}
                  value={patent.patentDescription}
                  onChange={(e) => handleChange(e, index, "patentDescription")}
                  placeholder="Patent Description"
                  className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                  rows="3"
                ></textarea>
                <input
                  type="text"
                  name={`registeredPatents[${index}].patentField`}
                  value={patent.patentField}
                  onChange={(e) => handleChange(e, index, "patentField")}
                  placeholder="Patent Field"
                  className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                <input
                  type="date"
                  name={`registeredPatents[${index}].filingDate`}
                  value={patent.filingDate}
                  onChange={(e) => handleChange(e, index, "filingDate")}
                  className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                />
                {/* <select
                  name={`registeredPatents[${index}].status`}
                  value={patent.status}
                  onChange={(e) => handleChange(e, index, "status")}
                  className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
                >
                  <option value="filed">Filed</option>
                  <option value="approved">Approved</option>
                  <option value="rejected">Rejected</option>
                  <option value="pending">Pending</option>
                </select> */}
                {index > 0 && (
                  <button
                    type="button"
                    onClick={() => removePatent(index)}
                    className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <Trash size={18} className="inline mr-2" />
                    Remove Patent
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              onClick={addPatent}
              className="mt-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-colors duration-300"
            >
              <Plus size={18} className="inline mr-2" />
              Add Another Patent
            </button>
          </div>

          {/* Intellectual Property Specialization */}
          <h3 className="text-xl font-semibold text-orange-400">
            IP Specialization
          </h3>
          <div className="space-y p-4 rounded-md bg-gray-200">
            
            <select
              name="ipSpecialization"
              value={formData.ipSpecialization}
              onChange={handleChange}
              className="w-full px-3 py-2 bg-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            >
              <option value="patent">Patent</option>
              <option value="copyright">Copyright</option>
              <option value="trademark">Trademark</option>
              <option value="design">Design</option>
            </select>
          </div>

          {/* File Upload */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-orange-400">
              Supporting Documents
            </h3>
            <input
              type="file"
              name="files"
              onChange={handleFileChange}
              className="file-input w-full mt-4"
              multiple
            />
            <div className="space-y-2">
              {formData.files.map((file, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center p-2 bg-gray-200 rounded-md"
                >
                  <span>{file.filename}</span>
                  <button
                    type="button"
                    onClick={() => removeFile(index)}
                    className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors duration-300"
                  >
                    <Trash size={18} className="inline mr-2" />
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 px-6 py-3 bg-orange-500 text-white rounded-md font-bold hover:bg-orange-600 transition-colors duration-300 flex items-center"
          >
            <Save size={20} className="inline mr-2" />
            Submit
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default PatentForm;
