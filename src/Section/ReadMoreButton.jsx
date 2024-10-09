// import React, { useState } from 'react';

// const ReadMoreButton = ({ children, amountOfWords = 36 }) => {
//   const [isExpanded, setIsExpanded] = useState(false);

//   const handleReadMore = () => {
//     setIsExpanded(!isExpanded);
//   };

//   const text = children;
//   const splittedText = text.split(' ');
//   const itCanOverflow = splittedText.length > amountOfWords;
//   const beginText = itCanOverflow
//     ? splittedText.slice(0, amountOfWords - 1).join(' ')
//     : text;
//   const endText = splittedText.slice(amountOfWords - 1).join(' ');

//   return (
//     <p>
//       {beginText}
//       {itCanOverflow && (
//         <>
     
//           {!isExpanded && <span>... </span>}
//           <span className={`${!isExpanded && 'hidden'}`}>{endText}</span>
//           <span
//             className="text-violet-400 ml-2"
//             role="button"
//             tabIndex={0}
//             aria-expanded={isExpanded}
//             aria-controls="read-more-content"
//             onClick={handleReadMore}
//           >
//             {isExpanded ? 'show less' : 'show more'}
//           </span>
         
//         </>
//       )}
//     </p>
//   );
// };

// export default ReadMoreButton;


import React, { useState } from 'react';

const ReadMoreButton = ({ children, amountOfWords = 36 }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const text = children;
  const splittedText = text.split(' ');
  const itCanOverflow = splittedText.length > amountOfWords;
  const beginText = itCanOverflow
    ? splittedText.slice(0, amountOfWords - 1).join(' ')
    : text;
  const endText = splittedText.slice(amountOfWords - 1).join(' ');

  return (
    // <div className="flex flex-col items-center justify-center ">
    
      <div className="flex flex-col items-center justify-center ">
        <p className="text-lg text-gray-600 ">
          {beginText}
          {itCanOverflow && (
            <>
              {!isExpanded && <span>... </span>}
              <span className={`${!isExpanded && 'hidden'}`}>{endText}</span>
              <button
                className={`bg-slate-800 hover:bg-slate-00 text-white font-bold py-2 px-4 rounded-md ml-2  ${
                  isExpanded ? 'hidden' : 'block'
                }`}
                onClick={handleReadMore}
              >
                Read More
              </button>
              <button
                className={`bg-slate-800 hover:bg-slate-500 text-white font-bold py-2 px-4 rounded-md ml-2  ${
                  isExpanded ? 'block' : 'hidden'
                }`}
                onClick={handleReadMore}
              >
               Read Less
              </button>
            </>
          )}
        </p>
      </div>
    // </div>
  );
};

export default ReadMoreButton;