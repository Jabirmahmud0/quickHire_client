import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { MapPin, Building, Calendar, ArrowLeft, CheckCircle } from 'lucide-react';
import { companyIcons } from '../components/JobCard';

const JobDetailPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    resume_link: '',
    cover_note: ''
  });
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchJob();
  }, [id]);

  const fetchJob = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/jobs/${id}`);
      setJob(res.data);
    } catch (err) {
      console.error('Error fetching job details:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleApply = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/applications', {
        job_id: id,
        ...formData
      });
      setSubmitted(true);
      setShowForm(false);
    } catch (err) {
      if (err.response?.data?.errors) {
        const newErrors = {};
        err.response.data.errors.forEach(error => {
          newErrors[error.path] = error.msg;
        });
        setErrors(newErrors);
      }
    }
  };

  if (loading) return <div className="h-screen flex items-center justify-center font-bold">Loading job details...</div>;
  if (!job) return <div className="h-screen flex items-center justify-center font-bold">Job not found.</div>;

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="max-w-7xl mx-auto py-16 px-4 md:px-20">
        <div className="mb-12">
            <Link to="/jobs" className="flex items-center gap-2 text-[#4540DB] font-bold hover:gap-3 transition-all">
                <ArrowLeft size={20} /> Back to jobs
            </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-16">
            <div className="flex-1 space-y-12">
                <div className="bg-[#F8F8FD] p-10 flex flex-col md:flex-row items-center gap-8 border border-gray-100 rounded-3xl">
                    <div className="w-24 h-24 bg-white p-4 border border-gray-100 shadow-sm flex items-center justify-center rounded-2xl">
                        {companyIcons[job.company] ? React.createElement(companyIcons[job.company]) : <div className="text-4xl font-bold">{job.company[0]}</div>}
                    </div>
                    <div className="space-y-4 text-center md:text-left">
                        <h1 className="text-4xl font-black text-[#202430]">{job.title}</h1>
                        <div className="flex flex-wrap justify-center md:justify-start items-center gap-6 text-[#515B6F] font-bold opacity-70">
                            <span className="flex items-center gap-2"><Building size={18} /> {job.company}</span>
                            <span className="flex items-center gap-2"><MapPin size={18} /> {job.location}</span>
                            <span className="flex items-center gap-2"><Calendar size={18} /> {new Date(job.created_at).toLocaleDateString()}</span>
                        </div>
                    </div>
                </div>

                <div className="space-y-10 prose prose-lg max-w-none text-[#515B6F]">
                    <section className="space-y-4">
                        <h2 className="text-3xl font-black text-[#202430]">Description</h2>
                        <p className="leading-relaxed">
                            {job.description || "We are looking for a dedicated and skilled professional to join our fast-paced and innovative team. This role requires a balance of technical expertise and creative problem-solving. You will collaborate with cross-functional teams to deliver high-quality solutions that align with our strategic goals."}
                        </p>
                    </section>

                    <section className="space-y-4">
                         <h2 className="text-3xl font-black text-[#202430]">Responsibilities</h2>
                         <ul className="list-disc pl-6 space-y-3">
                             <li>Drive product vision and strategy across the organization.</li>
                             <li>Collaborate with engineering and design teams to build world-class products.</li>
                             <li>Analyze data and metrics to inform product development and refinement.</li>
                             <li>Present findings and progress to stakeholders and executive leadership.</li>
                         </ul>
                    </section>
                </div>
            </div>

            <div className="w-full lg:w-[400px] h-fit sticky top-32">
                {submitted ? (
                    <div className="bg-[#56CDAD]/10 border border-[#56CDAD] p-8 text-center space-y-6">
                        <div className="w-16 h-16 bg-[#56CDAD] text-white rounded-full flex items-center justify-center mx-auto">
                            <CheckCircle size={32} />
                        </div>
                        <div className="space-y-2">
                            <h3 className="text-2xl font-black text-[#202430]">Application Sent!</h3>
                            <p className="text-[#515B6F] font-medium">Your application for {job.title} has been successfully submitted to {job.company}.</p>
                        </div>
                        <Link to="/jobs" className="block bg-[#4540DB] text-white py-4 font-black hover:bg-opacity-90">Browse more jobs</Link>
                    </div>
                ) : showForm ? (
                    <div className="bg-white border border-gray-100 p-8 shadow-2xl space-y-8 animate-fade-up">
                        <h3 className="text-3xl font-black text-[#202430]">Apply now</h3>
                        <form onSubmit={handleApply} className="space-y-6">
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#515B6F]">Full Name</label>
                                <input 
                                    className={`w-full p-4 bg-[#F8F8FD] border outline-none font-medium ${errors.name ? 'border-red-500' : 'border-gray-50'}`}
                                    placeholder="Enter your full name" 
                                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                                />
                                {errors.name && <p className="text-red-500 text-xs font-bold">{errors.name}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#515B6F]">Email Address</label>
                                <input 
                                    className={`w-full p-4 bg-[#F8F8FD] border outline-none font-medium ${errors.email ? 'border-red-500' : 'border-gray-50'}`}
                                    placeholder="Enter your email address" 
                                    type="email"
                                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                                />
                                {errors.email && <p className="text-red-500 text-xs font-bold">{errors.email}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#515B6F]">Resume Link (URL)</label>
                                <input 
                                    className={`w-full p-4 bg-[#F8F8FD] border outline-none font-medium ${errors.resume_link ? 'border-red-500' : 'border-gray-50'}`}
                                    placeholder="Link to your resume (Drive, Dropbox, etc.)" 
                                    onChange={(e) => setFormData({...formData, resume_link: e.target.value})}
                                />
                                {errors.resume_link && <p className="text-red-500 text-xs font-bold">{errors.resume_link}</p>}
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-bold text-[#515B6F]">Cover Note</label>
                                <textarea 
                                    className={`w-full p-4 bg-[#F8F8FD] border outline-none font-medium h-32 resize-none ${errors.cover_note ? 'border-red-500' : 'border-gray-50'}`}
                                    placeholder="Why are you a good fit?" 
                                    onChange={(e) => setFormData({...formData, cover_note: e.target.value})}
                                ></textarea>
                                {errors.cover_note && <p className="text-red-500 text-xs font-bold">{errors.cover_note}</p>}
                            </div>
                            <button type="submit" className="w-full bg-[#4540DB] text-white py-5 font-black text-lg hover:bg-opacity-90 shadow-lg shadow-[#4540DB]/20">Submit Application</button>
                            <button type="button" onClick={() => setShowForm(false)} className="w-full text-[#515B6F] font-bold py-2">Cancel</button>
                        </form>
                    </div>
                ) : (
                    <div className="bg-[#4540DB] p-10 space-y-10 shadow-2xl">
                         <div className="space-y-4">
                             <h3 className="text-3xl font-black text-white">Interested in this role?</h3>
                             <p className="text-white/70 font-medium">Be the next {job.title} at {job.company}!</p>
                         </div>
                         <button 
                            onClick={() => setShowForm(true)}
                            className="w-full bg-white text-[#4540DB] py-5 font-black text-lg hover:bg-gray-100 transition-all shadow-xl"
                         >
                            Apply Now
                         </button>
                         <p className="text-white/40 text-center text-sm font-medium">Join over 100+ other applicants</p>
                    </div>
                )}
            </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default JobDetailPage;
