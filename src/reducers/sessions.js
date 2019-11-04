import * as Types from './../constants/ActionTypes';
// let initialState = [
//     {
//         id: 1,
//         title: "Khảo sát sinh viên khoá mới QH2019 (K64)  ",
//         master: "Lê Ngọc Thạch",
//         numberOfQuestions: 20,
//     },
//     {
//         id: 2,
//         title: "Phát triển ứng dụng web int3306 7",
//         master: "Nguyễn Việt Anh",
//         numberOfQuestions: 140,
//     },
//     {
//         id: 3,
//         title: "Đánh giá sử dụng phần mềm FacePlus",
//         master: "Tran Anh Tuan",
//         numberOfQuestions: 1000,
//     },
//     {
//         id: 4,
//         title: "Môn Giải Tích cua GV Hoàng Xuân Huấn  ",
//         master: "Đỗ Thị Phương Thanh",
//         numberOfQuestions: 1000,
//     },
//     {
//         id: 5,
//         title: "Môn Lập trình nâng cao của GV Nguyễn Văn Vinh",
//         master: "Đỗ Thị Phương Thanh",
//         numberOfQuestions: 1020,
//     },
//     {
//         id: 6,
//         title: "Môn Lập trình nâng cao của GV Tạ Việt Cường",
//         master: "Le Xuan Vinh",
//         numberOfQuestions: 100,
//     },
//     {
//         id: 7,
//         title: "xvcz,xmvnzxmcv,  ",
//         master: "Lê Ngọc Thạch",
//         numberOfQuestions: 2000,
//     },
//     {
//         id: 8,
//         title: "ádasdasdasfsvv",
//         master: "Nguyễn Việt Anh",
//         numberOfQuestions: 140,
//     },
//     {
//         id: 9,
//         title: "fsavdfdbdfbfd",
//         master: "Tran Anh Tuan",
//         numberOfQuestions: 1000,
//     },
//     {
//         id: 10,
//         title: "sdfasdfsfsfn Huấn  ",
//         master: "Đỗ Thị Phương Thanh",
//         numberOfQuestions: 1000,
//     },
//     {
//         id: 11,
//         title: "fsdfasdafczbzvagad",
//         master: "Đỗ Thị Phương Thanh",
//         numberOfQuestions: 1020,
//     },
//     {
//         id: 12,
//         title: "sdfadsbfngrnrtnadsfdf",
//         master: "Le Xuan Vinh",
//         numberOfQuestions: 100,
//     },
//     {
//         id: 13,
//         title: "Khảo sát sinh viên khoá mới QH2019 (K64)  ",
//         master: "Lê Ngọc Thạch",
//         numberOfQuestions: 20,
//     },
//     {
//         id: 14,
//         title: "Phát triển ứng dụng web int3306 7",
//         master: "Nguyễn Việt Anh",
//         numberOfQuestions: 140,
//     },
//     {
//         id: 15,
//         title: "Đánh giá sử dụng phần mềm FacePlus",
//         master: "Tran Anh Tuan",
//         numberOfQuestions: 1000,
//     },
//     {
//         id: 16,
//         title: "Môn Giải Tích cua GV Hoàng Xuân Huấn  ",
//         master: "Đỗ Thị Phương Thanh",
//         numberOfQuestions: 1000,
//     },
//     {
//         id: 17,
//         title: "Môn Lập trình nâng cao của GV Nguyễn Văn Vinh",
//         master: "Đỗ Thị Phương Thanh",
//         numberOfQuestions: 1020,
//     },
//     {
//         id: 18,
//         title: "Môn Lập trình nâng cao của GV Tạ Việt Cường",
//         master: "Le Xuan Vinh",
//         numberOfQuestions: 100,
//     }
// ];
// let data = JSON.parse(localStorage.getItem('sessions'));
// let initialState = data ? data : [];
let initialState = [];
const myReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.FETCH_SESSIONS:
            state = action.sessions;
            return [...state];
        case Types.ADD_SESSION:
            let session = {
                id: action.session.id,
                title: action.session.title,
                master: action.session.master,
                numberOfQuestions: action.session.numberOfQuestions
            }
            state.push(session);
            localStorage.setItem('sessions', JSON.stringify(state));
            return [...state];
        default:
            return [...state];
    }
};

export default myReducer;