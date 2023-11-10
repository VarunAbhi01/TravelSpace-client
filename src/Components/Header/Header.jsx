import "./header.css";

import {
    faBed,
    faCalendarDays,
    faCar,
    faPerson,
    faPlane,
    faTaxi,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

  import { useContext, useState } from "react";

  import { DateRange } from "react-date-range"; 
  import "react-date-range/dist/styles.css"; // main css file
  import "react-date-range/dist/theme/default.css"; // theme css file
  import { format } from "date-fns"; // this is to transform the date in javascript to readable form 
  import { useNavigate } from "react-router-dom";
import { SearchContext } from "../../Context/SearchContext";
import { AuthContext } from "../../Context/AuthContext";
  
  const Header = ({ type }) => {
    const [destination, setDestination] = useState("");
// down to toggle the calender from opening 
    const [openDate, setOpenDate] = useState(false);

    //////////////////////////////////////////////////////////////////////////// state functions for CALENDER 
    const [dates, setDates] = useState(   [
      {
        startDate: new Date(),
        endDate: new Date(),
        key: "selection",
      },
    ]   );

//////////////////////////////////////////////////////////////////////////////state func for people OPTIONS
    const [openOptions, setOpenOptions] = useState(false);
    // default values initially 
    const [options, setOptions] = useState({
      adult: 1,
      children: 0,
      room: 1,
    });
  
    const {user} = useContext(AuthContext)

    const handleOption = (name, operation) => {
// prev state is passed nd is rendered along with the edited element 
      setOptions((prev) => {
        return {
          ...prev,
          [name]: operation === "i" ? options[name] + 1 : options[name] - 1,
        };
      });
    };

    const {dispatch}= useContext(SearchContext)

// using navigate REACT ROUTER DOM function to navigate to other pages 
    const navigate = useNavigate();
    const handleSearch = () => {
      dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
      navigate("/hotels", { state: { destination, dates, options } });
    };
   




    return (
      <div className="header">
        <div
          className={
            type === "list" ? "headerContainer listMode" : "headerContainer"
          }
        >
          <div className="headerList">

            <div className="headerListItem active">
              <FontAwesomeIcon icon={faBed} />
              <span> Stays </span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faPlane} />
              <span>Flights</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faCar} />
              <span>Car rentals</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faBed} />
              <span>Attractions</span>
            </div>

            <div className="headerListItem">
              <FontAwesomeIcon icon={faTaxi} />
              <span>Airport taxis</span>
            </div>

          </div>
{/* /////////////////////////////////////////////////////////////////////////////////////// Matter in Header*/}
          {/* if type not equals hotels then this will be displayed  */}
          {type !== "list" && (
            <>
              <h1 className="headerTitle">
                A lifetime of discounts? It's Genius.
              </h1>
              <p className="headerDesc">
                Get rewarded for your travels – unlock instant savings of 10% or
                more with a free Lamabooking account
              </p>
              {!user && <button className="headerBtn">Sign in / Register</button>}
{/*///////////////////////////////////////////////////////////////////////////////////////// Header Search bar */}
              <div className="headerSearch">
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faBed} className="headerIcon" />
                  <input
                    type="text"
                    placeholder="Where are you going?"
                    className="headerSearchInput"
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////  CALENDER  */}
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
{/*selected Date text to be shown in calender text box  //////////////////////////////////////////////////////////////////////  */}
                  <span onClick={() => setOpenDate(!openDate)} className="headerSearchText">
                    {`${format(dates[0].startDate, "MM/dd/yyyy")} to ${format(dates[0].endDate,"MM/dd/yyyy" )}`}
                    </span>
{/* down calender preview opens only if openDate is set to true */}
                  {openDate && (
                    <DateRange  
                      editableDateInputs={true}
                      onChange={(item) => setDates([item.selection])}
                      moveRangeOnFirstSelection={false}
                      ranges={dates}
                      className="date"
                      minDate={new Date()}
                    />
                  )}
                </div>
                
 {/*////////////////////////////////////////////////////////////////////////////////////////////  PEOPLE OPTIONS  */}
                <div className="headerSearchItem">
                  <FontAwesomeIcon icon={faPerson} className="headerIcon" />
                  <span onClick={() => setOpenOptions(!openOptions)} className="headerSearchText">
                    {`${options.adult} adult · ${options.children} children · ${options.room} room`}     
                    </span>

                  {openOptions && (
                    <div className="options">
                      <div className="optionItem">
                        <span className="optionText">Adult</span>
                        <div className="optionCounter">

                          <button
                        //   button will be disabled if the adult count is less than 1
                                disabled={options.adult <= 1}
                                className="optionCounterButton"
                                onClick={() => handleOption("adult", "d")}
                          >
                            -
                          </button>

                          <span className="optionCounterNumber">
                            {options.adult}
                          </span>

                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("adult", "i")}
                          >
                            +
                          </button>

                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Children</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.children <= 0}
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.children}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("children", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                      <div className="optionItem">
                        <span className="optionText">Room</span>
                        <div className="optionCounter">
                          <button
                            disabled={options.room <= 1}
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "d")}
                          >
                            -
                          </button>
                          <span className="optionCounterNumber">
                            {options.room}
                          </span>
                          <button
                            className="optionCounterButton"
                            onClick={() => handleOption("room", "i")}
                          >
                            +
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

{/* //////////////////////////////////////////////////////////////////////////////////////////////   SEARCH  */}
                <div className="headerSearchItem">
                  <button className="headerBtn" onClick={handleSearch}>
                    Search
                 
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    );
  };
  
  export default Header;
  