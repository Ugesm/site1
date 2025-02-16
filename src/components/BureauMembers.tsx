import Image from 'next/image';
import { FaEnvelope, FaPhone, FaUser } from 'react-icons/fa';
import { BureauMember } from '@/data/sections';

interface BureauMembersProps {
  members: BureauMember[];
}

export default function BureauMembers({ members }: BureauMembersProps) {
  const mainMembers = members.filter(member => member.isMainMember);
  const otherMembers = members.filter(member => !member.isMainMember);

  return (
    <div className="space-y-12">
      {/* Membres principaux avec photos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {mainMembers.map((member) => (
          <div
            key={member.name}
            className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="relative h-64 w-full bg-gray-100">
              {member.image ? (
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <FaUser className="w-20 h-20 text-gray-400" />
                </div>
              )}
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <div className="space-y-2">
                {member.email && (
                  <div className="flex items-center text-gray-600">
                    <FaEnvelope className="w-4 h-4 mr-2" />
                    <a href={`mailto:${member.email}`} className="hover:text-blue-600">
                      {member.email}
                    </a>
                  </div>
                )}
                {member.phone && (
                  <div className="flex items-center text-gray-600">
                    <FaPhone className="w-4 h-4 mr-2" />
                    <a href={`tel:${member.phone}`} className="hover:text-blue-600">
                      {member.phone}
                    </a>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Autres membres */}
      {otherMembers.length > 0 && (
        <div>
          <h3 className="text-2xl font-semibold text-gray-900 mb-6">Autres membres du bureau</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherMembers.map((member) => (
              <div
                key={member.name}
                className="bg-white rounded-lg shadow p-6 transform transition duration-300 hover:scale-105"
              >
                <h4 className="text-lg font-medium text-gray-900 mb-2">{member.name}</h4>
                <p className="text-gray-600">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
