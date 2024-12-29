import React from 'react';
import { Parallax, Background } from 'react-parallax';

const Cover = ({img,title,adjustHeight}) => {
    return (
        <Parallax
        blur={{ min: -15, max: 15 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >
 <div
        className={`h-[600px] ${adjustHeight && adjustHeight}`}
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) `,
          backgroundPosition:"center",
          backgroundSize:'center'
        }}>
       
        <div className="flex md:px-10 justify-center items-center">
          <div className="md:w-1/2 mx-auto text-center my-40 text-slate-200 bg-black/50  ">
            <h1 className="mb-5 uppercase text-5xl font-bold">{title}</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
              quasi. In deleniti eaque aut repudiandae et a id nisi.
            </p>
          </div>
        </div>
      </div>
    </Parallax>
       
    );
};

export default Cover;