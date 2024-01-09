import React, { FC, Suspense, lazy } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Error404 } from "./component/Error404";
import { FallbackView } from "./component/FallbackView";

const AppRouter: FC = () => {

  const Dashboard = lazy(() => import('../screens/Frame/Frame'))

  return (
    <Suspense fallback={<FallbackView />}>
    <Routes>
        <Route path="/" element={<Dashboard />} /> 
      <Route path="*" element={<Error404 />} />
    </Routes>
    </Suspense>
  );
};

export { AppRouter };
