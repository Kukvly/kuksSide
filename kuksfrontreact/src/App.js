// import logo from './logo.svg';
// import './App.css';
// import {useEffect} from "react";
// import axios from "axios";
// function App() {
//
//     useEffect(() => {
//
//         const fetchData = async () => {
//             const res = await axios.get("http://localhost:8080/api/test")
//             console.log(res)
//         }
//         fetchData()
//
//     }, []);
//
//   return (
//     <div className="App">
//  1
//     </div>
//   );
// }
//
// export default App;
//
//

import {useEffect, useState} from "react";
import axios from "axios";

function App() {
    const [hello, setHello] = useState('');

    useEffect(() => {
        axios.get("http://localhost:8080/api/test")
            .then((res) => {
                setHello(res.data);
            })
    }, []);
    return (
        <div className="App">
            백엔드 데이터 : {hello}
        </div>
    );
}

export default App;