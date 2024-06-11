type HeaderProps = {
  title: string | undefined;
  sm?: boolean;
  cursor?: boolean;
  onClick?: () => void;
};

const Header = ({ title, sm, cursor, onClick }: HeaderProps): JSX.Element => {
  return (
    <header
      onClick={onClick}
      className={`${sm ? "text-3xl" : "text-6xl"} font-bold p-4 text-center ${
        cursor ? "cursor-pointer" : ""
      }`}
      style={{ lineHeight: "1.4", paddingBottom: "0.5em" }}
    >
      <h1 className="bg-clip-text text-transparent bg-text-gradient">
        {title}
      </h1>
    </header>
  );
};

export default Header;
