import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const BoardList = () => {
    const [boardList, setBoardList] = useState([]);

    const getBoardList = async () => {
        const res = (await axios.get('//localhost:8081/board')).data
        setBoardList(res.data);
        console.log(res.data)
        
        const pngn = res.pagination;
        console.log(pngn);
    }

    useEffect(() => {
        // 게시글 목록 조회 함수 호출
        getBoardList();
    }, []);

    return(
        <div>
            <ul>
                {boardList.map((board) => (
                    // 게시판 목록 출력            
                <li key={board.idx}>
                    <Link to={`/board/${board.idx}`}>{board.title}</Link>
                </li>
                ))}
            </ul>
        </div>
    );
};

export default BoardList;