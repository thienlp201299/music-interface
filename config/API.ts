import * as constant from "./rest_consfig";

export const getSongbyCategory = async (categoryId: number, pageNum: number) => {
    return await fetch(
        constant.base_url +
        constant.get_song_by_cate +
        categoryId +
        "/4/" +
        pageNum
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getSongbyCate", err);
        });
};

export const getNewSong = async (pageNum: number) => {
    return await fetch(
        constant.base_url + constant.get_new_songs + "15/" + pageNum
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getNewSongs", err);
        });
};

export const getTopViews = async (pageNum: number) => {
    return await fetch(
        constant.base_url + constant.get_topview_songs + "15/" + pageNum
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getTopViews", err);
        });
};

export const getAllSinger = async (pageNum: number) => {
    return await fetch(constant.base_url + constant.get_all_singer + pageNum)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getAllSinger", err);
        });
};

export const getDetailSinger = async (singerId: number) => {
    return await fetch(
        constant.base_url + constant.get_detail_singer + singerId
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getDetailSinger", err);
        });
};

export const getSongbySinger = async (singerId: number, pageNum: number) => {
    return await fetch(
        constant.base_url +
        constant.get_song_by_singer +
        singerId +
        "/10/" +
        pageNum
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getSongbySinger", err);
        });
};

export const getAllAuthor = async (pageNum: number) => {
    return await fetch(constant.base_url + constant.get_all_author + pageNum)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getAllAuthor", err);
        });
};

export const getDetailAuthor = async (authorId: number) => {
    return await fetch(
        constant.base_url + constant.get_detail_author + authorId
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getDetailAuthor", err);
        });
};

export const getSongbyAuthor = async (authorId: number, pageNum: number) => {
    return await fetch(
        constant.base_url +
        constant.get_song_by_author +
        authorId +
        "/10/" +
        pageNum
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getSongbyAuthor", err);
        });
};

export const getAllSong = async (pageNum: number) => {
    return await fetch(constant.base_url + constant.get_all_song + pageNum)
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getAllSong", err);
        });
};

export const getSongDetail = async (songId: number) => {
    return await fetch(
        constant.base_url + constant.get_song_detail + songId
    )
        .then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-getSongDetail", err);
        });
};

export const getSongBySongName = async (song_name: string, pageNum: number) => {
    return await fetch(
        constant.base_url + '/' + constant.search_song_by_song_name +
        '10/' +
        pageNum,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({ songName: song_name })
        }
    ).then((res) => res.json())
        .then((result) => {
            return result;
        })
        .catch((err) => {
            console.log("err-SearchSongName", err);
        });
}
