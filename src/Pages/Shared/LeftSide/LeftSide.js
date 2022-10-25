import React from "react";
import { Button } from "react-bootstrap";

const LeftSide = () => {
  return (
    <div>
      <div className="bg-dark mt-2 mb-2 rounded-2" style={{ height: "400px" }}>
        <h3 className="text-white">This is left side</h3>
        <div>
          <Button variant="outline-primary d-block text-white mb-2">
            Login with Google
          </Button>
          <Button variant="outline-light">Login with Github</Button>
        </div>
      </div>
    </div>
  );
};

export default LeftSide;
