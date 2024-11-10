
import Styles from "../styles/Store.module.css";
import SearchBar from  "../components/SearchBar";


export default function Store() {
    return (
        <>
        <div className={Styles.fakestore}>
                <h1>Fake Store</h1>
                <p>Welcome to the Fake Store</p>
                <p>Here you will find a variety of prodcuts from the fakestore API</p>
                <SearchBar/>
        </div> 
        </>
    );
};