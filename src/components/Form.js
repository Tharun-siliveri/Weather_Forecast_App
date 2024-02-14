import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Form = ({ search, setSearch, handleSubmit }) => {
    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${process.env.REACT_APP_API_KEY}`);
            if (res.ok) {
                handleSubmit();
                setSearch("");
            } else {
                throw new Error(`Invalid City Name`);
            }
        } catch (err) {
            alert(`You Entered A Wrong City Name ${search}`);
        }
    };

    return (
        <div className="form">
            <form onSubmit={onSubmit}>
                <FontAwesomeIcon icon={faMagnifyingGlass} />
                <input
                    type="text"
                    placeholder="Enter Your City..."
                    onChange={(e) => setSearch(e.target.value)}
                    value={search}
                />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default Form;
