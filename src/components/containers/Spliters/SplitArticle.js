import React from 'react';

const SplitArticle = ({ id, primarySlot, secondarySlot, reverseOrder }) => (
  <section id={id} className="py-10">
    <div className="container px-16 pb-6 mx-auto px-8 items-center flex flex-col lg:flex-row">

      <div className="lg:w-1/2">{primarySlot}</div>

      <div className={`flex h-full w-full lg:w-1/2 ${reverseOrder && `order-last lg:order-first pr-4`}`}>
        {secondarySlot}
      </div>

    </div>
  </section>
);

export default SplitArticle
