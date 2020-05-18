import React from 'react'
import cn from 'classnames'

const Favorite = ({fav, className, changeFav}) =>
    <div className="p-2 text-ui-light"
         onClick={changeFav}>
        <svg className={cn(
            "w-6 h-6 stroke-current",
            className,
            {
                "fill-light": fav,
                "fill-none": !fav
            })
        }
             xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 20 20">
            <path
                d="M10 2l2.6 5.3 5.8.8-4.2 4.1 1 5.8-5.2-2.7L4.8 18l1-5.8-4.2-4.1 5.8-.8z"/>
        </svg>
    </div>

export default Favorite