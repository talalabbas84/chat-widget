import * as FlexWebChat from '@twilio/flex-webchat-ui';
import React, { useEffect, useState } from 'react';

const App = ({ configuration }) => {
  const [manager, setManager] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    FlexWebChat.Manager.create(configuration)
      .then(manager => {
        // get the first channel from the object
        console.log('manager', manager);
        const channel = manager.store.getState().flex.chat.channels;
        const channelsArray = Object.values(channel);
        

        console.log('channel', channelsArray);

        setManager(manager);
      })
      .catch(error => {
        setError(error);
      });
  }, [manager]);

  if (manager) {
    return (
      <FlexWebChat.ContextProvider manager={manager}>
        <FlexWebChat.RootContainer />
      </FlexWebChat.ContextProvider>
    );
  }

  if (error) {
    console.error('Failed to initialize Flex Web Chat', error);
  }

  return null;
};

export default App;
