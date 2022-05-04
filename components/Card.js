import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { solid, brands } from '@fortawesome/fontawesome-svg-core/import.macro'
import Icon from "../components/Icon";

export function Card({
  title,
  desc,
  stack,
  links,
  icon,
  iconStyles,
  borderColor,
}) {


  
  return <div className={`touch-auto card ${borderColor}`}>
              {icon}
              <div className="flex flex-col w-full">
                <h3 className="text-xl">{title}</h3>
                <p className="text-xs">{desc}</p>
                <p className="font-semibold text-xs mt-2">
                  {stack}
                </p>
                <div className="self-end relative flex flex-row gap-2 mt-3">
                  <Icon href={links.livesite} iconStyles={iconStyles} text="Live site" icon={<FontAwesomeIcon icon={solid('desktop')} />} />
                  <Icon href={links.github} iconStyles={iconStyles} text="Source code" icon={<FontAwesomeIcon size="lg" icon={brands('github')} />} />
                </div>
              </div>
            </div>;
}
  