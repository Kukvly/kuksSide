import React from 'react';
import { Button, ButtonToolbar } from 'react-bootstrap';
import { BiHome } from 'react-icons/bi';
import { GiGamepad } from 'react-icons/gi';
import {FaGithub, FaPencilAlt} from 'react-icons/fa';
const Header = () => {
    return(
        <header>
            <ButtonToolbar>
                <Button variant="dark" href="/"><BiHome />&nbsp;Home</Button>
                <Button variant="secondary" href="/board"><FaPencilAlt />&nbsp;Board</Button>
                <Button variant="light"><GiGamepad />&nbsp;Game</Button>
                <Button variant="secondary" href="https://github.com/Kukvly"><FaGithub />&nbsp; Kuks Github</Button>
                {/*<Button variant="danger">Danger</Button>*/}
                {/*<Button variant="info">Info</Button>*/}
                {/*<Button variant="light">Light</Button>*/}
                {/*<Button variant="dark">Dark</Button>*/}
                {/*<Button variant="link">Link</Button>*/}
            </ButtonToolbar>
            <hr/>

        </header>
    );
};
export default Header;