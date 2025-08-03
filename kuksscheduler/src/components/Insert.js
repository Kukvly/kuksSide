import { MdAdd } from 'react-icons/md';
import './Insert.scss';

const Insert = () => {
    return (
        <form className="Insert">
            <input placeholder="Write what you to do"/>
            <button type="submit">
                <MdAdd />
            </button>
        </form>
    );
};

export default Insert;