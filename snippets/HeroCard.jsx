export const HeroCard = ({ filename, title, description, href }) => {
  return (
    <a className="group cursor-pointer pb-8" href={href}>
      <img
        src={`/images/hero/${filename}.png`}
        className="block dark:hidden pointer-events-none group-hover:scale-105 transition-all duration-100"
      />
      <img
        src={`/images/hero/${filename}-dark.png`}
        className="pointer-events-none group-hover:scale-105 transition-all duration-100 hidden dark:block"
      />
      <h3 className="mt-5 text-gray-900 dark:text-zinc-50 font-medium">
        {title}
      </h3>
      <span className="mt-1.5">{description}</span>
    </a>
  );
};