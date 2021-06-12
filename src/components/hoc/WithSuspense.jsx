import React, {Suspense} from 'react';

const WithSuspense  =(Component) => {
   return <Suspense fallback={() => {
      <div>Loading...</div>
   }} >
      <Component />
   </Suspense>
}

export default WithSuspense;