type HeaderProps = {
  title: string | undefined; // I would pass it as children
  sm?: boolean; // should be instead like this -> size?: "sm" | "lg";
  cursor?: boolean;
  onClick?: () => void;
};

const Header = ({ title, sm, cursor, onClick }: HeaderProps): JSX.Element => {
  return (
    <header
      onClick={onClick} // it's bad practice to use onClick on something that is not a button. You should create a button element and pass the onClick prop to it.
      className={`${sm ? "text-3xl" : "text-6xl"} font-bold p-4 text-center ${ // You should use twMerge or cn to make it look more readable
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
