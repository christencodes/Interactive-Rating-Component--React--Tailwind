export default function RatingNumber({
  number,
  selectedNumber,
  buttonSelected,
}) {
  return (
    <div
      onClick={buttonSelected}
      className={`h-10 w-10 bg-(--grey900) flex items-center justify-center rounded-full text-(--alabaster-white) cursor-pointer ${selectedNumber === number ? "selected" : undefined} hover:bg-(--orange500) transition duration-300 `}
    >
      <p>{number}</p>
    </div>
  );
}
