export default function SubmitRating({ onSubmitClick }) {
  return (
    <button
      onClick={onSubmitClick}
      className="bg-white w-full py-3 rounded-full text-xs font-semibold tracking-wider cursor-pointer hover:shadow-black hover:shadow-xl/40 transition duration-300"
    >
      SUBMIT
    </button>
  );
}
