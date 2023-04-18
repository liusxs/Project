export default {
    getStoreData: () => {
        return {
            code: 200,
            data: [
                {
                    name: "男装",
                    data: {
                        content: "男装",
                        items: [
                            {
                                text: "上衣",
                                children: [
                                    {
                                        pic: "https://images.pexels.com/photos/16354646/pexels-photo-16354646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                        title: "卫衣",
                                        num: 0,
                                        price: 25.0,
                                        id: 1001,
                                        add: true,
                                    },
                                    {
                                        pic: "https://images.pexels.com/photos/15190048/pexels-photo-15190048.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
                                        pic: "https://images.pexels.com/photos/16337978/pexels-photo-16337978.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                                        title: "牛仔裤",
                                        num: 0,
                                        price: 12.0,
                                        id: 1003,
                                        add: true,
                                    },
                                    {
                                        pic: "https://images.pexels.com/photos/15800210/pexels-photo-15800210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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