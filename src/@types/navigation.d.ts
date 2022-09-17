export interface GameParams {
  id: number
  title: string
  bannerUrl: string
}

export declare global {
  namespace ReactNavigation {
    interface RootParamList {
      home: undefined
      game: GameParams
    }
  }
}