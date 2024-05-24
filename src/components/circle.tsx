export default function Circle({ Icon }: { Icon: any }) {
  return (
    <div className="p-2 rounded-2xl border-[2px] border-pink dark:border-purple text-lg md:text-xl lg:text-2xl hover:border-pink/60 dark:hover:border-purple/60 hover:transition-all hover:duration-300 hover:ease-in-out cursor-pointer hover:bg-pink dark:hover:bg-purple hover:shadow-custom3 dark:hover:shadow-custom3Dark">
      <Icon />
    </div>
  );
}
