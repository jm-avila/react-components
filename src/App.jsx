import React from "react";
import { ErrorBoundary, Header } from "./components";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <Header />
      </ErrorBoundary>
    </div>
  );
}

export default App;
