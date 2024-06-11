const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0d0c22] text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-sm">
          &copy; {new Date().getFullYear()} Products.co. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
