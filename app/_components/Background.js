import bg from "@/public/hero-image.jpg";
import logo from "@/public/Logo.svg";
import Image from "next/image";

function Background() {
  return (
    <div className="relative -z-1">
      <picture>
        <source media="(max-width: 600px)" srcSet="/hero-image-sm.jpg" />
        <Image
          placeholder="blur"
          className="w-full h-60 object-cover object-center"
          src={bg}
          alt="Hero Image"
        />
      </picture>
      <Image
        src={logo}
        alt="website logo"
        className="absolute top-1/2 left-1/2 -translate-1/2"
      />
    </div>
  );
}

export default Background;
