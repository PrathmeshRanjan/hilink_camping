import { PEOPLE_URL } from "@/constants";
import Image from "next/image";

interface CampProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
  peopleJoined: string;
}

const Campsite = ({
  backgroundImage,
  title,
  subtitle,
  peopleJoined,
}: CampProps) => {
  return (
    <div
      className={`h-full w-full min-w-[1100px] ${backgroundImage} bg-cover bg-no-repeat lg:rounded-r-2xl 2xl:rounded-2xl`}
    >
      <div className="flex h-full flex-col items-start justify-between p-6 lg:px-20 lg:py-10">
        <div className="flexCenter gap-4">
          <div className="rounded-full bg-green-50 p-4">
            <Image src="/folded-map.svg" alt="map" height={28} width={28} />
          </div>
          <div>
            <h4 className="bold-18 text-white">{title}</h4>
            <p className="regular-14 text-white">{subtitle}</p>
          </div>
        </div>
        <div className="flexCenter gap-6">
          <span className="flex -space-x-4 overflow-hidden">
            {PEOPLE_URL.map((url) => (
              <Image
                className="inline-block h-10 w-10 rounded-full"
                src={url}
                key={url}
                alt="person"
                width={52}
                height={52}
              />
            ))}
          </span>
          <p className="bold-16 md:bold-20 text-white">{peopleJoined}</p>
        </div>
      </div>
    </div>
  );
};

const Camp = () => {
  return (
    <section className="2xl:max-container relative flex flex-col py-10 lg:mb-10 lg:py-20 xl:mb-20">
      <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">
        <Campsite
          backgroundImage="bg-bg-img-2"
          title="Jamdoli Nala Camp"
          subtitle="Jaipur, Rajasthan"
          peopleJoined="2500+ Joined"
        />
        <Campsite
          backgroundImage="bg-bg-img-1"
          title="Hilltop, Sumel"
          subtitle="Jaipur, Rajasthan"
          peopleJoined="1600+ Joined"
        />
      </div>

      <div className="flexEnd mt-10 px-6 lg:-mt-60 lg:mr-6">
        <div className="bg-green-50 p-8 lg:max-w-[500px] xl:max-w-[690px] xl:rounded-5xl xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
          <h2 className="text-white capitalize regular-24 md:regular-32 2xl:regular-64">
            <strong>Feeling lost</strong> and not knowing the way?
          </h2>
          <p className="text-white mt-5 regular-14 xl:regular-16">
            Join us in creating unforgettable memories, forging new friendships,
            and rekindling your love for the great outdoors. Don't just follow
            the path; create your own adventure. Discover the way with our
            camping company and experience the beauty, serenity, and thrill that
            nature offers. It's time to get lost and find yourself!"
          </p>
        </div>
      </div>
    </section>
  );
};

export default Camp;