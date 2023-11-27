export default function RowCircle() {
  return (
    <div className="hidden md:grid grid-cols-5 gap-3 m-auto">
      {[...Array(3 * 5)].map((_, index) => (
        <div
          key={index}
          className="border-[2px] border-pink dark:border-purple rounded-full w-3 h-3"
        ></div>
      ))}
    </div>
  );
}
