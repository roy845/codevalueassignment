type CharacterCountProps = {
  current: number;
  limit: number;
};

const CharacterCount = ({ current, limit }: CharacterCountProps) => {
  return (
    <p className="text-sm text-end text-white-500">
      {current}/{limit}
    </p>
  );
};

export default CharacterCount;
