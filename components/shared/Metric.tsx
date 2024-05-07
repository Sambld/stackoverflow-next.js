import React, { FC } from "react";
import Image from "next/image";
import Link from "next/link";
type MetricProps = {
  title: string;
  value: number;
  icon: string;
  alt: string;
  textStyels?: string;
  href?: string;
};

function formatNumber(num: number) {
  // Check if the number is a valid number
  if (isNaN(num)) {
    return "Invalid input";
  }

  // Convert the number to an absolute value
  const absNum = Math.abs(num);

  // Check if the number is greater than or equal to 1 million
  if (absNum >= 1000000) {
    const millionValue = (absNum / 1000000).toFixed(1);
    return `${millionValue}M`;
  }
  // Check if the number is greater than or equal to 1 thousand
  else if (absNum >= 1000) {
    const thousandValue = (absNum / 1000).toFixed(1);
    return `${thousandValue}K`;
  }
  // Return the original number for values less than 1 thousand
  else {
    return num.toString();
  }
}
export const Metric: FC<MetricProps> = ({
  title,
  value,
  icon,
  alt,
  textStyels,
  href,
}) => {
  const Content = () => (
    <div className="flex items-center gap-1">
      <Image
        src={icon}
        alt={alt}
        width={18}
        height={18}
        className="active-theme"
      />
      <span className={`subtle-large text-dark200_light800 ${textStyels}`}>
        {formatNumber(value)} {title}
      </span>
    </div>
  );

  return (
    <>
      {href ? (
        <Link href={href}>
          <Content />
        </Link>
      ) : (
        <Content />
      )}
    </>
  );
};
