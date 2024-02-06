import Image from "next/image";

export function BodyImageWithText({
  alt,
  image,
  text,
}: Readonly<{ alt: string; image: string; text: string }>) {
  return (
    <div className="flex justify-between">
      <Image
        className="rounded-full mx-2 md:mx-0 md:w-auto"
        alt={alt}
        src={image}
        width={80}
        height={80}
      />
      <p className="min-h-[100px] md:min-h-0 md:text-xl text-blast-100 my-auto w-2/3">{text}</p>
    </div>
  );
}
