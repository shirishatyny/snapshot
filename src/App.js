import { useState } from "react";
import "./App.css";
import "./index.css"
import Header from "./Components/Header";
import { LoadImages, SearchImages } from "./Components/Images";
import SearchIcon from '@mui/icons-material/Search';

const list = [
  {
    displayText: 'Mountain',
    id: 0
  },
  {
    displayText: 'Beach'
    ,id: 1
  },{
    displayText: 'Birds',
    id: 2
  },{
    displayText: 'Food',
    id: 3
  }
]

function App() {
  const [query, setQuery] = useState();
  const [search, setSearch] = useState();
  const [activeButton, setActiveButton] = useState(list[0].displayText)
  const data = LoadImages();
  // console.log(quary)
  console.log('search', search, 'q', query, 'a', activeButton)
  const searchFunction = () => {
    setSearch(query);
  };
  const searchData = SearchImages(search);
 // console.log(SearchImages(search));

  return (
    <>
      <div className="container">
        <Header />
        <div>

        <input
        className="inputClass"
        type="text"
        name="search"
        placeholder={search}
        value={query}
          onChange={(e) => {
            setQuery(e.target.value)
          }}
          />
        <button
          type="button"
          onClick={searchFunction}
          className="btn4"
          
          aria-pressed="false"
          autocomplete="off"
          >
          <SearchIcon/>
        </button>

          </div>
        <div className="buttons"  >
          {list.map((eachItem, i) => (
                      <button className={ `${activeButton === eachItem.displayText ? 'active-button "button-head"' : 'Inactive-button "button-head1"'}` } onClick={() => {setSearch(eachItem.displayText)
                      setActiveButton(eachItem.displayText)
                      setQuery(eachItem.displayText)
                      } }  >
                      {eachItem.displayText}
                    </button>
          ))}

        </div>
        <h2 className="header"> {query && search}  pictures</h2>

        <div className="imgContainer">
          {searchData.map((item, i) => {
            return (
              <div className="col-md-3" key={i}>
                <div className="card">
                  <img
                    src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            );
          })}
          {data.map((item, i) => {
            return (
              <div className="col-md-3 col-sm-1" key={i}>
                <div className="card">
                  <img
                    src={`https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_m.jpg`}
                    className="card-img-top"
                    alt="..."
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
