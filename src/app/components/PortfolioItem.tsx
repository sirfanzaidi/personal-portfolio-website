import React, { useEffect } from "react";
import "./portfolioItem.css";
import Glightbox from "glightbox";



export default function PortfolioItem({
  item,
}: {
  item: {
    id: number;
    img: string;
    title: string;
    brief: string;
    category: string;
  };
}) {
 

    useEffect(() => {
        Glightbox({
          selector: ".portfolio-lightbox",
        });
        Glightbox({
          selector: ".portfolio-details-lightbox",
          width: "90%",
          height: "90vh",
        });
      }, []);
    


  return (
    <div className="col-lg-4 col-md-6 portfolio-item">
      <div className="portfolio-wrap">
        <img src={item.img} className="img-fluid" alt={item.title} />
        <div className="portfolio-info">
          <h4>{item.title}</h4>
          <p>{item.brief}</p>
          <div className="portfolio-links">
            <a
              href={item.img}
              className="portfolio-lightbox"
              data-gallery="portfolioGallery"
              title={item.title}
            >
              <i className="bx bx-plus"></i>
            </a>
            <a
              href={`/portfolio/${item.id}`}
              className="portfolio-details-lightbox"
              data-glightbox="type: external"
              title={item.title}
            >
              <i className="bx bx-link"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// this version of code is update from chatgpt

// import React, { useEffect } from "react";
// import "./portfolioItem.css";
// import Glightbox from "glightbox";

// export default function PortfolioItem({
//   item,
// }: {
//   item: {
//     id: number;
//     img: string;
//     title: string;
//     brief: string;
//     category: string;
//   };
// }) {
//   useEffect(() => {
//     // Initialize Glightbox instances
//     const lightbox1 = Glightbox({
//       selector: ".portfolio-lightbox",
//     });

//     const lightbox2 = Glightbox({
//       selector: ".portfolio-details-lightbox",
//       width: "90%",
//       height: "90vh",
//     });

//     // Cleanup function to destroy Glightbox instances
//     return () => {
//       lightbox1.destroy();
//       lightbox2.destroy();
//     };
//   }, []);

//   return (
//     <div className="col-lg-4 col-md-6 portfolio-item">
//       <div className="portfolio-wrap">
//         <img src={item.img} className="img-fluid" alt={item.title} />
//         <div className="portfolio-info">
//           <h4>{item.title}</h4>
//           <p>{item.brief}</p>
//           <div className="portfolio-links">
//             <a
//               href={item.img}
//               className="portfolio-lightbox"
//               data-gallery="portfolioGallery"
//               title={item.title}
//             >
//               <i className="bx bx-plus"></i>
//             </a>
//             <a
//               href={`/portfolio/${item.id}`}
//               className="portfolio-details-lightbox"
//               data-glightbox="type: external"
//               title={item.title}
//             >
//               <i className="bx bx-link"></i>
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
