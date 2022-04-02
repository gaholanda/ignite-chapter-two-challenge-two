export type FoodType = {
  id: number;
  available: boolean;
  name: string;
  description: string;
  price: number;
  image: string;
}

export type FoodData = Omit<FoodType | "id", "available">;