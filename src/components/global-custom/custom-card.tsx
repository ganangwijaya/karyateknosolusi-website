import { Card, CardOverlay } from "@/components/ui/card";

export const CustomCard = (props: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <Card {...props} className="overflow-hidden">
      <CardOverlay />
      {props.children}
    </Card>
  );
};

export default CustomCard;
