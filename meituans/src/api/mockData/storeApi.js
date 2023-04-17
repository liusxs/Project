export default {
    getStoreData: () => {
        return {
            code: 200,
            storeData: [
                {
                    name: "男装",
                    data: {
                        content: "男装",
                        items: [
                            {
                                text: "上衣",
                                children: [
                                    {
                                        pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_03.png?raw=true",
                                        title: "卫衣",
                                        num: 0,
                                        price: 25.0,
                                        id: 1001,
                                        add: true,
                                    },
                                    {
                                        pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_04.png?raw=true",
                                        title: "皮衣",
                                        num: 0,
                                        price: 22.0,
                                        id: 1002,
                                        add: true,
                                    },
                                ],
                            },
                            {
                                text: "裤子",
                                children: [
                                    {
                                        pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_05.png?raw=true",
                                        title: "牛仔裤",
                                        num: 0,
                                        price: 12.0,
                                        id: 1003,
                                        add: true,
                                    },
                                    {
                                        pic: "https://github.com/liusxs/Project/blob/main/mobilecommerc-x/src/assets/img/d_sp_06.png?raw=true",
                                        title: "短裤",
                                        num: 0,
                                        price: 12.0,
                                        id: 1004,
                                        add: true,
                                    },
                                ],
                            },
                        ],
                    },
                },
                {
                    name: "女装",
                    data: {
                        content: "女装",
                    },
                },
                {
                    name: "套装",
                    data: {
                        content: "套装",
                    },
                },
            ]
        }
    }
}