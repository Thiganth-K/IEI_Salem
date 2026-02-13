
import React, { useState } from 'react';
import { EXECUTIVE_COMMITTEE, SUB_COMMITTEES } from '../constants';
import { Linkedin, Search, Filter } from 'lucide-react';

const Committee: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'executive' | 'sub'>('executive');
  const [search, setSearch] = useState('');

  const filteredEx = EXECUTIVE_COMMITTEE.filter(m => 
    m.name.toLowerCase().includes(search.toLowerCase()) || 
    m.division.toLowerCase().includes(search.toLowerCase())
  );

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

        {activeTab === 'executive' ? (
          <div className="space-y-16">
            {/* Top Leaders */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {filteredEx.filter(m => m.role === 'Chairman' || m.role === 'Secretary').map(member => (
                <div key={member.id} className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex group hover:scale-[1.02] transition-transform">
                  <div className="w-1/3 aspect-[3/4]">
                    <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
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

            {/* Other Members Grid */}
            <div>
              <h2 className="text-2xl font-bold text-gray-800 mb-8 border-l-4 border-iei-accent pl-4">Committee Members</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredEx.filter(m => m.role === 'Committee Member').map(member => (
                  <div key={member.id} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-lg transition-shadow group">
                    <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-gray-100 group-hover:border-iei-accent transition-colors">
                      <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                    </div>
                    <h4 className="font-bold text-iei-primary">{member.name}</h4>
                    <p className="text-gray-500 text-xs mt-1 mb-2">{member.designation}</p>
                    <div className="bg-gray-50 rounded py-1 px-2 inline-block">
                      <span className="text-[10px] text-gray-400 font-bold uppercase">{member.division}</span>
                    </div>
                    <div className="mt-4 pt-4 border-t border-gray-50 flex justify-center">
                      <Linkedin size={16} className="text-gray-300 hover:text-blue-500 cursor-pointer" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SUB_COMMITTEES.map((sub, i) => (
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
                        <p className="text-xs text-gray-400">{m.membershipNo}</p>
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
    </div>
  );
};

export default Committee;
