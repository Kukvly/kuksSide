import React from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "../style/board.css";
const Board = ({idx, title, contents, createdBy}) => {
    const navigate = useNavigate();

    const moveToUpdate = () => {
        navigate('/update/' + idx);
    };

    const deleteBoard = async () => {
        if (window.confirm('You wanna remove it?')) {
            await axios.delete(`//localhost:8081/board/${idx}`).then((res) => {
                alert('It was removed.');
                navigate('/');
            });
        }
    };

    const moveToList = () => {
        navigate('/');
    };

    return (
        <div className="board-container">
            <div>
                <h2>{title}</h2>
                <h5>{createdBy}</h5>
                <hr/>
                <p>{contents}</p>
            </div>
            <div className="button-group">
                <button onClick={moveToUpdate} className="btn-edit">수정</button>
                <button onClick={deleteBoard} className="btn-delete">삭제</button>
                <button onClick={moveToList} className="btn-list">목록</button>
            </div>
        </div>
    );
};

export default Board;