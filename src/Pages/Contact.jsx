import { Helmet } from "react-helmet";
import ContactInfo from "../Components/Home/ContactInfo";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <Helmet>
        <title>Mr. Fashion | Contact</title>
      </Helmet>
      <ContactInfo />
    </div>
  );
};

export default Contact;
