import clsx from "clsx"
import useDocusaurusContext from "@docusaurus/useDocusaurusContext"
import React from "react"
import TextLoop from "react-text-loop"
// import ReactTypingEffect from "react-typing-effect"

import Button from "@theme/Button"
import PageLayout from "@theme/PageLayout"
// import FeaturesTiles from "../component/FeaturesTiles"
// import ButtonDropdown from "../theme/Button/ButtonDropdown"

import ftrClsCss from "../css/index/footerConsole.module.css"
import juCss from "../css/index/jumbotron.module.css"
import wthCss from "../css/index/watch.module.css"
import ftuCss from "../css/index/ftuCard.module.css"
import seCss from "../css/section.module.css"
import featTiles from "../css/index/featureTiles.module.css"

type IFeatureCard = {
  title: string
  desc: string
  icon: string
}

const FeatureCard = ({ title, desc, icon }: IFeatureCard) => {
  return (
    <div
      className={clsx(
        ftuCss.feature__card,
        "shadow--lw",
        "margin-bottom--lg",
        "padding--md",
      )}
    >
      <div className={clsx(ftuCss.feature__card__header, "margin-bottom--md")}>
        <div className={ftuCss.feature__icon}>
          <img src={icon} alt="Features tile icon 01" width={40} height={40} />
        </div>
        <h2 className={clsx(ftuCss.feature__title, "margin-bottom--none")}>
          {title}
        </h2>
      </div>
      <p className={ftuCss.feature__desc}>{desc}</p>
    </div>
  )
}

const Top = () => {
  const { siteConfig } = useDocusaurusContext()

  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--center"],
        seCss["section--odd"],
      )}
    >
      <div className={juCss.jumbotron}>
        <h1
          className={clsx(
            seCss.section__title,
            seCss["section__title--jumbotron"],
            seCss["section__title--accent"],
          )}
        >
          The Desktop App for
          <br />
          Apache{" "}
          <span className={juCss.typed__text}>
            <TextLoop interval={2500}>
              <span>Spark</span>
              <span>Hadoop</span>
            </TextLoop>{" "}
            {/* <ReactTypingEffect
              text={["Hadoop", "Spark"]}
              speed={100}
              eraseDelay={500}
              typingDelay={500}
              cursor=" "
            /> */}
          </span>
        </h1>

        <p
          className={clsx(
            seCss.section__subtitle,
            seCss["section__subtitle--accent"],
            "text--center",
          )}
        >
          {siteConfig.tagline}
        </p>

        <div className={clsx(juCss.jumbotron__actionbtns)}>
          <Button
            className={clsx(juCss.actionbtn)}
            uppercase={false}
            onClick={() => {
              window.location.href = `${siteConfig.customFields.downloadUrl}`
            }}
            icon={
              <img
                src="/img/pages/landing/appleIcon.svg"
                width={25}
                height={25}
                className="apple-icon"
              />
            }
            size="small"
          >
            Download for Mac
          </Button>
          <Button
            uppercase={false}
            variant="secondary"
            icon={
              <img
                src="/img/pages/landing/microSoftIcon.svg"
                width={22}
                height={22}
                className="microsoft-icon"
              />
            }
            className={`${juCss.actionbtn} disabled`}
            size="small"
          >
            Coming Soon
          </Button>
        </div>

        <div className={clsx(juCss.jumbotron__image)}>
          <img
            className="shadow--md"
            src="/img/hero-banner.png"
            alt="Langing page Image"
          />
        </div>
      </div>
    </section>
  )
}

