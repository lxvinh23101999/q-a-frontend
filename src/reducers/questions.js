// import * as Types from './../constants/ActionTypes';
// let initialState = [
//     {
//         id: 1,
//         content: "Khảo sát sinh viên khoá mới QH2019 (K64)  ",
//         user: "Lê Ngọc Thạch",
//         numberOfAnswers: 20,
//     },
//     {
//         id: 2,
//         content: "Phát triển ứng dụng web int3306 7",
//         user: "Nguyễn Việt Anh",
//         numberOfAnswers: 140,
//     },
//     {
//         id: 3,
//         content: "Đánh giá sử dụng phần mềm FacePlus",
//         user: "Tran Anh Tuan",
//         numberOfAnswers: 1000,
//     },
//     {
//         id: 4,
//         content: "Môn Giải Tích cua GV Hoàng Xuân Huấn  ",
//         user: "Đỗ Thị Phương Thanh",
//         numberOfAnswers: 1000,
//     },
//     {
//         id: 5,
//         content: "Môn Lập trình nâng cao của GV Nguyễn Văn Vinh",
//         user: "Đỗ Thị Phương Thanh",
//         numberOfAnswers: 1020,
//     },
//     {
//         id: 6,
//         content: "Môn Lập trình nâng cao của GV Tạ Việt Cường",
//         user: "Le Xuan Vinh",
//         numberOfAnswers: 100,
//     },
//     {
//         id: 7,
//         content: "xvcz,xmvnzxmcv,  ",
//         user: "Lê Ngọc Thạch",
//         numberOfAnswers: 2000,
//     },
//         {
//         id: 8,
//         content: "ádasdasdasfsvv",
//         user: "Nguyễn Việt Anh",
//         numberOfAnswers: 140,
//     },
//     {
//         id: 9,
//         content: "fsavdfdbdfbfd",
//         user: "Tran Anh Tuan",
//         numberOfAnswers: 1000,
//     },
//     {
//         id: 10,
//         content: "sdfasdfsfsfn Huấn  ",
//         user: "Đỗ Thị Phương Thanh",
//         numberOfAnswers: 1000,
//     },
//     {
//         id: 11,
//         content: "fsdfasdafczbzvagad",
//         user: "Đỗ Thị Phương Thanh",
//         numberOfAnswers: 1020,
//     },
//     {
//         id: 12,
//         content: "sdfadsbfngrnrtnadsfdf",
//         user: "Le Xuan Vinh",
//         numberOfAnswers: 100,
//     },
//     {
//         id: 13,
//         content: "Khảo sát sinh viên khoá mới QH2019 (K64)  ",
//         user: "Lê Ngọc Thạch",
//         numberOfAnswers: 20,
//     },
//     {
//         id: 14,
//         content: "Phát triển ứng dụng web int3306 7",
//         user: "Nguyễn Việt Anh",
//         numberOfAnswers: 140,
//     },
//     {
//         id: 15,
//         content: "Đánh giá sử dụng phần mềm FacePlus",
//         user: "Tran Anh Tuan",
//         numberOfAnswers: 1000,
//     },
//     {
//         id: 16,
//         content: "Môn Giải Tích cua GV Hoàng Xuân Huấn  ",
//         user: "Đỗ Thị Phương Thanh",
//         numberOfAnswers: 1000,
//     },
//     {
//         id: 17,
//         content: "Môn Lập trình nâng cao của GV Nguyễn Văn Vinh",
//         user: "Đỗ Thị Phương Thanh",
//         numberOfAnswers: 1020,
//     },
//     {
//         id: 18,
//         content: "Môn Lập trình nâng cao của GV Tạ Việt Cường",
//         user: "Le Xuan Vinh",
//         numberOfAnswers: 100,
//     }
// ];
let data = JSON.parse(localStorage.getItem('questions'));
let initialState = data ? data : [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        default:
            return [...state];
    }
};

export default myReducer;