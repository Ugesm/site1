'use client';

import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTelegram } from 'react-icons/fa';
import BureauMembers from '@/components/BureauMembers';
import { Section } from '@/data/sections';

interface SectionContentProps {
  section: Section;
}

export default function SectionContent({ section }: SectionContentProps) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Description de la section */}
      <section className="mb-16">
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">À propos de notre section</h2>
          <p className="text-lg text-gray-700 mb-6">{section.description}</p>
          <div className="flex items-center space-x-2 text-gray-600">
            <div className="bg-green-100 rounded-full p-2">
              <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <span>{section.studentCount} étudiants</span>
          </div>
        </div>
      </section>

      {/* Bureau Members */}
      {section.bureau && section.bureau.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Notre Bureau</h2>
          <BureauMembers members={section.bureau} />
        </section>
      )}

      {/* Universities */}
      {section.universities && section.universities.length > 0 && (
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Nos Universités</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {section.universities.map((university) => (
              <div
                key={university.name}
                className="bg-white rounded-xl shadow-lg p-6 transform transition duration-300 hover:scale-105"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-2">{university.name}</h3>
                <p className="text-gray-600 mb-4">{university.description}</p>
                <div className="flex items-start space-x-2 text-gray-600">
                  <FaMapMarkerAlt className="w-5 h-5 mt-1 text-green-600" />
                  <span>{university.location}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Contact Information */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Contactez-nous</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {section.address && (
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Adresse</h3>
                <p className="text-gray-700">{section.address}</p>
              </div>
            </div>
          )}
          {section.email && (
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${section.email}`} className="text-gray-700 hover:text-primary-600">
                  {section.email}
                </a>
              </div>
            </div>
          )}
          {section.phone && (
            <div className="flex items-start space-x-4">
              <FaPhone className="text-primary-600 text-2xl flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-gray-900 mb-2">Téléphone</h3>
                <a href={`tel:${section.phone}`} className="text-gray-700 hover:text-primary-600">
                  {section.phone}
                </a>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Social Media */}
      {section.socialMedia && (
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Suivez-nous</h2>
          <div className="flex space-x-6">
            {section.socialMedia.facebook && (
              <a href={section.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <FaFacebook className="text-3xl" />
              </a>
            )}
            {section.socialMedia.instagram && (
              <a href={section.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <FaInstagram className="text-3xl" />
              </a>
            )}
            {section.socialMedia.twitter && (
              <a href={section.socialMedia.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <FaTwitter className="text-3xl" />
              </a>
            )}
            {section.socialMedia.linkedin && (
              <a href={section.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <FaLinkedin className="text-3xl" />
              </a>
            )}
            {section.socialMedia.telegram && (
              <a href={section.socialMedia.telegram} target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-primary-600">
                <FaTelegram className="text-3xl" />
              </a>
            )}
          </div>
        </section>
      )}
    </div>
  );
}
