import Image from "next/image";

interface Props{
    title:string;
    iconSrc:string;
    value:string;
    borderColor:string;
}
const PriceInfoCard = ({title,iconSrc,value,borderColor}:Props) => {
  return (
    <div className={`price-info_card border-l-[${borderColor}]`}>
        <p className="text-base text-black-100">{title}</p>
        <div className="flex gap-1">
            <Image
                src={iconSrc}
                alt={title}
                height={24}
                width={24}

            />
        </div>
    </div>
  )
}

export default PriceInfoCard