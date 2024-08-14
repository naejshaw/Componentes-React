export interface IRanking {
  users:
    | [
        {
          name: string;
          score: number;
        }
      ]
    | any;
}

export interface IUser {
  name: string;
  score: number;
}
