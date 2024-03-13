import { transformationTypes } from "@/constants"


const Header = ({ title, subtitle}: {title: string, subtitle?: string}) => {

  return (
    <>
    <h2 className="h2-bold text-white">{title}</h2>
    {subtitle && <p className="text-white p-16-regular mt-4">{subtitle}</p>}
    </>
  )
}

export default Header