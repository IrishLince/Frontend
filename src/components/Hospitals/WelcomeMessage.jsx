import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { UserCircle2, ChevronLeft } from 'lucide-react';
import Header from '../Header';

export default function WelcomeMessage() {
  const location = useLocation();

  return (
    <div className="bg-white min-h-screen">
      <Header />
      <div className="flex justify-center items-center py-12">
        <div className="container1 bg-[#EEEEEE] p-4 rounded-lg w-[70%]">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold">
                <span className="text-black">Welcome, </span>
                <span className="text-[#C91C1C]">Hospital Admin</span>
                <span className="text-black">!</span>
              </h1>
              <p className="text-lg mt-4 font-semibold">
                Overview of pending requests and request history
              </p>
            </div>
            <Link to="/new-request">
              <button className="bg-[#C91C1C] text-white py-2 px-6 rounded-full font-bold hover:bg-[#9e1414] text-sm md:text-base lg:text-lg md:mr-8">
                New Request
              </button>
            </Link>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center items-start space-x-8 px-4 lg:px-8">
        <div className="container2 bg-[#FFE7E7] p-6 rounded-lg w-full lg:w-[35%] mb-8 lg:mb-0 shadow-lg">
          <h2 className="text-xl font-bold mb-4">Pending Requests</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Blood Type</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Units</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Requested On</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-gray-300 text-center">
                  <td className="py-2 px-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">O+</div>
                  </td>
                  <td className="py-2 px-4">5</td>
                  <td className="py-2 px-4">11/01/2024</td>
                  <td className="py-2 px-4 text-orange-500">Pending</td>
                </tr>
                <tr className="border-b border-gray-300 text-center">
                  <td className="py-2 px-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">A-</div>
                  </td>
                  <td className="py-2 px-4">3</td>
                  <td className="py-2 px-4">11/28/2024</td>
                  <td className="py-2 px-4 text-orange-500">Pending</td>
                </tr>
                <tr className="border-b border-gray-300 text-center">
                  <td className="py-2 px-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">B+</div>
                  </td>
                  <td className="py-2 px-4">10</td>
                  <td className="py-2 px-4">11/30/2024</td>
                  <td className="py-2 px-4 text-blue-500">Approved</td>
                </tr>
                <tr className="border-b border-gray-300 text-center">
                  <td className="py-2 px-4">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">B-</div>
                  </td>
                  <td className="py-2 px-4">8</td>
                  <td className="py-2 px-4">12/05/2024</td>
                  <td className="py-2 px-4 text-blue-500">Approved</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="container3 bg-[#FFE7E7] p-6 rounded-lg w-full lg:w-[50%] shadow-lg">
          <h2 className="text-xl font-bold mb-4">Request History</h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Request Date</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Blood Type</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Units</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Date Fulfilled</th>
                  <th className="py-2 px-4 border-b bg-[#FFCACA] text-black">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr className="text-center">
                  <td className="py-2 px-4 border-b">11/14/2024</td>
                  <td className="py-2 px-4 border-b">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">O+</div>
                  </td>
                  <td className="py-2 px-4 border-b">5</td>
                  <td className="py-2 px-4 border-b">11/20/2024</td>
                  <td className="py-2 px-4 border-b text-[#34751D]">Fulfilled</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2 px-4 border-b">11/12/2024</td>
                  <td className="py-2 px-4 border-b">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">A+</div>
                  </td>
                  <td className="py-2 px-4 border-b">10</td>
                  <td className="py-2 px-4 border-b">11/18/2024</td>
                  <td className="py-2 px-4 border-b text-[#34751D]">Fulfilled</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2 px-4 border-b">11/08/2024</td>
                  <td className="py-2 px-4 border-b">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">B-</div>
                  </td>
                  <td className="py-2 px-4 border-b">5</td>
                  <td className="py-2 px-4 border-b">11/12/2024</td>
                  <td className="py-2 px-4 border-b text-[#34751D]">Fulfilled</td>
                </tr>
                <tr className="text-center">
                  <td className="py-2 px-4 border-b">11/05/2024</td>
                  <td className="py-2 px-4 border-b">
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white inline-block mx-auto">B+</div>
                  </td>
                  <td className="py-2 px-4 border-b">15</td>
                  <td className="py-2 px-4 border-b">11/10/2024</td>
                  <td className="py-2 px-4 border-b text-[#34751D]">Fulfilled</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
