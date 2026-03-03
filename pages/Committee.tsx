import React, { useState } from 'react';
import { Linkedin, Search } from 'lucide-react';

// ---------------- EXECUTIVE COMMITTEE ----------------
export const EXECUTIVE_COMMITTEE = [
  { id: 1, role: "Chairman", name: "Er. S. LOGANATHAN, FIE", division: "Civil", membershipType: "FIE", designation: "", imageUrl: "/assets/Chairman.jpeg", linkedIn: "" },
  { id: 2, role: "Secretary", name: "Dr. R. SATISH KUMAR, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "/assets/secratary.jpeg", linkedIn: "" },
  { id: 3, role: "Committee Member", name: "Dr. M. LOGESH KUMAR, MIE", division: "Agricultural", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 4, role: "Committee Member", name: "Er. J. UMANAMBI, MIE", division: "Architectural", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 5, role: "Committee Member", name: "Er. S. HARI DARWIN, AMIE", division: "Aerospace", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 6, role: "Committee Member", name: "Er. C. SIVAKUMAR, MIE", division: "Chemical", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 7, role: "Committee Member", name: "Dr. H. LILLY BEAULAH, FIE", division: "Computer", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 8, role: "Committee Member", name: "Er. V. KANIAN POONKUNDRAN, FIE", division: "Civil", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 9, role: "Committee Member", name: "Dr. R. LAVANYA, MIE", division: "Civil", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 10, role: "Committee Member", name: "Dr. S. SASIKUMAR, MIE", division: "Civil", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 11, role: "Committee Member", name: "Dr. V. DURAISAMY, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 12, role: "Committee Member", name: "Er. A. SELVA KUMAR, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 13, role: "Committee Member", name: "Er. D. BALASUBRAMANIAM, MIE", division: "Electrical", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 14, role: "Committee Member", name: "Dr. G. MAHESWARAN, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 15, role: "Committee Member", name: "Dr. M. MADHESWARAN, FIE", division: "Electronics and Telecommunication", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 16, role: "Committee Member", name: "Dr. K. SENATHIPATHI, FIE", division: "Electronics and Telecommunication", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 17, role: "Committee Member", name: "Dr. A. KUMARAVEL, FIE", division: "Mechanical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 18, role: "Committee Member", name: "Dr. S. DURAISIVAM, AMIE", division: "Mechanical", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 19, role: "Committee Member", name: "Er. M. KAMAL PRIYA, MIE", division: "Metallurgical and Materials", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 20, role: "Committee Member", name: "Er. D. RAJAKUMAR, AMIE", division: "Mining", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 21, role: "Committee Member", name: "Dr. C. PRABHU, AMIE", division: "Production", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 22, role: "Committee Member", name: "Er. B. MUNUSAMY, AMIE", division: "Textile", membershipType: "AMIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 23, role: "Co Opted Member", name: "Dr. K. VIDHYA, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 24, role: "Co Opted Member", name: "Dr. B. PRABU, MIE", division: "Civil", membershipType: "MIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 25, role: "Imm. Past Chairman", name: "Dr. K. THANGARAJ, FIE", division: "Computer", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 26, role: "Imm. Past Hon. Secretary", name: "Dr. C. DHAVAMANI, FIE", division: "Aerospace", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 27, role: "Chairman, TNSC", name: "Dr. D. ELANGO, FIE", division: "Civil", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 28, role: "Hon. Secretary, TNSC", name: "Dr. J. BALAMURUGAN, FIE", division: "Electrical", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 29, role: "Council Member, TNSC", name: "Dr. V. KARTHIKEYAN, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 30, role: "Committee Member, TNSC", name: "Er. N. SENTHIL KUMAR, FIE", division: "Environmental", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
  { id: 31, role: "Committee Member, TNSC", name: "Er. S. NATARAJAN, FIE", division: "Metallurgical and Materials", membershipType: "FIE", designation: "", imageUrl: "", linkedIn: "" },
];

// ---------------- SUB COMMITTEES ----------------

export const SUB_COMMITTEES = [
  {
    title: "Finance Sub Committee",
    members: [
      { name: "Er. S. LOGANATHAN, FIE", position: "Chairman" },
      { name: "Dr. R. SATISH KUMAR, FIE", position: "Convener" },
      { name: "Er. N. ARUMUGHAM, MIE", position: "Member" },
      { name: "Dr. R. LAVANYA, MIE", position: "Member" },
    ],
  },
  {
    title: "Membership Drive Sub Committee",
    members: [
      { name: "Dr. K. SENATHIPATHI, FIE", position: "Chairman" },
      { name: "Er. B. MUNUSAMY, AMIE", position: "Convener" },
      { name: "Er. A. SELVA KUMAR, FIE", position: "Member" },
      { name: "Dr. S. DURAISIVAM, MIE", position: "Member" },
    ],
  },
  {
    title: "Technical Sub Committee",
    members: [
      { name: "Dr. A. KUMARAVEL, FIE", position: "Chairman" },
      { name: "Er. S. NATARAJAN, FIE", position: "Convener" },
      { name: "Er. D. BALASUBRAMANIAM, MIE", position: "Member" },
      { name: "Er. C. SIVAKUMAR, MIE", position: "Member" },
    ],
  },
  {
    title: "Building Sub Committee",
    members: [
      { name: "Er. V. KANIAN POONKUNDRAN, MIE", position: "Chairman" },
      { name: "Er. N. SENTHIL KUMAR, FIE", position: "Convener" },
      { name: "Er. R. VIJAYAKUMAR, FIE", position: "Member" },
      { name: "Dr. B. PRABU, MIE", position: "Member" },
    ],
  },
  {
    title: "Website Development & Newsletter Sub Committee",
    members: [
      { name: "Dr. K. THANGARAJ, FIE", position: "Chairman" },
      { name: "Dr. M. LOGESH KUMAR, MIE", position: "Convener" },
      { name: "Dr. C. PRABHU, AMIE", position: "Member" },
      { name: "Dr. S. SASIKUMAR, MIE", position: "Member" },
    ],
  },
  {
    title: "Technician Chapter & Student Chapter Sub Committee",
    members: [
      { name: "Dr. M. MADHESWARAN, FIE", position: "Chairman" },
      { name: "Dr. G. MAHESWARAN, FIE", position: "Convener" },
      { name: "Dr. V. DURAISAMY, FIE", position: "Member" },
      { name: "Er. D. RAJAKUMAR, AMIE", position: "Member" },
    ],
  },
  {
    title: "Women Engineer Cell Sub Committee",
    members: [
      { name: "Dr. C. DHAVAMANI, FIE", position: "Chairman" },
      { name: "Dr. H. LILLY BEAULAH, FIE", position: "Convener" },
      { name: "Er. J. UMANAMBI, MIE", position: "Member" },
      { name: "Dr. K. VIDHYA, FIE", position: "Member" },
    ],
  },
];


  const Committee: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'sub'>('executive');
  const [search, setSearch] = useState('');

  const searchLower = search.toLowerCase();
  const filteredEx = EXECUTIVE_COMMITTEE.filter(m => 
    m.name.toLowerCase().includes(searchLower) || 
    m.division.toLowerCase().includes(searchLower)
  );

  // Filter subcommittees and their members based on search
  const filteredSubCommittees = SUB_COMMITTEES.map(sub => {
    const filteredMembers = sub.members.filter(m =>
      m.name.toLowerCase().includes(searchLower)
    );
    return { ...sub, members: filteredMembers };
  }).filter(sub => sub.members.length > 0 || search === '');

  return (
    <div className="bg-gray-50 min-h-screen">
      <header className="bg-iei-primary py-24 text-center text-white relative">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div className="relative z-10">
          <h1 className="text-5xl font-bold mb-4">Leadership & Committee</h1>
          <p className="text-iei-accent font-medium text-lg">Guiding IEI Salem Local Centre • Session 2025–2027</p>
        </div>
      </header>
    
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Navigation Tabs & Filter */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6">
          <div className="bg-white p-1 rounded-full shadow-md flex">
            <button 
              onClick={() => setActiveTab('executive')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'executive' ? 'bg-iei-primary text-white' : 'text-gray-500 hover:text-iei-primary'}`}
            >
              Executive Committee
            </button>
            <button 
              onClick={() => setActiveTab('sub')}
              className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${activeTab === 'sub' ? 'bg-iei-primary text-white' : 'text-gray-500 hover:text-iei-primary'}`}
            >
              Sub Committees
            </button>
          </div>
      
          <div className="relative w-full max-w-sm">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search by name or division..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:outline-none focus:ring-2 focus:ring-iei-accent/30 focus:border-iei-accent"
            />
          </div>
        </div>
      </div>
    
        {activeTab === 'executive' ? (
  <div className="space-y-16">
    {/* Executive Leaders */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      {filteredEx.filter(m => m.role === 'Chairman' || m.role === 'Secretary').map(member => (
        <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex group hover:scale-[1.02] transition-transform">
          <div className="w-1/3 aspect-[3/4]">
            <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover transition-all duration-500" />
          </div>
          <div className="w-2/3 p-6 flex flex-col justify-center">
            <span className="text-iei-accent font-bold text-xs uppercase tracking-widest">{member.role}</span>
            <h3 className="text-xl font-bold text-iei-primary mt-1 mb-2">{member.name}</h3>
            <p className="text-gray-500 text-sm font-medium mb-1">{member.designation}</p>
            <p className="text-gray-400 text-xs mb-4">{member.division} • {member.membershipType}</p>
            <a href={member.linkedIn || '#'} className="text-gray-300 hover:text-blue-600 transition-colors">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
        
      ))}
    </div>

    {/* Committee Members */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Committee Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEx.filter(m => m.role === 'Committee Member').map(member => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
            <h4 className="font-bold text-iei-primary">{member.name}</h4>
            <p className="text-gray-500 text-xs mt-1 mb-2">{member.designation}</p>
            <div className="bg-gray-50 rounded py-1 px-2 inline-block">
              <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Co‑Opted Members */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Co‑Opted Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEx.filter(m => m.role === 'Co Opted Member').map(member => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
            <h4 className="font-bold text-iei-primary">{member.name}</h4>
            <p className="text-gray-500 text-xs mt-1 mb-2">{member.designation}</p>
            <div className="bg-gray-50 rounded py-1 px-2 inline-block">
              <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Ex‑Officio Members */}
    <div>
      <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Ex‑Officio Members</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredEx.filter(m => m.role.includes('TNSC') || m.role.includes('Imm.')).map(member => (
          <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
            <h4 className="font-bold text-iei-primary">{member.name}</h4>
            <p className="text-gray-500 text-xs mt-1 mb-2">{member.role}</p>
            <div className="bg-gray-50 rounded py-1 px-2 inline-block">
              <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
) : (
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
    {filteredSubCommittees.map((sub, i) => (
      <div key={i} className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
        <h3 className="text-xl font-bold text-iei-primary mb-6 flex items-center gap-3">
          <div className="w-2 h-8 bg-iei-accent rounded-full"></div>
          {sub.title}
        </h3>
        <div className="space-y-4">
          {sub.members.map((m, idx) => (
            <div key={idx} className="flex justify-between items-center p-3 rounded-xl bg-gray-50 border border-gray-100">
              <div>
                <p className="font-bold text-gray-800">{m.name}</p>
              </div>
              <span className={`text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-tighter ${
                m.position === 'Chairman' ? 'bg-iei-primary text-white' : 
                m.position === 'Convener' ? 'bg-iei-accent text-white' : 
                'bg-gray-200 text-gray-600'
              }`}>
                {m.position}
              </span>
            </div>
          ))}
        </div>
      </div>
    ))}
  </div>
)}
</div>
);
  };
export default Committee;
