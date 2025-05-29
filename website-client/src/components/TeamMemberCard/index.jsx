import React, {useEffect, useState} from 'react';
import axios from 'axios';

export default function TeamMemberCard({ id }) {
  const [member, setMember] = useState(null);

  useEffect(() => {
    axios.get(`/api/team-members/${id}`).then(r => setMember(r.data));
  }, [id]);

  if (!member) return <div>Loading…</div>;

  return (
    <div className="card">
      <img src={member.photo_url || '/placeholder.png'} alt={member.name} />
      <h3>{member.name}</h3>
    </div>
  );
}
