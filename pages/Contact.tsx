
import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {


  return (
    
    <div className="bg-white min-h-screen">
      <header className="bg-iei-primary py-24 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Connect with IEI Salem</h1>
        <p className="text-gray-400 max-w-xl mx-auto">Have queries about membership, technical activities, or chapter collaborations? We're here to help.</p>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-3xl font-bold text-iei-primary mb-12">Contact Information</h2>
          <div className="space-y-10">
            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-iei-accent/10 rounded-2xl flex items-center justify-center text-iei-accent">
                <MapPin size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Registered Address</h4>
                <p className="text-gray-500 leading-relaxed">
                  The Institution of Engineers (India)-Salem Local Centre,
                  <br />
                  3rd Floor, SPC Bhawan, No: 104/7, Manivannan Road,
                  <br />
                  Opp. to Salem New Bus Stand, Salem - 636 004
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-iei-accent/10 rounded-2xl flex items-center justify-center text-iei-accent">
                <Phone size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Contact Numbers</h4>
                <p className="text-gray-500">+91 427 244 0405</p>
                <p className="text-gray-500">+91 94432 24404 (Hon. Secretary)</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-iei-accent/10 rounded-2xl flex items-center justify-center text-iei-accent">
                <Mail size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Email Correspondence</h4>
                <p className="text-gray-500">ieisalemlc@gmail.com</p>
                <p className="text-gray-500">salemlc@ieindia.org</p>
              </div>
            </div>

            <div className="flex gap-6">
              <div className="shrink-0 w-14 h-14 bg-iei-accent/10 rounded-2xl flex items-center justify-center text-iei-accent">
                <Clock size={24} />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-1">Office Hours</h4>
                <p className="text-gray-500">Mon - Fri: 10:00 AM - 05:30 PM</p>
                <p className="text-gray-500">Sat: 10:00 AM - 01:30 PM</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl overflow-hidden shadow-2xl h-[400px] border border-gray-100 mb-8">
            <iframe 
              src="https://maps.google.com/maps?q=Salem%20New%20Bus%20Stand,%20Salem,%20Tamil%20Nadu&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="bg-iei-accent/5 p-8 rounded-2xl border border-iei-accent/10">
            <h4 className="font-bold text-iei-primary mb-2">Getting Here</h4>
            <p className="text-sm text-gray-600">
              The centre is conveniently located near SPC Bhawan, opposite to Salem New Bus Stand, easily accessible by all major city buses.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
