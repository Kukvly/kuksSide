import React from "react";
import axios from "axios";

const BoardList = () => {
    const getBoardList = async () => {
        const res = (await axios.get('//localhost:8081/board')).data
        console.log(res.data)
    }
    return(
        <div>
            게시판 목록 출력
        </div>
    );
};

export default BoardList;