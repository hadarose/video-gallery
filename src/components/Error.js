import React from "react";
import { Alert } from "react-bootstrap";

export const Error = ({ error }) => (
  <Alert variant="danger" className="w-50 text-center">
    {error}
  </Alert>
);
export default Error;
