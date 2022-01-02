import React from "react"
import clsx from "clsx"

import PageLayout from "../theme/PageLayout/index"
import seCss from "../css/section.module.css"
import pricingCss from "../css/pricing/pricing.module.css"

const Pricing = () => {
  const checkIcon = (
    <svg viewBox="0 0 10 9" xmlns="http://www.w3.org/2000/svg">
      <path
        fill="#669f25"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M3.47502 5.95084L8.44546 0.494873L9.55431 1.50505L3.59262 8.04908L0.505371 5.34162L1.49439 4.21386L3.47502 5.95084Z"
      />
    </svg>
  )
  return (
    <PageLayout canonical="/pricing" description="" title="About Us">
      <section className={clsx(seCss.section, seCss["section--odd"])}>
        <div className={clsx(pricingCss.header__banner)}>
          <h1 className={pricingCss.title}>Pricing</h1>
          <p className={clsx(seCss.section__subtitle)}>
            Self Hosted Data Infrastructure Management platform
          </p>
        </div>
      </section>
      <section
        className={clsx(pricingCss.cards__wrapper, seCss.section, "row")}
      >
        <div className="col col--5">
          <div className={clsx("card-demo")}>
            <div
              className={clsx(
                "card padding--sm padding-horiz--md",
                pricingCss.pricing_card,
              )}
            >
              <div className="card__header">
                <div
                  className={clsx(pricingCss.circle__icon, "margin-bottom--md")}
                />
                <h2>Basic</h2>
                <h2 className={clsx("margin-bottom--sm")}>Free</h2>
                <div className={clsx(pricingCss.plan__desc)}>for lifetime</div>
              </div>
              <div className={clsx("card__body", pricingCss.card__body)}>
                <ul
                  className={clsx(
                    pricingCss.plan__features,
                    "padding-left--none",
                    "margin-vert--md",
                  )}
                >
                  <li>
                    <span>{checkIcon}</span>
                    Lorem ipsum dolor sit amet
                  </li>

                  <li>
                    <span>{checkIcon}</span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>{checkIcon}</span>
                    Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>{checkIcon}</span>
                    Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col col--6">
          <div className={clsx("card-demo")}>
            <div
              className={clsx(
                "card padding--sm padding-horiz--md",
                pricingCss.pricing_card,
                pricingCss.pro,
              )}
            >
              <div className="card__header">
                <div
                  className={clsx(pricingCss.circle__icon, "margin-bottom--md")}
                />
                <h2>Pro</h2>
                <h2 className={clsx("margin-bottom--sm")}>Custom</h2>
                <div className={clsx(pricingCss.plan__desc)}>Coming Soon</div>
              </div>
              <div className={clsx("card__body", pricingCss.card__body)}>
                <ul
                  className={clsx(
                    pricingCss.plan__features,
                    "padding-left--none",
                    "margin-vert--md",
                  )}
                >
                  <li>
                    <span>{checkIcon}</span> Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>{checkIcon}</span>Lorem ipsum dolor sit amet
                  </li>
                  <li>
                    <span>{checkIcon}</span>Lorem ipsum dolor sit amet{" "}
                  </li>
                  <li>
                    <span>{checkIcon}</span>Lorem ipsum dolor sit amet
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}

export default Pricing