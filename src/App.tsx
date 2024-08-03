import React, { useEffect, useState } from 'react';
import client from './client';
import { UserProfile } from './models';
import { Heading } from '@aws-amplify/ui-react';

const App: React.FC = () => {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);

  useEffect(() => {
    const fetchProfiles = async () => {
      const { data } = await client.models.UserProfile.list();
      setProfiles(data);
    };

    fetchProfiles();
  }, []);

  return (
    <div>
      {profiles.map((userprofile) => (
        <div key={userprofile.id || userprofile.email}>
          <Heading level={3}>{userprofile.email}</Heading>
        </div>
      ))}
    </div>
  );
};

export default App;
