'use client'

import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from './Header';
import AkiImage from '../assets/Project Members/Aki.png';
import LinceImage from '../assets/Project Members/Lince.png';
import ArvinImage from '../assets/Project Members/Arvin.png'
import MiguelImage from '../assets/Project Members/Miguel.png';
import MatenImage from '../assets/Project Members/Maten.png';
import backgroundImage from '../assets/coverAboutus.png';
import backgroundImageJoinus from '../assets/CoverJoinus.png';
import firstimage from '../assets/1st.png';
import secondimage from '../assets/2nd.png'

export default function BloodDonationWebsite() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(2);
 
  const teamMembers = [
    { name: 'Villaflor, Akimarie A.', role: 'System Analyst/Frontend', image: AkiImage },
    { name: 'Lince, Irish T.', role: 'Tester/QA Frontend', image: LinceImage },
    { name: 'Espinoza, Arvin S.', role: 'Team Leader/Backend', image: ArvinImage },
    { name: 'Carandang, Miguel T.', role: 'Integration/Backend', image: MiguelImage },
    { name: 'Maten, Rovic', role: 'Tester/QA Frontend', image: MatenImage },
  ];

  const nextTeamSlide = () => {
    setCurrentTeamIndex((prevIndex) => (prevIndex + 1) % teamMembers.length);
  };

  const prevTeamSlide = () => {
    setCurrentTeamIndex((prevIndex) => (prevIndex - 1 + teamMembers.length) % teamMembers.length);
  };

  useEffect(() => {
    const handleResize = () => {
      // Add any specific resize logic here if needed
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const heroText = "Donate Blood, Save Lives";
  const heroSubtext = "Every drop counts in our mission to help those in need.";

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main className="overflow-hidden">
        {/* Hero Section with Animated Text */}
        <div 
          className="relative h-48 sm:h-64 md:h-96 mb-8 sm:mb-12 flex items-center justify-center" 
          style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="relative z-10 text-center p-4 sm:p-8">
            <motion.h1 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {heroText.split('').map((char, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                >
                  {char}
                </motion.span>
              ))}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl text-white"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {heroSubtext}
            </motion.p>
          </div>
        </div>

        {/* Who We Are Section */}
        <section className="bg-white px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 sm:gap-8">
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-redsource">Who We Are</h2>
              <p className="text-sm sm:text-base text-graycustom">
                At <span className="text-redsource font-semibold">RedSource</span>, our passion lies in saving lives through the power of generosity and community. Founded in 2010, we began as a small initiative to address the urgent demand for blood in local hospitals. Over time, we have grown into a trusted organization serving thousands of patients annually. Every drop of blood donated is a testament to the compassion of individuals who choose to make a difference.
              </p>
            </div>
            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-4 text-redsource">Our Mission and Impact</h2>
              <p className="text-sm sm:text-base text-graycustom">
                At the heart of <span className="text-redsource font-semibold">RedSource</span> is a profound commitment to bridging the gap between those who can give and those who need. Blood donation is more than a medical act; it's a lifeline that connects humanity. Our mission is to ensure a reliable and safe blood supply for hospitals, clinics, and emergency care facilities while fostering awareness about the life-saving importance of blood donation.
              </p>
            </div>
          </div>
        </section>

        {/* Join Us Section */}
        <section 
          className="text-white py-12 px-4 sm:px-6 text-center" 
          style={{ backgroundImage: `url(${backgroundImageJoinus})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6">Join Us In Saving Lives!</h2>
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12">
              You have the power to save lives. Whether you're a first-time donor or a seasoned supporter, there's always a way to help.
            </p>
            
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              {['Donate Blood', 'Volunteer Your Time', 'Spread the Word'].map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="text-red-300 mt-1.5">•</span>
                  <div>
                    <h3 className="font-semibold mb-1">{item}:</h3>
                    <p className="text-sm sm:text-base">{item === 'Donate Blood' 
                      ? 'It only takes a few minutes to make a lifetime of difference. We ensure the donation process is comfortable, safe, and rewarding.'
                      : item === 'Volunteer Your Time'
                      ? 'Join our team of dedicated volunteers who help with drives, donor support, and community outreach.'
                      : 'Be an advocate for life. Encourage your friends and family to join the cause and make blood donation a habit.'}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Information Sections */}
        <section className="bg-red-50 px-4 sm:px-6 py-8 sm:py-12">
          <div className="max-w-6xl mx-auto space-y-8 sm:space-y-12">
            {/* Why Blood Donation Matters */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8">
              <div className="flex-1 max-w-xl">
                <h2 className="text-xl sm:text-2xl font-bold text-redsource mb-4">
                  Why Blood Donation Matters
                </h2>
                <div className="space-y-4 text-sm sm:text-base text-graycustom">
                  <p>
                    Every two seconds, someone needs blood—whether for emergencies, surgeries, or chronic illnesses. Blood cannot be manufactured, making donors like you essential.
                  </p>
                  <p>
                    A single donation can save up to three lives, offering hope and healing to patients and their families. At <span className="text-redsource font-semibold">RedSource</span>, we ensure every donation is safe, simple, and rewarding.
                  </p>
                </div>
              </div>
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
                <img
                  src={firstimage}
                  alt="Blood donation process"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-red-200 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-red-200 rounded-full" />
              </div>
            </div>

            {/* Our Commitment to Safety */}
            <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 sm:gap-8">
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 order-2 md:order-first">
                <img
                  src={secondimage}
                  alt="Safety protocols in blood donation"
                  className="w-full h-full rounded-full object-cover"
                />
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-rose-200 rounded-full" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-rose-200 rounded-full" />
              </div>
              <div className="flex-1 max-w-xl order-1 md:order-last">
                <h2 className="text-xl sm:text-2xl font-bold text-redsource mb-4">
                  Our Commitment to Safety
                </h2>
                <p className="text-sm sm:text-base text-graycustom">
                  Your safety is our top priority. At <span className="text-red-600 font-semibold">RedSource</span>, we adhere to the highest medical and ethical standards to ensure a safe and comfortable donation process. From sterile equipment to trained professionals, every step of your journey is designed to provide peace of mind.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="bg-red-900 py-12 sm:py-16 px-4 relative overflow-hidden">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 sm:mb-12 text-center text-white">Our Team</h2>
            <div className="relative">
              {/* Large red circle */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 sm:w-96 sm:h-96 bg-red-500 rounded-full opacity-20 blur-3xl"></div>
              {/* Small pink circle */}
              <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-64 sm:h-64 bg-pink-500 rounded-full opacity-20 blur-3xl"></div>

              <div className="flex justify-center items-center gap-2 sm:gap-4 -mx-2 sm:mx-0">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className={`transition-all duration-300 ${
                      index === currentTeamIndex
                        ? 'scale-100 opacity-100 w-64 sm:w-72'
                        : index === (currentTeamIndex + 1) % teamMembers.length || index === (currentTeamIndex - 1 + teamMembers.length) % teamMembers.length
                        ? 'scale-75 opacity-60 hidden sm:block'
                        : 'hidden'
                    }`}
                  >
                    <div className="bg-red-800 rounded-lg overflow-hidden shadow-lg w-full">
                      <div className="h-48 sm:h-56 bg-white flex justify-center items-center">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-24 h-24 sm:w-32 sm:h-32 object-cover rounded-full border-4 border-white"
                        />
                      </div>
                      <div className="p-4 text-center">
                        <h3 className="font-bold text-lg sm:text-xl text-white">{member.name}</h3>
                        <p className="text-red-200 text-sm sm:text-base">{member.role}</p>
                        <button className="mt-4 px-4 py-2 bg-red-600 text-white text-sm sm:text-base rounded-full hover:bg-red-700 transition-colors">
                          Message
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={prevTeamSlide}
                className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Previous team member"
              >
                <ChevronLeft className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
              <button
                onClick={nextTeamSlide}
                className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/10 text-white p-2 rounded-full hover:bg-white/20 transition-colors"
                aria-label="Next team member"
              >
                <ChevronRight className="w-4 h-4 sm:w-6 sm:h-6" />
              </button>
            </div>

            <div className="flex justify-center mt-6 sm:mt-8">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  className={`w-2 h-2 mx-1 rounded-full ${
                    index === currentTeamIndex ? 'bg-white' : 'bg-red-600'
                  }`}
                  onClick={() => setCurrentTeamIndex(index)}
                  aria-label={`Go to slide ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-red-50 py-12 px-4 sm:px-6 text-center">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-red-800">Contact Us!</h2>
            <p className="mb-8 text-sm sm:text-base">Together, we can create a legacy of kindness and care that transforms lives.</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              {[
                { icon: Phone, title: 'Phone Number', content: '(555) 123-4567' },
                { icon: Mail, title: 'Email Address', content: 'info@bloodbank.com' },
                { icon: MapPin, title: 'Location', content: '123 Medical Avenue' }
              ].map(({ icon: Icon, title, content }) => (
                <div key={title} className="flex flex-col items-center">
                  <Icon className="w-6 h-6 mb-2 text-red-600" />
                  <h3 className="font-bold text-red-800">{title}</h3>
                  <p className="text-sm sm:text-base">{content}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

