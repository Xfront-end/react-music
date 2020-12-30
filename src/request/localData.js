export const headerLinks = [
  {
    title: "发现音乐",
    link: "/discover"
  },
  {
    title: "我的音乐",
    link: "/mine"
  },
  {
    title: "朋友",
    link: "/friend"
  },
  {
    title: "商城",
    link: "https://music.163.com/store/product"
  },
  {
    title: "音乐人",
    link: "https://music.163.com/nmusician/web/index#/"
  },
  {
    title: "下载客户端",
    link: "https://music.163.com/#/download"
  }
]


export const footerLinks = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service"
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy"
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children"
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html"
  },
  {
    title: "意见反馈",
    link: "#"
  }
]

export const footerImages = [
  {
    link: "https://music.163.com/st/userbasic#/auth"
  },
  {
    link: "https://music.163.com/recruit"
  },
  {
    link: "https://music.163.com/web/reward"
  },
  {
    link: "https://music.163.com/uservideo#/plan"
  }
]

// discover中的数据
export const dicoverMenu = [
  {
    title: "推荐",
    link: "/discover/recommend"
  },
  {
    title: "排行榜",
    link: "/discover/ranking"
  },
  {
    title: "歌单",
    link: "/discover/songs"
  },
  {
    title: "主播电台",
    link: "/discover/djradio"
  },
  {
    title: "歌手",
    link: "/discover/artist"
  },
  {
    title: "新碟上架",
    link: "/discover/album"
  },
]

// 热门主播
export const hotRadios = [
  {
    picUrl: "http://p1.music.126.net/H3QxWdf0eUiwmhJvA4vrMQ==/1407374893913311.jpg",
    name: "陈立",
    position: "心理学家、美食家陈立教授",
    url: "/user/home?id=278438485"
  },
  {
    picUrl: "http://p1.music.126.net/y5-sM7tjnxnu_V9LWKgZlw==/7942872001461517.jpg",
    name: "DJ艳秋",
    position: "著名音乐节目主持人",
    url: "/user/home?id=91239965",
  },
  {
    picUrl: "http://p1.music.126.net/6cc6lgOfQTo6ovNnTHPyJg==/3427177769086282.jpg",
    name: "国家大剧院古典音乐频道",
    position: "国家大剧院古典音乐官方",
    url: "/user/home?id=324314596",
  },
  {
    picUrl: "http://p1.music.126.net/xa1Uxrrn4J0pm_PJwkGYvw==/3130309604335651.jpg",
    name: "谢谢收听",
    position: "南京电台主持人王馨",
    url: "/user/home?id=1611157",
  },
  {
    picUrl: "http://p1.music.126.net/slpd09Tf5Ju82Mv-h8MP4w==/3440371884651965.jpg",
    name: "DJ晓苏",
    position: "独立DJ，CRI环球旅游广播特邀DJ",
    url: "/user/home?id=2313954"
  }
]

// 歌手类别
export const artistCategories = [
  {
    title: "推荐",
    area: -1,
    artists: [
      {
        name: "推荐歌手",
        type: 1,
        url: "/discover/artist",
        id: 0
      },
      {
        name: "入驻歌手",
        type: 2,
        url: "/discover/artist?cat=5001",
        dataPath: "/artist/list?cat=5001"
      }
    ]
  },
  {
    title: "华语",
    area: 7,
    artists: [
      {
        name: "华语男歌手",
        url: "/discover/artist?id=1001",
        type: 1
      },
      {
        name: "华语女歌手",
        url: "/discover/artist?id=1002",
        type: 2
      },
      {
        name: "华语组合/乐队",
        url: "/discover/artist?id=1003",
        type: 3
      }
    ]
  },
  {
    title: "欧美",
    area: 96,
    artists: [
      {
        name: "欧美男歌手",
        url: "/discover/artist?id=2001",
        type: 1
      },
      {
        name: "欧美女歌手",
        url: "/discover/artist?id=2002",
        type: 2
      },
      {
        name: "欧美组合乐队",
        url: "/discover/artist?id=2003",
        type: 3
      },
    ]
  },
  {
    title: "日本",
    area: 8,
    artists: [
      {
        name: "日本男歌手",
        url: "/discover/artist?id=6001",
        type: 1
      },
      {
        name: "日本女歌手",
        url: "/discover/artist?id=6002",
        type: 2
      },
      {
        name: "日本组合/乐队",
        url: "/discover/artist?id=6003",
        type: 3
      },
    ]
  },
  {
    title: "韩国",
    area: 16,
    artists: [
      {
        name: "韩国男歌手",
        url: "/discover/artist?id=7001",
        type: 1
      },
      {
        name: "韩国女歌手",
        url: "/discover/artist?id=7002",
        type: 2
      },
      {
        name: "韩国组合/乐队",
        url: "/discover/artist?id=7003",
        type: 3
      },
    ]
  },
  {
    title: "其他",
    area: 0,
    artists: [
      {
        name: "其他男歌手",
        url: "/discover/artist?id=4001",
        type: 1
      },
      {
        name: "其他女歌手",
        url: "/discover/artist?id=4002",
        type: 2
      },
      {
        name: "其他组合乐队",
        url: "/discover/artist?id=4003",
        type: 3
      }
    ]
  },
]

