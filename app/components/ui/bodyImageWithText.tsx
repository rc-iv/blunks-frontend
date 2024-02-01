import Image from "next/image";

export function BodyImageWithText({
  alt,
  image,
  text,
}: Readonly<{ alt: string; image: string; text: string }>) {
  return (
    <div className="flex justify-between">
      <Image
        className="rounded-full"
        alt={alt}
        src={image}
        width={62}
        height={62}
      />
      <p className="text-xl text-blast-100 my-auto w-2/3">{text}</p>
    </div>
  );
}
