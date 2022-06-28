import Image from "next/image";
import React from "react";
import { AuthComponentType } from "../../AppTypes";

const AuthHOC = (ChildComponent: React.ComponentType, content:AuthComponentType) => {
  const WrappedComponent = () => {
    return (
      <div className="auth_wrapper">
        <div className="main_content">
          <h3>{ content.title }</h3>
          <div className="info">
            { content.message }
          </div>

          <div className="content">
            <ChildComponent />
          </div>
        </div>

        <div className="illustration">
          <Image
            src={"/illustrations/auth_illustrate.svg"}
            className="auth_illustrate"
            width="702"
            height="628"
          />
        </div>
      </div>
    );
  };

  return WrappedComponent ;
};

export default AuthHOC;
