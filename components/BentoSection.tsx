import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { items } from "@/app/data/items";

interface BentoProps{
  link: string;
}

export const BentoSection = ({ link }: BentoProps) => {

  const handleRedirect = (url: string) => {
    window.location.href = url; // Redirects to an external URL
  };

  return (
    <BentoGrid className="max-w-7xl mx-auto">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={
            <div
              className="aspect-video w-full overflow-hidden rounded-xl cursor-pointer"
              onClick={() => handleRedirect(link)} // Update to your external URL
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full h-full object-cover"
              />
            </div>
          }
          icon={item.icon}
          className={i === 3 || i === 6 ? "md:col-span-2" : ""}
        />
      ))}
    </BentoGrid>
  );
};