import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Plus, Trash2, LayoutDashboard, Briefcase, Users, Pencil } from 'lucide-react';
import { companyIcons } from '../components/JobCard';

const AdminPage = () => {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddForm, setShowAddForm] = useState(false);
    const [activeTab, setActiveTab] = useState('Job Listings');
    const [editingJobId, setEditingJobId] = useState(null);
    const [applications, setApplications] = useState([]);
    const [appsLoading, setAppsLoading] = useState(false);
    const [newJob, setNewJob] = useState({
        title: '',
        company: '',
        location: '',
        category: 'Technology',
        description: '',
        type: 'Full Time',
        tags: '',
        companyLogo: ''
    });

    useEffect(() => {
        fetchJobs();
    }, []);

    useEffect(() => {
        if (activeTab === 'Applicants') {
            fetchApplications();
        }
    }, [activeTab]);

    const fetchJobs = async () => {
        try {
            const res = await axios.get('http://localhost:5000/api/jobs');
            setJobs(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    const fetchApplications = async () => {
        setAppsLoading(true);
        try {
            const res = await axios.get('http://localhost:5000/api/applications');
            setApplications(res.data);
        } catch (err) {
            console.error(err);
        } finally {
            setAppsLoading(false);
        }
    };

    const handleDeleteApplication = async (id) => {
        if (!window.confirm('Are you sure you want to delete this application?')) return;
        try {
            await axios.delete(`http://localhost:5000/api/applications/${id}`);
            setApplications(applications.filter(app => app._id !== id));
        } catch (err) {
            console.error(err);
            alert('Error deleting application');
        }
    };
    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this job listing?')) return;
        try {
            await axios.delete(`http://localhost:5000/api/jobs/${id}`);
            setJobs(jobs.filter(job => job._id !== id));
        } catch (err) {
            console.error(err);
            alert('Error deleting job');
        }
    };

    const handleEditClick = (job) => {
        setEditingJobId(job._id);
        setNewJob({
            title: job.title,
            company: job.company,
            location: job.location,
            category: job.category,
            description: job.description,
            type: job.type || 'Full Time',
            tags: job.tags.join(', '),
            companyLogo: job.companyLogo || ''
        });
        setShowAddForm(true);
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const jobData = { ...newJob, tags: newJob.tags.split(',').map(t => t.trim()) };
            
            if (editingJobId) {
                await axios.put(`http://localhost:5000/api/jobs/${editingJobId}`, jobData);
            } else {
                await axios.post('http://localhost:5000/api/jobs', jobData);
            }
            
            setShowAddForm(false);
            setEditingJobId(null);
            fetchJobs();
            setNewJob({
                title: '', company: '', location: '', category: 'Technology',
                description: '', type: 'Full Time', tags: '', companyLogo: ''
            });
        } catch (err) {
            console.error(err);
            alert('Error saving job');
        }
    };

    return (
        <div className="min-h-screen bg-[#F8F8FD]">
            <Navbar />
            
            <div className="flex">
                {/* Sidebar */}
                <div className="w-80 bg-white min-h-[calc(100vh-80px)] border-r border-gray-100 p-8 space-y-12 hidden lg:block">
                    <div className="space-y-4">
                        <p className="text-xs font-black text-[#515B6F] opacity-40 uppercase tracking-widest">General</p>
                        <nav className="space-y-2">
                             <button 
                                onClick={() => setActiveTab('Dashboard')}
                                className={`w-full flex items-center gap-4 p-4 font-bold transition-all ${activeTab === 'Dashboard' ? 'bg-[#4540DB]/5 text-[#4540DB] border-r-4 border-[#4540DB]' : 'text-[#515B6F] hover:bg-gray-50'}`}
                             >
                                <LayoutDashboard size={20} /> Dashboard
                             </button>
                             <button 
                                onClick={() => setActiveTab('Job Listings')}
                                className={`w-full flex items-center gap-4 p-4 font-bold transition-all ${activeTab === 'Job Listings' ? 'bg-[#4540DB]/5 text-[#4540DB] border-r-4 border-[#4540DB]' : 'text-[#515B6F] hover:bg-gray-50'}`}
                             >
                                <Briefcase size={20} /> Job Listings
                             </button>
                             <button 
                                onClick={() => setActiveTab('Applicants')}
                                className={`w-full flex items-center gap-4 p-4 font-bold transition-all ${activeTab === 'Applicants' ? 'bg-[#4540DB]/5 text-[#4540DB] border-r-4 border-[#4540DB]' : 'text-[#515B6F] hover:bg-gray-50'}`}
                             >
                                <Users size={20} /> Applicants
                             </button>
                        </nav>
                    </div>
                </div>

                {/* Main Content */}
                <main className="flex-1 p-8 md:p-12 space-y-12">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                        <div>
                             <h1 className="text-4xl font-black text-[#202430]">Job Postings</h1>
                             <p className="text-[#515B6F] font-medium opacity-70">Manage your company's active job opportunities</p>
                        </div>
                        <button 
                            onClick={() => setShowAddForm(true)}
                            className="bg-[#4540DB] text-white px-8 py-4 font-black flex items-center gap-3 hover:bg-opacity-90 shadow-lg shadow-[#4540DB]/20"
                        >
                            <Plus size={20} /> Post complex job
                        </button>
                    </div>

                    {activeTab === 'Job Listings' ? (
                        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider">Job Title</th>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider">Date Posted</th>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider">Category</th>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {loading ? (
                                        <tr><td colSpan="4" className="p-12 text-center font-bold text-[#515B6F]">Loading jobs...</td></tr>
                                    ) : jobs.length === 0 ? (
                                        <tr><td colSpan="4" className="p-12 text-center font-bold text-[#515B6F]">No jobs found.</td></tr>
                                    ) : (
                                        jobs.map(job => (
                                            <tr key={job._id} className="hover:bg-gray-50 transition-all group">
                                                <td className="p-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="w-10 h-10 flex items-center justify-center p-2 border border-gray-100 bg-white rounded-lg">
                                                            {companyIcons[job.company] ? React.createElement(companyIcons[job.company]) : <div className="text-xl font-bold">{job.company[0]}</div>}
                                                        </div>
                                                        <div className="space-y-1">
                                                            <p className="font-black text-[#202430]">{job.title}</p>
                                                            <p className="text-xs text-[#515B6F] font-bold opacity-60">{job.type} • {job.company}</p>
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-6 text-sm font-bold text-[#515B6F]">
                                                    {new Date(job.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="p-6">
                                                    <span className="px-5 py-1 text-xs font-black bg-[#4540DB]/5 text-[#4540DB] border border-[#4540DB]/20 rounded-full">
                                                        {job.category}
                                                    </span>
                                                </td>
                                                <td className="p-6 text-right flex justify-end gap-2">
                                                    <button 
                                                        onClick={() => handleEditClick(job)}
                                                        className="text-gray-300 hover:text-[#4540DB] transition-colors p-2"
                                                        title="Edit Job"
                                                    >
                                                        <Pencil size={20} />
                                                    </button>
                                                    <button 
                                                        onClick={() => handleDelete(job._id)}
                                                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                                        title="Delete Job"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : activeTab === 'Applicants' ? (
                        <div className="bg-white border border-gray-100 shadow-sm overflow-hidden">
                            <table className="w-full text-left">
                                <thead className="bg-gray-50 border-b border-gray-100">
                                    <tr>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider">Applicant Name</th>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider">Applied Job</th>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider">Date Applied</th>
                                        <th className="p-6 text-sm font-black text-[#515B6F] uppercase tracking-wider text-right">Actions</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-gray-100">
                                    {appsLoading ? (
                                        <tr><td colSpan="4" className="p-12 text-center font-bold text-[#515B6F]">Loading applications...</td></tr>
                                    ) : applications.length === 0 ? (
                                        <tr><td colSpan="4" className="p-12 text-center font-bold text-[#515B6F]">No applications received yet.</td></tr>
                                    ) : (
                                        applications.map(app => (
                                            <tr key={app._id} className="hover:bg-gray-50 transition-all group">
                                                <td className="p-6">
                                                    <div className="space-y-1">
                                                        <p className="font-black text-[#202430]">{app.name}</p>
                                                        <p className="text-xs text-[#515B6F] font-bold opacity-60">{app.email}</p>
                                                    </div>
                                                </td>
                                                <td className="p-6">
                                                    <div className="space-y-1">
                                                        <p className="font-bold text-[#202430]">{app.job_id?.title || 'Unknown Job'}</p>
                                                        <p className="text-xs text-[#515B6F] opacity-60">{app.job_id?.company || '-'}</p>
                                                    </div>
                                                </td>
                                                <td className="p-6 text-sm font-bold text-[#515B6F]">
                                                    {new Date(app.created_at).toLocaleDateString()}
                                                </td>
                                                <td className="p-6 text-right flex justify-end gap-2">
                                                    <a 
                                                        href={app.resume_link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="bg-[#4540DB]/5 text-[#4540DB] px-4 py-2 rounded-lg text-xs font-black hover:bg-[#4540DB] hover:text-white transition-all flex items-center gap-2"
                                                    >
                                                        View Resume
                                                    </a>
                                                    <button 
                                                        onClick={() => handleDeleteApplication(app._id)}
                                                        className="text-gray-300 hover:text-red-500 transition-colors p-2"
                                                        title="Delete Application"
                                                    >
                                                        <Trash2 size={20} />
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                    )}
                                </tbody>
                            </table>
                        </div>
                    ) : (
                        <div className="bg-white border border-gray-100 border-dashed rounded-3xl p-32 flex flex-col items-center justify-center text-center space-y-4">
                             <div className="w-24 h-24 bg-gray-50 flex items-center justify-center rounded-2xl text-gray-200">
                                <LayoutDashboard size={48} />
                             </div>
                             <div className="space-y-2">
                                <h3 className="text-3xl font-black text-[#202430] tracking-tight">{activeTab} Coming Soon</h3>
                                <p className="text-[#515B6F] font-medium max-w-sm text-lg opacity-70">We're building the management engine for your {activeTab.toLowerCase()} insights.</p>
                             </div>
                        </div>
                    )}
                </main>
            </div>

            {/* Add Job Modal */}
            {showAddForm && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#202430]/60 backdrop-blur-sm animate-fade-in">
                    <div className="bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto p-10 md:p-16 space-y-12 shadow-2xl animate-fade-up">
                        <div className="flex justify-between items-center">
                            <h2 className="text-3xl font-black text-[#202430]">{editingJobId ? 'Edit job listing' : 'Post new job'}</h2>
                             <button onClick={() => { setShowAddForm(false); setEditingJobId(null); }} className="text-gray-400 hover:text-[#202430] transition-colors font-bold uppercase tracking-widest text-xs">Close</button>
                        </div>
                        
                        <form onSubmit={handleFormSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Job Title</label>
                                <input 
                                    required
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold"
                                    placeholder="e.g. Senior Software Engineer"
                                    value={newJob.title}
                                    onChange={(e) => setNewJob({...newJob, title: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Company Name</label>
                                <input 
                                    required
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold"
                                    placeholder="e.g. Google"
                                    value={newJob.company}
                                    onChange={(e) => setNewJob({...newJob, company: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Location</label>
                                <input 
                                    required
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold"
                                    placeholder="e.g. Remote / New York, USA"
                                    value={newJob.location}
                                    onChange={(e) => setNewJob({...newJob, location: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Category</label>
                                <select 
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold appearance-none cursor-pointer"
                                    value={newJob.category}
                                    onChange={(e) => setNewJob({...newJob, category: e.target.value})}
                                >
                                    {['Design', 'Sales', 'Marketing', 'Finance', 'Technology', 'Engineering', 'Business', 'Human Resource'].map(cat => (
                                        <option key={cat} value={cat}>{cat}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="space-y-3 md:col-span-2">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Description</label>
                                <textarea 
                                    required
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold h-32"
                                    placeholder="Full details about the role..."
                                    value={newJob.description}
                                    onChange={(e) => setNewJob({...newJob, description: e.target.value})}
                                ></textarea>
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Tags (comma separated)</label>
                                <input 
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold"
                                    placeholder="e.g. React, Node, SQL"
                                    value={newJob.tags}
                                    onChange={(e) => setNewJob({...newJob, tags: e.target.value})}
                                />
                            </div>
                            <div className="space-y-3">
                                <label className="text-xs font-black text-[#515B6F] uppercase tracking-widest">Company Logo URL</label>
                                <input 
                                    className="w-full p-4 bg-[#F8F8FD] border border-gray-100 outline-none font-bold"
                                    placeholder="e.g. https://domain.com/logo.png"
                                    value={newJob.companyLogo}
                                    onChange={(e) => setNewJob({...newJob, companyLogo: e.target.value})}
                                />
                            </div>
                            <div className="md:col-span-2 pt-8">
                                <button type="submit" className="w-full bg-[#4540DB] text-white py-5 font-black text-xl hover:bg-opacity-90 shadow-2xl shadow-[#4540DB]/30">
                                    {editingJobId ? 'Save changes' : 'Publish Job Casting'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default AdminPage;
