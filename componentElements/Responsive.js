import { css } from "styled-components";




/* Extra small devices (phones, 600px and down) */
export const ExtraS = (props) => {
  return css`
    @media only screen and (max-width: 600px){
      ${props}
    }
  `;
};

 /* Small devices (portrait tablets and large phones, 600px and up) */
export const Small = (props) => {
  return css`
    @media only screen and (min-width: 600px){
      ${props}
    }
  `;
};

 /* Medium devices (landscape tablets, 768px and up) */
 export const Medium = (props) => {
  return css`
    @media only screen and (min-width: 768px){
      ${props}
    }
  `;
};

/* Large devices (laptops/desktops, 992px and up) */
 export const Large = (props) => {
  return css`
    @media only screen and (min-width: 992px){
      ${props}
    }
  `;
};

export const ExtraL = (props) => {
  return css`
    @media only screen and (min-width: 1200px){
      ${props}
    }
  `;
};



// export const minimobile = (props) => {
//     return css`
//       @media only screen and (max-width: 325px) and (min-width: 230px){
//         ${props}
//       }
//     `;
//   };

/* export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 480px){
      ${props}
    }
  `;
}; */

// export const tablet = (props) => {
//     return css`
//       @media only screen and (max-width: 768px){
//         ${props}
//       }
//     `;
//   };

// export const laptop = (props) => {
//     return css`
//       @media only screen and (max-width: 1024px){
//         ${props}
//       }
//     `;
//   };
