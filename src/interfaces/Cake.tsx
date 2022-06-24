import { Card } from '@mui/material'

interface Batter {
    id: string;
    type: string;
  }
  
  interface Topping {
    id: string;
    type: string;
  }
  
  export interface Cake {
    id: string;
    type: string;
    name: string;
    ppu: number;
    batters: Batter[];
    topping: Topping[];
  }
  
  interface CakeItemProps {
    cake: Cake;
  }
  
  export const CakeItem: React.FC<CakeItemProps> = ({ cake }) => {
    return (
      <Card key={cake.id} className="CakeItem">
        <h3>{cake.name}</h3>
        <div>
          <div key="type">Type: {cake.type}</div>
          <div key="toppings">
            Toppings:
            <ul>
              {cake.topping?.map((b) => (
                <li key={b.id}>{b.type}</li>
              ))}
            </ul>
          </div>
        </div>
      </Card>
    );
  };