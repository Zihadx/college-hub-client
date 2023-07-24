import { useContext } from "react";
import google from "../../../assets/Social/google.png";
import { AuthContext } from "../../../Providers/AuthProviders";


const SocialLogin = () => {
  const { googleSign } = useContext(AuthContext);
  const handleGoogleSignIn = () => {
    googleSign()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div className="divider">OR</div>
      <div className="flex justify-center items-center gap-3 mb-4">
        <button
          onClick={handleGoogleSignIn}
          className="flex font-bold bg-slate-200 px-4 py-2 justify-center items-center rounded-sm"
        >
         Continue with <img className="h-6 w-6 ms-4" src={google} alt="" />
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;