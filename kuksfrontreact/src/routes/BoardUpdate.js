import React, {useEffect, useState} from "react";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import "../style/boardEdit.css";
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
        <div className="container">
            <h2 className="heading bold-text">Edit Contents</h2>
            <div className="input-group">
                <label className="input-label bold-text">Title</label>
                <input type="text" name="title" value={title} onChange={onChange} className="input-field"/>
            </div>
            <div className="input-group">
                <label className="input-label bold-text">Writer</label>
                <input type="text" name="createdBy" value={createdBy} onChange={onChange} className="input-field" readOnly/>
            </div>
            <div className="input-group">
                <label className="input-label bold-text" >Contents</label>
                <textarea name="contents" cols="30" rows="10" value={contents} onChange={onChange}
                          className="input-field"></textarea>
            </div>
            <div className="button-group">
                <button onClick={updateBoard} className="button save-button">Save</button>
                <button onClick={backToDetail} className="button cancel-button">Cancle</button>
            </div>
        </div>
    );
};

export default BoardUpdate;