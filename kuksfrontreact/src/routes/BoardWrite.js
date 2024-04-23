import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";

const BoardWrite = () => {
    const navigate = useNavigate();

    const [board, setBoard] = useState({
        title: '',
        createdBy: '',
        contents: '',
    });

    const {title, createdBy, contents} = board;

    const onChange = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name]: value,
        });
    };

    const saveBoard = async () => {
        await axios.post(`http://localhost:8081/board`, board).then((res) => {
            alert('등록되었습니다.');
            navigate('/board');
        });
    };

    const backToList = () => {
        navigate('/board');
    };

    return (
        <div>
            <div>
                <span>제목</span>
                <input type="text" name="title" value={title} onChange={onChange}/>
            </div>
            <br/>
            <div>
                <span>작성자</span>
                <input
                    type="text"
                    name="createdBy"
                    value={createdBy}
                    onChange={onChange}
                />
            </div>
            <br/>
            <div>
                <span>내용</span>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    onChange={onChange}
                ></textarea>
            </div>
            <br/>
            <div>
                <button onClick={saveBoard}>저장</button>
                <button onClick={backToList}>취소</button>
            </div>
        </div>
    );
};

export default BoardWrite;