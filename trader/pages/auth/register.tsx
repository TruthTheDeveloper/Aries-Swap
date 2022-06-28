import Image from "next/image";
import { BsEyeFill } from "react-icons/bs";
import { AuthComponentType } from "../../AppTypes";
import AuthHOC from "../../components/Hoc/Auth";

interface IProps {}

const Register: React.FC<IProps> = () => {
  return (
    <form>
      <div className="form_wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>

      <div className="form_wrapper">
        <label htmlFor="email">Email</label>
        <input type="text" id="email" />
      </div>

      <div className="form_wrapper">
        <label htmlFor="phone_number">Phone Number</label>
        <input type="text" id="phone_number" />
      </div>

      <div className="form_wrapper">
        <label htmlFor="password">Password</label>
        <input type="text" id="password" />
        <div className="see_password">
          <BsEyeFill />
        </div>
      </div>

      <div className="form_wrapper">
        <input type="submit" className="btn" id="password" />
      </div>
    </form>
  );
};


const messages: AuthComponentType ={
    title:"Create an Account",
    message:<div>Fill in the space to join the payvbut <br /> create account to continue.</div>
}
export default AuthHOC(Register, messages);
