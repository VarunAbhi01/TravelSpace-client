import "./propertyList.css";
import useFetch from "../../hooks/useFetch";

const PropertyList = () => {

  const { data, loading, error } = useFetch(
    "/hotels/countByType"
// will get data as type: and count: of that particular one as response into data
  );

  const images = [
    "https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o=",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg",
    "https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"

  ]

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};


export default PropertyList;



// OLD PROPERTIES LIST CODE 

// import "./propertyList.css";

// const PropertyList = () => {

//   // const { data, loading, error } = useFetch(
//   //   "/hotels/countByType"
//   // );

//   return (
//     <div className="pList">
// <div>
  
// </div>
//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/xphoto/square300/57584488.webp?k=bf724e4e9b9b75480bbe7fc675460a089ba6414fe4693b83ea3fdd8e938832a6&o="
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Hotels</h1>
//           <h2>233 hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-apartments_300/9f60235dc09a3ac3f0a93adbc901c61ecd1ce72e.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Apartments</h1>
//           <h2>2331 hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/bg_resorts/6f87c6143fbd51a0bb5d15ca3b9cf84211ab0884.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Resorts</h1>
//           <h2>2331 hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-villas_300/dd0d7f8202676306a661aa4f0cf1ffab31286211.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Villas</h1>
//           <h2>2331 hotels</h2>
//         </div>
//       </div>

//       <div className="pListItem">
//         <img
//           src="https://cf.bstatic.com/static/img/theme-index/carousel_320x240/card-image-chalet_300/8ee014fcc493cb3334e25893a1dee8c6d36ed0ba.jpg"
//           alt=""
//           className="pListImg"
//         />
//         <div className="pListTitles">
//           <h1>Cabins</h1>
//           <h2>2331 hotels</h2>
//         </div>
//       </div>
      
//     </div>
//   );
// };

// export default PropertyList;




// OLD HOMIES LIST CODE
// //featured properties to homies list
// import "./homiesList.css";

// const HomiesList = () => {
//   return (
//     <div className="fp">
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/square600/13125860.webp?k=e148feeb802ac3d28d1391dad9e4cf1e12d9231f897d0b53ca067bde8a9d3355&o=&s=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Aparthotel Stare Miasto</span>
//         <span className="fpCity">Madrid</span>
//         <span className="fpPrice">Starting from $120</span>
//         <div className="fpRating">
//           <button>8.9</button>
//           <span>Excellent</span>
//         </div>
//       </div>
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/215955381.jpg?k=ff739d1d9e0c8e233f78ee3ced82743ef0355e925df8db7135d83b55a00ca07a&o=&hp=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Comfort Suites Airport</span>
//         <span className="fpCity">Austin</span>
//         <span className="fpPrice">Starting from $140</span>
//         <div className="fpRating">
//           <button>9.3</button>
//           <span>Exceptional</span>
//         </div>
//       </div>
//       <div className="fpItem">
//         <img
//           src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=580&q=80"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Four Seasons Hotel</span>
//         <span className="fpCity">Lisbon</span>
//         <span className="fpPrice">Starting from $99</span>
//         <div className="fpRating">
//           <button>8.8</button>
//           <span>Excellent</span>
//         </div>
//       </div>
//       <div className="fpItem">
//         <img
//           src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
//           alt=""
//           className="fpImg"
//         />
//         <span className="fpName">Hilton Garden Inn</span>
//         <span className="fpCity">Berlin</span>
//         <span className="fpPrice">Starting from $105</span>
//         <div className="fpRating">
//           <button>8.9</button>
//           <span>Excellent</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HomiesList;