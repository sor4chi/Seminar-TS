type Kick = {
  effect: boolean;
  hit: boolean;
};

type Punch = {
  hit: boolean;
  damage: number;
};

type KickOrPunch = Kick | Punch; // -> union
// 合併型なので、Kick, Punch型両方のプロパティが使える
const SuperAtack: KickOrPunch = {
  effect: true,
  hit: true,
  damage: 10,
};

// 合併型なため、どちらかの型ということを表せれば良い
const normalAtack: KickOrPunch = {
  hit: true,
  damage: 3,
};

type KickAndPunch = Kick & Punch; // intersection
// 交差型なので、合併型同様Kick, Punch型両方のプロパティが使える
const doubleAtack: KickAndPunch = {
  effect: true,
  hit: true,
  damage: 10,
};

// // 交差型は集合元の型全てのプロパティを使わなくてはならない
// const errorNormalAtack: KickAndPunch = {
//   hit: true,
//   damage: 3,
// };
// // エラー: Kick typeのeffectプロパティがないため
