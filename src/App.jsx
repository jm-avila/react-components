import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary, Header, RoutesSwitch } from "./components";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Header />
        <RoutesSwitch />
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
