import Link from "next/link";

const Icon = ({ iconStyles, icon, text, href = "#" }) => {
  const linkStyles = `
    ${iconStyles} 
    icon group relative

  `
  return (
    <Link href={href}>
      <a className={linkStyles}>
        {icon}
        {text && (
          <span className='tooltip group-hover:scale-100 z-50'>
            {text}
          </span>
        )}
      </a>
    </Link>
  );
};

export default Icon;