export const playlist = [
  {
    "name": "星星在唱歌（纯音乐）",
    "id": 1803321138,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 12157336,
        "name": "CMJ",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 8,
    "v": 10,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 120264162,
      "name": "星星在唱歌（网易云音乐2020年度听歌报告主题曲）",
      "picUrl": "https://p1.music.126.net/sKikAjTxCmWnWTKoul6Sqg==/109951165574428569.jpg",
      "tns": [],
      "pic_str": "109951165574428569",
      "pic": 109951165574428580
    },
    "dt": 176530,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 7063554,
      "vd": 18164
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 4238150,
      "vd": 20796
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 2825448,
      "vd": 22528
    },
    "a": null,
    "cd": "01",
    "no": 2,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 0,
    "s_id": 0,
    "mark": 8192,
    "originCoverType": 0,
    "originSongSimpleData": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 1420032,
    "mv": 0,
    "publishTime": 1609084800000
  },
  {
    "name": "一生",
    "id": 1805190944,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 32007337,
        "name": "LEO刘子渊",
        "tns": [],
        "alias": []
      },
      {
        "id": 12967449,
        "name": "TangoZ",
        "tns": [],
        "alias": []
      },
      {
        "id": 1207041,
        "name": "PRC",
        "tns": [],
        "alias": []
      },
      {
        "id": 14587783,
        "name": "PRC Mission",
        "tns": [],
        "alias": []
      },
      {
        "id": 12798832,
        "name": "周钰波",
        "tns": [],
        "alias": []
      },
      {
        "id": 34749446,
        "name": "notyourkei",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 0,
    "v": 6,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 120449834,
      "name": "一生",
      "picUrl": "https://p1.music.126.net/KQtMOpbhfaMbc0XZ3W0EhA==/109951165548532529.jpg",
      "tns": [],
      "pic_str": "109951165548532529",
      "pic": 109951165548532530
    },
    "dt": 305183,
    "h": {
      "br": 320000,
      "fid": 0,
      "size": 12209325,
      "vd": -49767
    },
    "m": {
      "br": 192000,
      "fid": 0,
      "size": 7325613,
      "vd": -47194
    },
    "l": {
      "br": 128000,
      "fid": 0,
      "size": 4883757,
      "vd": -45645
    },
    "a": null,
    "cd": "01",
    "no": 1,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 0,
    "s_id": 0,
    "mark": 128,
    "originCoverType": 0,
    "originSongSimpleData": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "rtype": 0,
    "rurl": null,
    "mst": 9,
    "cp": 0,
    "publishTime": 0
  },
  {
    "name": "踏山河",
    "id": 1804320463,
    "pst": 0,
    "t": 0,
    "ar": [
      {
        "id": 31002807,
        "name": "是七叔呢",
        "tns": [],
        "alias": []
      }
    ],
    "alia": [],
    "pop": 100,
    "st": 0,
    "rt": "",
    "fee": 8,
    "v": 3,
    "crbt": null,
    "cf": "",
    "al": {
      "id": 120422780,
      "name": "踏山河",
      "picUrl": "https://p2.music.126.net/chniRNXvDaCCpCJZ7uVYug==/109951165541304779.jpg",
      "tns": [],
      "pic_str": "109951165541304779",
      "pic": 109951165541304780
    },
    "dt": 168139,
    "h": {
      "br": 320002,
      "fid": 0,
      "size": 6727725,
      "vd": -50968
    },
    "m": {
      "br": 192002,
      "fid": 0,
      "size": 4036653,
      "vd": -48375
    },
    "l": {
      "br": 128002,
      "fid": 0,
      "size": 2691117,
      "vd": -46714
    },
    "a": null,
    "cd": "01",
    "no": 1,
    "rtUrl": null,
    "ftype": 0,
    "rtUrls": [],
    "djId": 0,
    "copyright": 1,
    "s_id": 0,
    "mark": 0,
    "originCoverType": 1,
    "originSongSimpleData": null,
    "single": 0,
    "noCopyrightRcmd": null,
    "mv": 0,
    "mst": 9,
    "cp": 1416842,
    "rtype": 0,
    "rurl": null,
    "publishTime": 1607961600000
  }
]
