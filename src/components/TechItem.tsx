const TechItem = ({ name, src }: { name: string; src: string }) => (
  <div className="flex flex-col items-center group">
    <img
      src={src}
      alt={name}
      className="w-12 h-12 sm:w-16 sm:h-16 object-contain transition-transform group-hover:scale-110"
    />
    <span className="mt-2 text-sm text-gray-600 group-hover:text-black">
      {name}
    </span>
  </div>
);

export default TechItem;
