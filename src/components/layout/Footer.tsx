const Footer = (): JSX.Element => {
  return (
    <footer className="bg-[#0d0c22] text-white py-4">
      <div className="container mx-auto flex justify-center items-center">
        <div className="text-sm text-center">
          {/* I would put the date in a variable */}
          &copy; {new Date().getFullYear()} Products.co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
