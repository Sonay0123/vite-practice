export interface Game {
  id: number
  name: string
  image: string
  description: string
  rating: number
}

export const games: Game[] = [
  {
    id: 1,
    name: 'Minecraft',
    image: 'https://picsum.photos/id/1018/400/250',
    description: '自由な世界を作って遊べるゲーム',
    rating: 5,
  },
  {
    id: 2,
    name: 'Tetris',
    image: 'https://picsum.photos/id/1060/400/250',
    description: 'シンプルだけど奥が深いパズルゲーム',
    rating: 4,
  },
  {
    id: 3,
    name: 'Mario',
    image: 'https://picsum.photos/id/1025/400/250',
    description: '誰でも楽しめるアクションゲーム',
    rating: 5,
  },
]
