import TextType from "./Ui/TypeText";
import ParagraphText from "./Ui/ParagraphText";
import Orb from "./Ui/Orbit";

const WhoWeAre = () => {
  const whoWeAreSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "NexaTech Innovation",
    url: "https://nexatechinnovation.in/",
    description:
      "IT service provider offering web development, app development, custom software, UI/UX design, SEO and digital marketing.",
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Web Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "App Development" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Software Development" },
      },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX Design" } },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "SEO Optimization" },
      },
      {
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: "Digital Marketing" },
      },
    ],
  };

  return (
    <>
      <section
        className="min-vh-100 py-5 position-relative overflow-hidden"
        style={{ backgroundColor: "#020617", color: "#e5e7eb" }}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(whoWeAreSchema) }}
        />

        <div className="container py-5">
          {/* ------------ TOP HERO ROW ------------ */}
          <div className="row align-items-center g-4 mb-5">
            {/* LEFT TEXT */}
            <div className="col-lg-6">
              <h2
                className="display-4 fw-bold mb-3 responsive-text"
                style={{
                  background:
                    "linear-gradient(90deg,rgb(242, 244, 247) 0%, #00f2fe 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  fontSize: "4.3rem",
                  fontFamily: "orbitron",
                }}
              >
                <TextType
                  as="span"
                  text="Nexa TechInnovation"
                  typingSpeed={10}
                  deletingSpeed={0}
                  pauseDuration={1500}
                  loop={true}
                  showCursor={true}
                  cursorCharacter="|"
                />
              </h2>

              <h2
                className="h6 text-uppercase text-white mb-3"
                style={{ letterSpacing: "0.18em" }}
              >
                Software · Digital · Experience
              </h2>

              <ParagraphText
                radius={140}
                duration={1}
                speed={0.8}
                scrambleChars={".:"}
                scrollScramble={true}
              >
                NexaTechInnovation is a future-ready software startup focused on building smart,
                scalable and user-centric digital products. We craft web applications, mobile apps,
                custom software and digital experiences that help brands grow faster and operate smarter.
              </ParagraphText>

              <div className="mb-4">
                <h2
                  className="fw-bold mb-3"
                  style={{
                    fontSize: "2.6rem",
                    color: "#008c91",
                    letterSpacing: "0.04em",
                  }}
                >
                  What We Do
                </h2>

                <div className="d-flex flex-wrap gap-2">
                  {[
                    "Web Development",
                    "App Development",
                    "Digital Marketing",
                    "SEO & Analytics",
                    "Software Development",
                    "UI/UX Design",
                  ].map((item) => (
                    <span
                      key={item}
                      className="badge rounded-pill px-3 py-2"
                      style={{
                        backgroundColor: "rgba(0,180,216,0.09)",
                        color: "white",
                        fontWeight: 500,
                        fontSize: "0.78rem",
                        fontFamily: "orbitron",
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <button
                className="btn btn-primary rounded-pill px-4 py-2 fw-semibold text-uppercase"
                style={{
                  backgroundColor: "#00b4d8",
                  borderColor: "#00b4d8",
                  letterSpacing: "0.14em",
                  fontSize: "0.78rem",
                }}
              >
                Discover Our Work
              </button>
            </div>

            {/* RIGHT GRAPHIC / CIRCLE */}
            <div className="col-lg-6 d-none d-lg-flex justify-content-center">
              <div
                className="position-relative d-flex align-items-center justify-content-center"
                style={{
                  width: "360px",
                  height: "360px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  backgroundImage: 'url("/stateimages/whoweare.jpg")',
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  borderStyle: "double",
                  borderWidth: "3px",
                  borderColor: "#00b4d8",
                  boxShadow: "0 18px 45px rgba(0,0,0,0.12)",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 2,
                    pointerEvents: "none",
                    borderRadius: "50%",
                  }}
                >
                  <Orb
                    hoverIntensity={0.5}
                    rotateOnHover={true}
                    hue={0}
                    forceHoverState={true}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* ------------ FOUR INFO CARDS ------------ */}
          <div className="row g-4">
            {/* Our Mission */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 rounded-4 whowe-card position-relative overflow-hidden"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.45)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="card-body d-flex flex-column align-items-center text-center p-4 position-relative"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                    }}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                      <circle cx="12" cy="12" r="9" stroke="#00e0ff" strokeWidth="1.7" />
                      <circle cx="12" cy="12" r="4" stroke="#00e0ff" strokeWidth="1.7" />
                      <path
                        d="M12 3V1.5M4 12H2.5M21.5 12H20M12 21.5V20"
                        stroke="#00e0ff"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                      />
                      <circle cx="12" cy="12" r="1.2" fill="#00e0ff" />
                    </svg>
                  </div>

                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ color: "#f9fdff", fontFamily: "orbitron" }}
                  >
                    Our Mission
                  </h3>

                  <p className="small mb-0" style={{ color: "rgba(226, 232, 240, 0.9)" }}>
                    To deliver innovative software solutions that transform businesses and create lasting
                    value for our clients.
                  </p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 4,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    border: "1px solid rgba(148, 163, 184, 0.25)",
                  }}
                />
              </div>
            </div>

            {/* Our Team */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 rounded-4 whowe-card position-relative overflow-hidden"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.45)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="card-body d-flex flex-column align-items-center text-center p-4 position-relative"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                    }}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                      <circle cx="8" cy="9" r="3" stroke="#00e0ff" strokeWidth="1.7" />
                      <circle cx="16" cy="9" r="3" stroke="#00e0ff" strokeWidth="1.7" />
                      <path
                        d="M4.5 18C4.9 15.7 6.3 14 8 14C9.7 14 11.1 15.7 11.5 18"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M12.5 18C12.9 15.7 14.3 14 16 14C17.7 14 19.1 15.7 19.5 18"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ color: "#f9fdff", fontFamily: "orbitron" }}
                  >
                    Our Team
                  </h3>

                  <p className="small mb-0" style={{ color: "rgba(226, 232, 240, 0.9)" }}>
                    A talented group of developers, designers and strategists passionate about creating
                    exceptional digital experiences.
                  </p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 4,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    border: "1px solid rgba(148, 163, 184, 0.25)",
                  }}
                />
              </div>
            </div>

            {/* Our Values */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 rounded-4 whowe-card position-relative overflow-hidden"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.45)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="card-body d-flex flex-column align-items-center text-center p-4 position-relative"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                    }}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 3L6 5V11C6 15 8.5 17.9 12 19.5C15.5 17.9 18 15 18 11V5L12 3Z"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M9 11.5L11 13.5L15 9.5"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ color: "#f9fdff", fontFamily: "orbitron" }}
                  >
                    Our Values
                  </h3>

                  <p className="small mb-0" style={{ color: "rgba(226, 232, 240, 0.9)" }}>
                    Integrity, innovation and excellence guide everything we do. We believe in building
                    trust through transparency.
                  </p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 4,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    border: "1px solid rgba(148, 163, 184, 0.25)",
                  }}
                />
              </div>
            </div>

            {/* Achievements */}
            <div className="col-12 col-md-6 col-lg-3">
              <div
                className="card h-100 rounded-4 whowe-card position-relative overflow-hidden"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(148, 163, 184, 0.35)",
                  boxShadow: "0 12px 30px rgba(15, 23, 42, 0.45)",
                  backdropFilter: "blur(10px)",
                }}
              >
                <div
                  className="card-body d-flex flex-column align-items-center text-center p-4 position-relative"
                  style={{ zIndex: 2 }}
                >
                  <div
                    className="mb-3 rounded-circle d-flex align-items-center justify-content-center"
                    style={{
                      width: "70px",
                      height: "70px",
                      backgroundColor: "rgba(56, 189, 248, 0.12)",
                    }}
                  >
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M8 4H16V7.5C16 9.985 14.485 12 12 12C9.515 12 8 9.985 8 7.5V4Z"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M6 5H4V7C4 9 5.2 10.6 7 11"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path
                        d="M18 5H20V7C20 9 18.8 10.6 17 11"
                        stroke="#00e0ff"
                        strokeWidth="1.7"
                        strokeLinecap="round"
                      />
                      <path d="M12 12V15" stroke="#00e0ff" strokeWidth="1.7" strokeLinecap="round" />
                      <path d="M9 19H15" stroke="#00e0ff" strokeWidth="1.7" strokeLinecap="round" />
                    </svg>
                  </div>

                  <h3
                    className="h5 fw-bold mb-2"
                    style={{ color: "#f9fdff", fontFamily: "orbitron" }}
                  >
                    Achievements
                  </h3>

                  <p className="small mb-0" style={{ color: "rgba(226, 232, 240, 0.9)" }}>
                    Recognized as top developers with 50+ successful projects and a 98% client satisfaction
                    rate across global industries.
                  </p>
                </div>

                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    zIndex: 4,
                    pointerEvents: "none",
                    borderRadius: "inherit",
                    border: "1px solid rgba(148, 163, 184, 0.25)",
                  }}
                />
              </div>
            </div>
          </div>

          <style>{`
            @media (max-width: 575.98px) {
              .responsive-text {
                font-size: 3.2rem !important;
              }
            }
          `}</style>
        </div>
      </section>
    </>
  );
};

export default WhoWeAre;
