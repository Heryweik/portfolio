export default function RowTriangle() {
  return (
    <>
      {[...Array(2 * 6)].map((_, index) => (
        <div
          key={index}
          className="border-[2px] border-pink dark:border-purple  w-4 h-4 border-tl-2 border-l-2 rounded-tr-full"
        ></div>
      ))}
    </>
  );
}
