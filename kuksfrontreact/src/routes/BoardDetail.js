import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import axios from 'axios';
import Board from '../components/Board';

const BoardDetail = () => {
    const {idx} = useParams();
    const [loading, setLoading] = useState(true);
    const [board, setBoard] = useState({});
    const getBoard = async () => {
        const res = await (await axios.get(`http://localhost:8081/board/${idx}`)).data;
        setBoard(res.data);
        setLoading(false);
    };

    useEffect(() => {
        getBoard();
    }, []);

    return (
        <div className="board-detail">
            {loading ? (
                <h2>Loading...</h2>
            ) : (
                <Board
                    idx={board.idx}
                    title={board.title}
                    contents={board.contents}
                    createdBy={board.createdBy}
                />
            )}
        </div>
    );
};

export default BoardDetail;