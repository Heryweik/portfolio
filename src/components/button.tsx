export default function Button({ name, Icon }: { name: string; Icon: any }) {
  return (
    <button className=" bg-pink dark:bg-purple flex justify-center items-center  whitespace-nowrap rounded-2xl p-[3px] font-semibold hover:bg-gradient-to-r hover:from-purple hover:to-pink dark:hover:bg-purple/60 hover:transition-all hover:duration-300 hover:ease-in-out ">
      <span className="bg-white dark:bg-black flex-1 lg:px-5 lg:py-2 p-2 rounded-xl rounded-e-none">{name}</span>

      <div className=" p-2 lg:px-4 rounded-2xl">
        <Icon className="m-auto text-lg lg:text-2xl" />
      </div>
    </button>
  );
}
