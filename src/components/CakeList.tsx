import { Cake, CakeItem } from "../interfaces/Cake";

interface CakeListProps {
  cakes: any[];
}

export const CakeList: React.FC<CakeListProps> = ({ cakes }) => {
  return (
    <>
      {cakes.map((i) => (
        <div key={i.id}>
          <CakeItem key={i.id} cake={i} />
        </div>
      ))}
    </>
  );
};
