import logo from "/logo.png";

const Footer = () => {
  return (
    <div className="md:mt-48 flex flex-col md:flex-row gap-10 md:gap-0 justify-between items-center py-10">
      <div className="flex items-center">
        <img src="/logo.png" alt="" className="me-2 md:me-5" />
        <span className="text-3xl font-black">Enver</span>
      </div>
      <div className="flex gap-10">
        <ul className="flex flex-col md:flex-row items-center gap-5 md:gap-10">
          <li>Support</li>
          <li>Privacy Policy</li>
          <li>Terms and Conditions</li>
        </ul>
      </div>
      <p>&copy; 2020 Enver, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
