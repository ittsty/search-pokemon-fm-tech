export type Attack = {
  name: string;
  damage: number;
};

export type Pokemon = {
  id: string;
  name: string;
  image: string;
  types: string[];
  attacks: {
    fast: Attack[];
    special: Attack[];
  };
  evolutions?: Pokemon[];
};
