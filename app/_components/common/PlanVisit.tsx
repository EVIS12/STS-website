import Link from 'next/link';
import React from 'react';

export default function PlanVisitSec() {
  return (
    <div>
      <section className="plan-visit bg-second-color section-pad">
        <div className="container mx-auto">
          <h2 className="title">
            <span>Plan</span> your visit
          </h2>
          <p className="subtitle">
            Travelling to STS from abroad? Let us simplify your journey. From
            facilitating travel arrangements and accommodations to offering
            exclusive services for our international guests, we ensure a
            seamless and enriching experience at STS UAE.
          </p>
          <Link
            href={'plan-visit'}
            className="main-btn mt-6 md:mt-10 !px-4 md:!px-12"
          >
            Plan Your Journey Now!
          </Link>
        </div>
      </section>
    </div>
  );
}
