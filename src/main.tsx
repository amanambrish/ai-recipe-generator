import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { AmplifyProvider, Authenticator } from "@aws-amplify/ui-react";
import awsExports from './aws-exports';
import { Amplify } from 'aws-amplify';

Amplify.configure(awsExports);

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <AmplifyProvider>
        <Authenticator>
          <App />
        </Authenticator>
      </AmplifyProvider>
    </React.StrictMode>
  );
} else {
  console.error("Root element not found");
}
