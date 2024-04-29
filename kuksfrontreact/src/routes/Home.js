import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import "../style/Home.css";
import "../style/paging.css";
import "../style/search-container.css";
import "../style/boardEdit.css";
const Home = () => {
    const [boardList, setBoardList] = useState([]);
    const [pageList, setPageList] = useState([]);

    const [curPage, setCurPage] = useState(0);
    const [prevBlock, setPrevBlock] = useState(0);
    const [nextBlock, setNextBlock] = useState(0);
    const [lastPage, setLastPage] = useState(0);

    const [search, setSearch] = useState({
        page: 1,
        sk: '',
        sv: '',
    });

    const getBoardList = async () => {
        if (search.page === curPage) return;

        const queryString = Object.entries(search)
            .map((e) => e.join('='))
            .join('&');

        const res = await axios.get('//localhost:8081/board?' + queryString);

        setBoardList(res.data.data);
        const pngn = res.data.pagination;

        const { endPage, nextBlock, prevBlock, startPage, totalPageCnt } = pngn;

        setCurPage(search.page);
        setPrevBlock(prevBlock);
        setNextBlock(nextBlock);
        setLastPage(totalPageCnt);

        const tmpPages = [];
        for (let i = startPage; i <= endPage; i++) {
            tmpPages.push(i);
        }

        setPageList(tmpPages);
    };

    const onClick = (event) => {
        let value = event.target.value;
        setSearch({
            ...search,
            page: value,
        });

        getBoardList();
    };

    const onChange = (event) => {
        const { value, name } = event.target;
        setSearch({
            ...search,
            [name]: value,
        });
    };

    const onSearch = () => {
        if (search.sk !== '' && search.sv !== '') {
            setSearch({
                ...search,
                page: 1,
            });
            setCurPage(0);
            getBoardList();
        }
    };

    useEffect(() => {
        getBoardList();
    }, [search]);

    return (
        <div>
            <div className="search-container">
                <select name="sk" onChange={onChange} className="search-select">
                    <option value="">Select</option>
                    <option value="title">Title</option>
                    <option value="contents">Contents</option>
                </select>
                <input type="text" name="sv" onChange={onChange} className="search-input"/>
                <button onClick={onSearch} className="search-button">Search</button>
            </div>
            <br/>
            <div className="table-container">
                <table className="board-table">
                    <thead>
                    <tr>
                        <th>No</th>
                        <th>Title</th>
                        <th>Contents</th>
                        <th>CreatedDate</th>
                        <th>Writer</th>
                    </tr>
                    </thead>
                    <tbody>
                    {boardList.map((board, index) => (
                        <tr key={board.idx}>
                            <td>{(curPage - 1) * 10 + index + 1}</td>
                            <td><Link to={`/board/${board.idx}`}>{board.title}</Link></td>
                            <td>{board.contents.length > 20 ? `${board.contents.substring(0, 20)}...` : board.contents}</td>
                            <td>{board.createdAt.split('T')[0]}</td>
                            <td>{board.createdBy}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <br/>
            </div>
            <div className="pagination-container">
                <button onClick={onClick} value={1} className="pagination-button">&lt;&lt;</button>
                <button onClick={onClick} value={prevBlock} className="pagination-button">&lt;</button>
                {pageList.map((page, index) => (
                    <button
                        key={index}
                        onClick={onClick}
                        value={page}
                        className={search.page === page ? "pagination-button active-page" : "pagination-button"}
                    >
                        {page}
                    </button>
                ))}
                <button onClick={onClick} value={nextBlock} className="pagination-button">&gt;</button>
                <button onClick={onClick} value={lastPage} className="pagination-button">&gt;&gt;</button>
            </div>
        </div>
    );
};

export default Home;
