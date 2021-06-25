export type RootStackParamList = {
  Root: undefined;
  NotFound: undefined;
};

export type BottomTabParamList = {
  TabOne: undefined;
  TabTwo: undefined;
};

export type TabOneParamList = {
  HomeScreen: undefined;
  DetailSongScreen: undefined;
};

export type TabTwoParamList = {
  SingerScreen: undefined;
  DetailSingerScreen: undefined;
};

export type TabThreeParamList = {
  AuthorScreen: undefined;
};

export type TabSearchParamList = {
  Search: undefined;
};

export type TabSongDetailParamList = {
  SongDetail: undefined;
}

export type Album = {
  id: string;
  name: string;
  by: string;
  imageUri: string;
  headline: string;
};
export type Song = {
  id: string;
  imageUri: string;
  title: string;
  artist: string;
};

export type Songs = {
  categoryId: number;
  songId: number;
  categoryName: string;
  image: string;
  song_name: string;
  createdAt: Date;
}

export type Views = {
  categoryId: number;
  songId: number;
  categoryName: string;
  image: string;
  song_name: string;
  createdAt: Date;
}
export type Singers = {
  id: number;
  singer: string;
  avatar_singer: string;
  date_of_birth: Date;
  story: string;
}

export type Authors = {
  id: number;
  name: string;
  avatar: string;
  date_of_birth: Date;
  story: string;
}

export type SongbySingers = {
  categoryId: number;
  caterogyName: string;
  songId: number;
  song_name: string;
  image: string;
  presentedBy: number;
  createdAt: Date;
}

export type SongbyAuthors = {
  categoryId: number;
  caterogyName: string;
  songId: number;
  song_name: string;
  image: string;
  composedBy: number;
  createdAt: Date;
}

export type DetailSingers = {
  id: number;
  singer: string;
  avatar_singer: string;
  date_of_birth: Date;
  story: string;
}

export type DetailAuthors = {
  id: number;
  name: string;
  avatar: string;
  date_of_birth: Date;
  story: string;
}

export type DetailSongs = {
  id: number;
  song_name: string;
  music: string;
  image: string;
  lyric: string;
  view_number: number;
  created_at: Date;

}
export type SongbySongNames = {
  songId: number;
  song_name: string;
  image: string;
  music: string;
}