const FeaturesCard = () => {
  return (
    <section
      className={clsx(
        ftuCss.features__sec,
        seCss.section,
        ftuCss.features__light,
        seCss["section--center"],
      )}
    >
      <div className={clsx(ftuCss.features__top__info, "text--center")}>
        <h2 className={clsx(seCss.section__title)}>
          Designed for developers, built for speed.
        </h2>
        {/* <p className={clsx(seCss.section__subtitle)}></p> */}
      </div>
      <div className="container">
        <div className={clsx("row", ftuCss.features__row)}>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Fast development"
              desc="Bootstrap a Spark and Hadoop cluster under a minute, and start playing"
              icon="/img/pages/landing/feature-tile-icon-01.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Complete cluster control"
              desc="Launch an interactive shell and start exploring Hadoop, YARN and Spark. "
              icon="/img/pages/landing/feature-tile-icon-02.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Open Source driven"
              desc="Runs on open source version of Spark and Hadoop."
              icon="/img/pages/landing/feature-tile-icon-03.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Runtime insights"
              desc="Debug and identify performance bottleneck of Spark applications in realtime monitoring"
              icon="/img/pages/landing/feature-tile-icon-04.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Lightweight clusters"
              desc="Runs on lightweight docker containers, allowing you to create more clusters."
              icon="/img/pages/landing/container.svg"
            />
          </div>
          <div className={ftuCss.feature__col}>
            <FeatureCard
              title="Compare deployments"
              desc="Test your application against different versions of Spark and Hadoop"
              icon="/img/pages/landing/deploy.svg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const FooterConsole = () => {
  const { siteConfig } = useDocusaurusContext()
  return (
    <section
      className={clsx(
        seCss.section,
        seCss["section--center"],
        seCss["section--odd"],
      )}
    >
      <div
        className={clsx(
          seCss.section__footer,
          seCss["section__footer--console"],
        )}
      >
        <div
          className={clsx(ftrClsCss.footerCol, ftrClsCss.footer__console__left)}
        >
          <h2 className={ftrClsCss.flashy__title}>And Manage deployments</h2>
          <p className={clsx(ftrClsCss.flashy__content, "margin-bottom--lg")}>
            There&lsquo;s more. You can also have multiple deployments
            configuration to test your application against different cluster
            managers.
          </p>

          <div className={ftrClsCss.console__actionbtns}>
            <Button
              onClick={() => {
                window.location.href = `${siteConfig.customFields.downloadUrl}`
              }}
              icon={
                <img
                  src="/img/pages/landing/appleIcon.svg"
                  width="25px"
                  height="25px"
                  className="apple-icon"
                />
              }
              size="xsmall"
              variant="primary"
              uppercase={false}
              className={clsx(ftrClsCss.console__actionbtn)}
            >
              Download Now
            </Button>
            <Button
              icon={
                <img
                  src="/img/pages/landing/microSoftIcon.svg"
                  width={22}
                  height={22}
                  className="microsoft-icon"
                />
              }
              variant="secondary"
              className={`${ftrClsCss.console__actionbtn} disabled`}
              size="xsmall"
              uppercase={false}
            >
              Coming Soon
            </Button>
          </div>
        </div>

        <div
          className={clsx(
            ftrClsCss.footerCol,
            ftrClsCss.footer__console__right,
          )}
        >
          <div className={clsx(ftrClsCss.console__right__image)}>
            <img
              className="shadow--md"
              src="/img/pages/landing/deployments.png"
              alt="landing page image"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const WatchInDemo = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--center"],
      seCss["section--light"],
    )}
  >
    <div className={clsx(wthCss.watch__sec)}>
      <h2
        className={clsx(
          wthCss.watch__title,
          seCss.section__title,
          "text--center",
        )}
      >
        Watch it in action
      </h2>
      <div className={clsx("container", wthCss.video__container)}>
        <div
          style={{
            position: "relative",
            paddingBottom: "59.715025906735754%",
            height: 0,
          }}
        >
          <iframe
            src="https://www.loom.com/embed/0dbafc2d13ec436b9fe8bf86d931f1cc"
            frameBorder="0"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
            }}
          />
        </div>
      </div>
    </div>
  </section>
)

const FeaturesTiles = () => (
  <section
    className={clsx(
      seCss.section,
      seCss["section--center"],
      seCss["section--odd"],
      "padding-vert--lg",
    )}
  >
    <div className={clsx(featTiles.features__tiles__top)}>
      <div
        className={clsx(
          featTiles.features__tiles__jumbotron,
          "padding-bottom--lg",
        )}
      >
        <h2 className={clsx(seCss.section__title, "text--center")}>
          Desktop app that saves thousands of developers&rsquo; hours
        </h2>
      </div>
    </div>
    <div className={clsx(seCss.section, featTiles.features__tiles__container)}>
      <div className={clsx(featTiles.features__tiles__row)}>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            Launch Sandbox clusters
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Fast provisioning. </b> Launch single
            node clusters on your desktop under a minute.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Focus on development.</b> Forget the
            mess of bootstrapping and managing clusters on your own.
          </p>
        </div>
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/choose-cluster.png"
              alt="Choose cluster"
            />
          </div>
        </div>
      </div>
      <div
        className={clsx(
          featTiles.features__tiles__row,
          featTiles.fetaure__tiles_light,
        )}
      >
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/app-insights.png"
              alt="Features split 02"
            />
          </div>
        </div>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            Get Runtime Insights
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Identify resource wastage.</b> Optimize
            cluster memory and cpu based on the resource overall resource usage.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Vital Observations.</b> Identify
            performance bottleneck, without going through hundreds of jobs and
            stages and logs.
          </p>
        </div>
      </div>
      <div className={clsx(featTiles.features__tiles__row)}>
        <div
          className={clsx(featTiles.tile__item__content)}
          data-reveal-container=".split-item"
        >
          <h2 className={featTiles.feature__tile__cont__title}>
            Realtime Monitoring
          </h2>
          <p
            className={featTiles.feature__tile__cont__desc}
            style={{ marginBottom: 20 }}
          >
            <b style={{ color: "#000" }}>Faster delivery.</b> Get instant
            feedback on resource usage pattern and deploy the optimized code,
            saving time and cost.
          </p>
          <p className={featTiles.feature__tile__cont__desc}>
            <b style={{ color: "#000" }}>Faster debugging.</b> Quickly drill
            down to individual job and stages and isolate the performance
            bottleneck in minutes instead of hours and days.
          </p>
        </div>
        <div className={clsx(featTiles.tile__item__img)}>
          <div className={clsx(featTiles.tile__img__box, "shadow--md")}>
            <img
              src="/img/pages/landing/runtime-monitor.png"
              alt="Features split 03"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
)

const Home = () => {
  const { siteConfig } = useDocusaurusContext()
  const title = "Gigahex"

  return (
    <PageLayout
      canonical=""
      description={siteConfig.customFields.description}
      title={title}
    >
      <Top />
      <FeaturesCard />
      <FeaturesTiles />
      <WatchInDemo />
      <FooterConsole />
    </PageLayout>
  )
}

export default Home
