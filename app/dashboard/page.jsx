'use client'

import React, { useState } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement } from 'chart.js';
import { Pie, Bar, Line } from 'react-chartjs-2';
import { User, Book, Lightbulb, Rocket, ChevronRight, Phone, Mail, MapPin, DollarSign, Users, Award, Star, Calendar } from 'lucide-react';
import Link from 'next/link';
import userData from '../data/userData.json';

ChartJS.register(ArcElement, Tooltip, Legend, CategoryScale, LinearScale, BarElement, Title, PointElement, LineElement);

const DashboardPage = () => {
  const [userInterest, setUserInterest] = useState('research');

  const interestData = {
    labels: ['Research Projects', 'IPR', 'Startups'],
    datasets: [
      {
        data: [400, 300, 300],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  };

  const startupGrowthData = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
    datasets: [
      {
        label: 'Revenue (₹ Lakhs)',
        data: [40, 59, 80, 81, 56, 55],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
      {
        label: 'Customer Acquisition',
        data: [33, 25, 35, 51, 54, 76],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 1)',
      },
    ],
  };

  const iprPortfolioData = {
    labels: ['Filed', 'Granted', 'Pending', 'Commercialized'],
    datasets: [
      {
        label: 'Patents',
        data: [7, 19, 3, 5],
        backgroundColor: 'rgba(20, 184, 166, 1)',
      },
    ],
  };

  const collaborationData = {
    labels: ['Research Institutions', 'Industry Partners', 'Government Agencies', 'Startups'],
    datasets: [
      {
        label: 'Collaboration Score',
        data: [65, 59, 80, 81],
        backgroundColor: 'rgba(34, 197, 94, 1)',
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="min-h-screen bg-orange-50">
      <header className="bg-opacity-80 bg-[#23527c] p-4">
        <div className="container mx-auto flex items-center">
          <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
            <img src='/user.png' alt="User" />
          </div>
          <h1 className="text-white text-2xl font-bold">{userData.name}</h1>
        </div>
      </header>

      <main className="container mx-auto mt-8 p-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex flex-row items-center mb-8">
  <h2 className="text-3xl font-bold mr-8">User Profile</h2>
  <div className="flex items-center mr-4">
    <Star className="w-5 h-5 mr-1 text-yellow-500" />
    <span className="text-sm">Engagement Level: {userData.engagementLevel}</span>
  </div>
  <div className="flex items-center">
    <Calendar className="w-5 h-5 mr-1 text-blue-500" />
    <span className="text-sm">Active since: {userData.activeOnPortalSince}</span>
  </div>
</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center mb-4">
                <User className="mr-2" />
                <span>{userData.name}</span>
              </div>
              <div className="flex items-center mb-4">
                <Phone className="mr-2" />
                <span>{userData.phoneNumber}</span>
              </div>
              <div className="flex items-center mb-4">
                <Mail className="mr-2" />
                <span>{userData.emailId}</span>
              </div>
            </div>
            <div>
            <div className="flex items-center mb-4">
                {userData.role === 'startup_owner' && <Rocket className="mr-2" />}
                {userData.role === 'researcher' && <Book className="mr-2" />}
                {userData.role === 'ip_professional' && <Lightbulb className="mr-2" />}
                <span className="capitalize mr-2">{userData.role.replace('_', ' ')}</span>
              </div>
              <div className="flex items-center mb-4">
                <MapPin className="mr-2" />
                <span>{userData.placeOfOrigin}</span>
              </div>
              <div className="flex flex-wrap items-center">
                <span className="mr-2">Interests:</span>
                {userData.interests.map((interest, index) => (
                  <span key={index} className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 mb-4">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Startup Growth</h3>
            <div style={{ height: '300px' }}>
              <Line data={startupGrowthData} options={options} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">IPR Portfolio</h3>
            <div style={{ height: '300px' }}>
              <Bar data={iprPortfolioData} options={options} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Collaboration Network</h3>
            <div style={{ height: '300px' }}>
              <Bar data={collaborationData} options={options} />
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-8">
            <h3 className="text-xl font-bold mb-4">Key Metrics</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <DollarSign size={32} className="mx-auto text-green-500" />
                <div className="text-2xl font-bold mt-2">₹50 Lakhs</div>
                <div className="text-gray-600">Total Funding</div>
              </div>
              <div className="text-center">
                <Users size={32} className="mx-auto text-blue-500" />
                <div className="text-2xl font-bold mt-2">15</div>
                <div className="text-gray-600">Team Size</div>
              </div>
              <div className="text-center">
                <Award size={32} className="mx-auto text-purple-500" />
                <div className="text-2xl font-bold mt-2">7</div>
                <div className="text-gray-600">Patents Filed</div>
              </div>
              <div className="text-center">
                <Rocket size={32} className="mx-auto text-red-500" />
                <div className="text-2xl font-bold mt-2">3</div>
                <div className="text-gray-600">Active Projects</div>
              </div>
            </div>
          </div>
        </div>
        <div className="m-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        {[
          {
            type: 'Mentors',
            description: 'Scaling up and finding your product market-fit is always easier with a trusted mentor. Send connection requests to relevant mentors from our mentor listing to start a conversation. Click "View All" to find mentors in your industry and sector. Maximum 3 requests can be sent per week.',
            href: "https://startup.gujarat.gov.in/page/mentors"
          },
          {
            type: 'Incubators',
            description: 'Incubators help idea and early stage companies get the right guidance, resources and connections to take the crucial first few steps for their business. Click View All to find incubators who service your industry. Maximum 3 requests can be sent per week.',
            href: "https://startup.gujarat.gov.in/page/incubators/ic-incubators"
          },
          {
            type: 'Accelerators',
            description: 'Accelerators are useful for early and mid-stage startups to scale and grow their business quickly. Click View All to find accelerators who can help you scale. Maximum 3 requests can be sent per week.',
            href: "https://startup.gujarat.gov.in/page/acceleration-programs"
          },
          {
            type: 'Investors',
            description: 'Connect with potential investors to secure funding for your project. Browse through our list of investors interested in various sectors and stages of startups. Maximum 3 requests can be sent per week.',
            href: "https://ifp.gujarat.gov.in/DIGIGOV/"
          }
        ].map((item, index) => (
          <div key={index} className="bg-blue-100 rounded-3xl shadow-md p-4">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Connect With {item.type}</h3>
              <a href={item.href} className="text-blue-600 hover:underline flex items-center">
                VIEW ALL
                <ChevronRight className="ml-1 w-4 h-4" />
              </a>
            </div>
            <p className="text-gray-600 text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>  
        
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 mb-12">
          <h3 className="text-xl font-bold mb-4">Overall Metrics</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">147,990</div>
              <div className="text-gray-600">Recognized Startups</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">744,813</div>
              <div className="text-gray-600">Users on Portal</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">5,000+</div>
              <div className="text-gray-600">Patents Filed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-red-600">₹10,000 Cr</div>
              <div className="text-gray-600">Funding Allocated</div>
            </div>
          </div>
        </div>  
      </main>
    </div>
  );
};

export default DashboardPage;