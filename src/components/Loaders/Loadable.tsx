import { ElementType, Suspense } from 'react';

// project import

// ==============================|| LOADABLE - LAZY LOADING ||============================== //

const Loadable = (Component:ElementType) => () => (
  <Suspense fallback={<h1>Loading...</h1>}>
    <Component />
  </Suspense>
);

export default Loadable;
