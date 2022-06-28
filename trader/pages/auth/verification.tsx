import React from "react";
import { AuthComponentType } from "../../AppTypes";
import AuthHOC from "../../components/Hoc/Auth";

interface IProps {}

const Verification: React.FC<IProps> = () => {
  return (
    <React.Fragment>
      <form>
        <div className="form_wrapper">
          <label htmlFor="email">6 digit code</label>
          <input type="text" id="email" />
        </div>

        <div className="form_wrapper">
          <input
            type="submit"
            value="Verify Account"
            className="btn"
            id="password"
          />
        </div>
      </form>
      <p className="btn_text text_center mg-2">Resend Verification Code</p>
    </React.Fragment>
  );
};

const messages: AuthComponentType = {
  title: "Enter verification code",
  message: (
    <div>
      A verification code was send to <br /> <span className="btn_text">johndoe@gmail.com</span>.
    </div>
  ),
};
export default AuthHOC(Verification, messages);
