const dataLists = [
  {
    icon: "add_box",
    title: "下载",
    clickAction: "redirect",
    link: "../../../sheetManage",
    nextDialog: ""
  },
  {
    icon: "view_list",
    title: "分享",
    clickAction: "dialog",
    link: "",
    nextDialog: "NewSongSheetDialog"
  },
  {
    icon: "view_list",
    title: "编辑歌单信息",
    clickAction: "redirect",
    link: "../../../sheetManage",
    nextDialog: ""
  },
  {
    icon: "view_list",
    title: "删除",
    clickAction: "dialog",
    link: "",
    nextDialog: "ChooseDialog"
  }
];
const dataList = [
  {
    title: "创建的歌单",
    data: [
      {
        icon: "add_box",
        title: "创建新歌单",
        clickAction: "dialog",
        link: "category",
        nextDialog: "NewSongSheetDialog"
      },
      {
        icon: "view_list",
        title: "歌单管理",
        clickAction: "redirect",
        link: "../../../sheetManage",
        nextDialog: ""
      }
    ]
  },
  {
    title: "收藏的歌单",
    data: [
      {
        icon: "view_list",
        title: "歌单管理",
        clickAction: "redirect",
        link: "../../../sheetManage",
        nextDialog: ""
      }
    ]
  }
];
export const userRoomDatas = [
  {
    listTitle: "创建的歌单(1)",
    dialogList: dataList[0],
    userList: [
      {
        listImg: "http://placehold.it/50x50",
        title: "我喜欢音乐",
        detail: "59首",
        herf: "",
        dialog: {
          title: "收藏的歌单",
          data: [dataLists[0], dataLists[1]]
        }
      },
      {
        listImg: "http://placehold.it/50x50",
        title: "我喜欢音乐",
        detail: "59首",
        herf: "",
        dialog: {
          title: "收藏的歌单",
          data: [dataLists[0], dataLists[1], dataLists[2], dataLists[3]]
        }
      }
    ]
  },
  {
    listTitle: "创建的歌单(1)",
    dialogList: dataList[1],
    userList: [
      {
        listImg: "http://placehold.it/50x50",
        title: "我喜欢音乐",
        detail: "59首",
        herf: "",
        dialog: {
          title: "收藏的歌单",
          data: [dataLists[0], dataLists[1], dataLists[3]]
        }
      },
      {
        listImg: "http://placehold.it/50x50",
        title: "我喜欢音乐",
        detail: "59首",
        herf: "",
        dialog: {
          title: "收藏的歌单",
          data: [dataLists[0], dataLists[1], dataLists[3]]
        }
      },
      {
        listImg: "http://placehold.it/50x50",
        title: "我喜欢音乐",
        detail: "59首",
        herf: "",
        dialog: {
          title: "收藏的歌单",
          data: [dataLists[0], dataLists[1], dataLists[3]]
        }
      }
    ]
  }
];
