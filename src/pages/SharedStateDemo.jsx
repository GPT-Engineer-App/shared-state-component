import React from 'react';
import { SharedStateProvider, useSharedState } from '@/components/SharedStateProvider';
import { Button } from '@/components/ui/button';

const DisplayComponent = () => {
  const { sharedState } = useSharedState();
  return <div>Shared State: {sharedState}</div>;
};

const UpdateComponent = () => {
  const { setSharedState } = useSharedState();
  return <Button onClick={() => setSharedState("Updated State")}>Update State</Button>;
};

const SharedStateDemo = () => {
  return (
    <SharedStateProvider>
      <div className="space-y-4">
        <h1 className="text-2xl font-bold">Shared State Demo</h1>
        <DisplayComponent />
        <UpdateComponent />
      </div>
    </SharedStateProvider>
  );
};

export default SharedStateDemo;