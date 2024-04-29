import React, {useState} from "react";
import {useNavigate} from "react-router-dom";
import axios from "axios";
import "../style/boardWrite.css";
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
            alert('Post was submitted.');
            navigate('/');
        });
    };

    const backToList = () => {
        navigate('/');
    };

    return (
        <div className="form-container">
            <h2 className="heading bold-text">Write Contents</h2>
            <div className="input-group">
                <label className="input-label bold-text">Title</label>
                <input type="text" name="title" value={title} onChange={onChange} className="input-field"/>
            </div>
            <div className="form-group">
                <label htmlFor="createdBy">Writer</label>
                <input type="text" name="createdBy" id="createdBy" value={createdBy} onChange={onChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="contents">Contents</label>
                <textarea name="contents" id="contents" cols="30" rows="10" value={contents}
                          onChange={onChange}></textarea>
            </div>
            <div className="button-group">
                <button onClick={saveBoard} className="btn-save">Save</button>
                <button onClick={backToList} className="btn-cancel">Cancle</button>
            </div>
        </div>
    );
};

export default BoardWrite;