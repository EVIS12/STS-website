import React from 'react';
import { PropagateLoader } from 'react-spinners';

export default function Loader() {
  return (
    <div className="h-screen w-full grid place-content-center">
      <PropagateLoader color="#4d98cf" />
    </div>
  );
}
