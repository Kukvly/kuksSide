import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import boardWrite from "./BoardWrite";

const BoardUpdate = () => {
    const navigate = useNavigate();
    // /update/:idx와 동일한 변수명으로 데이터 꺼낼 수 있음
    const {idx} = useParams();
    const [board, setBoard] = useState({
        idx: 0,
        title: '',
        createdBy: '',
        contents: '',
    });

    const {title, createdBy, contents} = board;

    const onChange = (event) => {
        const {value, name} = event.target;
        setBoard({
            ...board,
            [name] : value,
        });
    };

    const getBoard = async () => {
        const res = await (await axios.get(`http://localhost:8081/board/${idx}`)).data;
        setBoard(res.data);
    };

    const updateBoard = async () => {
        await axios.patch(`http://localhost:8081/board`, board).then((res) => {
            alert('It was modified.');
            navigate('/board/' + idx);
        });
    };

    const backToDetail = () => {
      navigate('/board/'+ idx);
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div>
            <div>
                <span>Title</span>
                <input type="text" name="title" value={"title"} onChange={onChange}/>
            </div>
            <br />
            <div>
                <span>Writer</span>
                <input type="text" name="createdBy" value={"createdBy"} readOnly={true}/>
            </div>
            <br />
            <div>
                <span>Contents</span>
                <textarea
                    name="contents"
                    cols="30"
                    rows="10"
                    value={contents}
                    onChange={onChange}
                ></textarea>
            </div>
            <br />
            <div>
                <button onClick={updateBoard}>edit</button>
                <button onClick={backToDetail}>cancle</button>
            </div>
        </div>
    );
};

export default BoardUpdate;