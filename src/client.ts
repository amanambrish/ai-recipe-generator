import { UserProfile } from './models';

// Mock client
const client = {
  models: {
    UserProfile: {
      list: async (): Promise<{ data: UserProfile[] }> => {
        return {
          data: [
            { id: '1', email: 'amanambrish1234@gmail.com', name: 'User One' },
                    ],
        };
      },
    },
  },
};

export default client;
