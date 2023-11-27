export default function Skills({ skill, percentage }: any) {
    const progressBarWidth = `${percentage}%`;

    const progressDivStyle = {
        left: progressBarWidth,
        top: '50%',
        transform: 'translateY(-50%)',
      };

  return (
    <div className="flex items-center gap-4">
      <div className="p-1 rounded-2xl border-[4px] border-pink dark:border-purple text-3xl">
        {/* Icono de la tecnología */}
        {skill.icon}
      </div>
      <span className="w-28 text-center">{skill.name}</span>
      {/* Barra de progreso */}
      <div className="w-full h-1 bg-pink dark:bg-purple rounded-full relative">
        <div className="absolute bg-purple dark:bg-pink rounded-full w-5 h-5" style={progressDivStyle}></div>
      </div>
      <span className="font-semibold">{percentage}%</span>
    </div>
  );
}
