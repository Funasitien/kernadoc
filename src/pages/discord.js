import React from 'react';


export default function Home() {
  return (
    <BrowserOnly>
      {() => window.location.replace('https://codefrontend.com')}
    </BrowserOnly>
  );
}