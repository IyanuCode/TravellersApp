import Image from "next/image";

type ButtonProps = {
    type: "button" | "submit";
    title: string;
    icon?: string;
    variant: string;
    full?: boolean;
}
const Button = ({type, title, icon, variant,full}: ButtonProps) => {
  return (
      <button type={type} className={`flex items-center gap-3 rounded-full border p-1 ${variant}  ${full && "w-full"}`}>
          {icon && <Image src={icon} width={40} height={40} alt={title} className="" />}
          <label className="font-bold whitespace-nowrap ">{title}</label>
      </button>
  )
}

export default Button