import {SignatureProps} from "./App";
import TwitterLogo from "./assets/twitter.png";
import LinkedInLogo from "./assets/linkedin.png";
import FacebookLogo from "./assets/facebook.png";
import mainLogo from "./assets/Logo.png";


const Signature = (props: SignatureProps) => {
    return (
        <table className={"signature"}>
            <tbody>
            <tr>
                <td rowSpan={5}>
                    <img
                        className={"main-image"}
                        src={mainLogo}
                        alt={""}
                    />
                </td>
               
                <td>{props.name}</td>
            </tr>
            <tr>
                <td>{props.designation}</td>
            </tr>
           
            <tr>
                <td>University of Louisville</td>
            </tr>
            <tr>
                <td>{props.department}</td>
            </tr>
            <tr>
                <td><strong>Ph:</strong> {props.phone}</td>
            </tr>
            <tr>
                <td>
                    <p className={"social-logos-frame"}>
                        <a href={"https://twitter.com/"}>
                            <img className="image-inline" src={TwitterLogo} alt={""}/>
                        </a>
                        <a href={"https://www.linkedin.com/"}>
                            <img className="image-inline" src={LinkedInLogo} alt={""}/>
                        </a>
                        <a href={"https://www.facebook.com/"}>
                            <img className="image-inline" src={FacebookLogo} alt={""}/>
                        </a>
                       
                    </p>
                </td>
            </tr>
            </tbody>
        </table>
    );
};

export default Signature;