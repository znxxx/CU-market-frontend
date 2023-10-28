import React from 'react';
import Image from 'next/image';

function Loading() {
  return (
    <div className="h-screen flex flex-col justify-center items-center -mt-32">
      <div id="breathing-button" className="relative w-48 h-48 mb-2">
        <Image
          src="/images/Cu-blackmarket-logo.svg"
          width={195}
          height={115}
          className="static"
        />
      </div>
    </div>
  );
}

export default Loading;
