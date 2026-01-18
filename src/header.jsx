import React, { useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { Link } from 'react-router-dom'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
   const [isScrolled, setIsScrolled] = useState(false);

   useEffect(() => {
    const handleScroll = () => {
      // 10px se zyada scroll hote hi transparent mode
      setIsScrolled(window.scrollY > 10);
    };

    handleScroll(); // initial call (page refresh ke case me)
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


  return (
    <header
    className="fixed-top"
      style={{ zIndex: 1100 }}   // header hamesha sabke upar rahe
    >
      {/* Desktop Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark h-auto" style={{
          background: isScrolled
            ? "transparent"
            : "linear-gradient(135deg, #0a1a2e 0%)",
          boxShadow: isScrolled
            ? "none"
            : "0 2px 15px rgba(0, 119, 255, 0.3)",
          padding: "0.6rem 5%",
          transition: "background 0.35s ease, box-shadow 0.35s ease",
          backdropFilter: isScrolled ? "blur(10px)" : "none", // thoda glass effect, chaaho to hata sakte ho
        }}>

        <div className="container-fluid" style={{
          maxWidth: '1400px',
          paddingLeft: '2rem',
          paddingRight: '2rem'
        }}>
          {/* Logo */}
          {/* Logo */}
<Link
  className="navbar-brand"
  to="#"
  style={{ textDecoration: "none" }}
>
  <div
    style={{
      width: "65px",            // thoda bada circle
      height: "65px",
      background: "white",
      borderRadius: "50%",
      overflow: "hidden",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 0 6px rgba(0,0,0,0.2)",
      padding: "6px",          // image ko andar pull karne ke liye
    }}
  >
    <img
      src="/logo.jpeg"
      alt="NexaTechInnovation logo"
      style={{
        width: "100%",
        height: "auto",        // aspect ratio maintain
        maxHeight: "100%",     // circle se bahar na nikle
        objectFit: "contain",  // pura logo + text visible
        display: "block",
      }}
    />
  </div>
</Link>


          {/* Mobile Toggle */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle navigation"
            style={{
              borderColor: 'rgba(255, 255, 255, 0.3)'
            }}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Desktop Menu */}
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto" style={{ gap: '1.5rem' }}>
              <li className="nav-item">
                <Link className="nav-link" to="/" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'orbitron'
                  }}>Home</span>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'all 0.3s ease'
                  }}></span>
                </Link>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="pagesDropdown" role="button" data-bs-toggle="dropdown" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'orbitron'
                  }}>Pages</span>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'all 0.3s ease'
                  }}></span>
                  <i className="bi bi-chevron-down ms-1" style={{
                    fontSize: '0.8rem',
                    transition: 'transform 0.3s ease'
                  }}></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark" style={{
                  background: 'linear-gradient(135deg, #0a1a2e 0%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0'
                }}>
                  <li><Link className="dropdown-item" to="/privacy" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Privacy Policy</Link></li>
                  <li><Link className="dropdown-item" to="/termsandconditions" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Terms & Conditions</Link></li>
                  <li><Link className="dropdown-item" to="/faqs" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>FAQs</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="servicesDropdown" role="button" data-bs-toggle="dropdown" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'orbitron'
                  }}>Services</span>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'all 0.3s ease'
                  }}></span>
                  <i className="bi bi-chevron-down ms-1" style={{
                    fontSize: '0.8rem',
                    transition: 'transform 0.3s ease'
                  }}></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark" style={{
                   background: 'linear-gradient(135deg, #0a1a2e 0%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0'
                }}>
                  <li><Link className="dropdown-item" to="/webdevelopment" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Website Development</Link></li>
                  <li><Link className="dropdown-item" to="/appdevelopment" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Mobile App Development</Link></li>
                  <li><Link className="dropdown-item" to="/softwaredevelopment" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Software Development</Link></li>
                  <li><Link className="dropdown-item" to="/webdesign" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Web Designing</Link></li>
                  <li><Link className="dropdown-item" to="/uiuxdesign" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>UI/UX Design</Link></li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" id="marketingDropdown" role="button" data-bs-toggle="dropdown" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'orbitron'
                  }}>Marketing</span>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'all 0.3s ease'
                  }}></span>
                  <i className="bi bi-chevron-down ms-1" style={{
                    fontSize: '0.8rem',
                    transition: 'transform 0.3s ease'
                  }}></i>
                </Link>
                <ul className="dropdown-menu dropdown-menu-dark" style={{
                  background: 'linear-gradient(135deg, #0a1a2e 0%)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '0.5rem',
                  padding: '0.5rem 0'
                }}>
                  <li><Link className="dropdown-item" to="/digitalmarketing" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Digital Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/socialmediamarketing" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Social Media Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/contentmarketing" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Content Marketing</Link></li>
                  <li><Link className="dropdown-item" to="/seo" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Search Engine Optimization</Link></li>
                  <li><Link className="dropdown-item" to="/logodesign" style={{
                    color: 'rgba(255, 255, 255, 0.8)',
                    padding: '0.5rem 1.5rem',
                    transition: 'all 0.2s ease',
                    fontFamily: 'orbitron'
                  }}>Logo Design</Link></li>
                </ul>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/about" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'orbitron'
                  }}>About Us</span>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'all 0.3s ease'
                  }}></span>
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/contact" style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontWeight: '500',
                  position: 'relative',
                  padding: '0.5rem 0',
                  transition: 'all 0.3s ease'
                }}>
                  <span style={{
                    position: 'relative',
                    zIndex: 1,
                    fontFamily: 'orbitron'
                  }}>Contact</span>
                  <span style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '0%',
                    height: '2px',
                    background: 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)',
                    transition: 'all 0.3s ease'
                  }}></span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Offcanvas */}
      <div
        className={`offcanvas offcanvas-end ${mobileMenuOpen ? 'show' : ''}`}
        tabIndex="-1"
        id="mobileMenu"
        style={{
          visibility: mobileMenuOpen ? 'visible' : 'hidden',
          width: '75%',
         background: 'linear-gradient(135deg, #0a1a2e 0%)',
          color: 'white'
        }}
      >
        <div className="offcanvas-header">

          <button
            type="button"
            className="btn-close btn-close-white"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              filter: 'brightness(0) invert(1)'
            }}
          ></button>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link active" to="/" onClick={() => setMobileMenuOpen(false)} style={{
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'orbitron'
              }}>Home</Link>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle d-flex justify-content-between align-items-center"
                to="#"
                id="mobilePagesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  fontFamily: 'orbitron',
                  position: 'relative',
                  zIndex: 1100
                }}
              >
                Pages
                <i className="bi bi-chevron-down" style={{
                  fontSize: '0.8rem',
                  transition: 'transform 0.3s ease'
                }}></i>
              </Link>
              <ul className="dropdown-menu" style={{
                background: 'linear-gradient(135deg, #0a1a2e 0%, #1a3a6a 100%)',
                border: 'none',
                marginLeft: '1rem',
                zIndex: 5000,           // Bootstrap dropdown default z-index is 1050, use this or higher
                position: 'absolute'
              }}>
                <li><Link className="dropdown-item" to="/privacy" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Privacy Policy</Link></li>
                <li><Link className="dropdown-item" to="/termsandconditions" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Terms & Conditions</Link></li>
                <li><Link className="dropdown-item" to="/faqs" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>FAQ</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle d-flex justify-content-between align-items-center"
                to="#"
                id="mobileServicesDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  fontFamily: 'orbitron'

                }}
              >
                Services
                <i className="bi bi-chevron-down" style={{
                  fontSize: '0.8rem',
                  transition: 'transform 0.3s ease'
                }}></i>
              </Link>
              <ul className="dropdown-menu" style={{

                border: 'none',
                marginLeft: '1rem',
                background: 'linear-gradient(135deg, #0a1a2e 0%)',

              }}>
                <li><Link className="dropdown-item" to="/webdevelopment" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Website Development</Link></li>
                <li><Link className="dropdown-item" to="/appdevelopment" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Mobile App Development</Link></li>
                <li><Link className="dropdown-item" to="/softwaredevelopment" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Software Development</Link></li>
                <li><Link className="dropdown-item" to="/webdesign" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Web Designing</Link></li>
                <li><Link className="dropdown-item" to="/uiuxdesign" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>UI/UX Design</Link></li>
              </ul>
            </li>

            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle d-flex justify-content-between align-items-center"
                href="#"
                id="mobileMarketingDropdown"
                role="button"
                data-bs-toggle="dropdown"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  fontFamily: 'orbitron'
                }}
              >
                Marketing
                <i className="bi bi-chevron-down" style={{
                  fontSize: '0.8rem',
                  transition: 'transform 0.3s ease'
                }}></i>
              </Link>
              <ul className="dropdown-menu" style={{

                border: 'none',
                marginLeft: '1rem',
                 background: 'linear-gradient(135deg, #0a1a2e 0%)',
              }}>
                <li><Link className="dropdown-item" to="/digitalmarketing" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Digital Marketing</Link></li>
                <li><Link className="dropdown-item" to="/socialmediamarketing" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Social Media Marketing</Link></li>
                <li><Link className="dropdown-item" to="/contentmarketing" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Content Marketing</Link></li>
                <li><Link className="dropdown-item" to="/seo" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Search Engine Optimization</Link></li>
                <li><Link className="dropdown-item" to="/logodesign" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                  fontFamily: 'orbitron'
                }}>Logo Design</Link></li>
              </ul>
            </li>

            <li className="nav-item">
              <Link
                className="nav-link"
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                  fontFamily: 'orbitron'
                }}
              >
                About Us
              </Link>
            </li>

            {/* <li className="nav-item dropdown">
              <Link 
                className="nav-link dropdown-toggle d-flex justify-content-between align-items-center" 
                to="#" 
                id="mobileBlogDropdown" 
                role="button" 
                data-bs-toggle="dropdown"
                style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  padding: '0.75rem 0',
                  borderBottom: '1px solid rgba(70, 1, 1, 0.1)',
                    fontFamily:'orbitron'
                }}
              >
                Blog
                <i className="bi bi-chevron-down" style={{
                  fontSize: '0.8rem',
                  transition: 'transform 0.3s ease'
                }}></i>
              </Link>
              <ul className="dropdown-menu" style={{
                background: 'rgba(0, 0, 0, 0.2)',
                border: 'none',
                marginLeft: '1rem'
              }}>
                <li><Link className="dropdown-item" to="#" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                    fontFamily:'orbitron'
                }}>Latest Posts</Link></li>
                <li><Link className="dropdown-item" to="#" onClick={() => setMobileMenuOpen(false)} style={{
                  color: 'rgba(255, 255, 255, 0.8)',
                  padding: '0.5rem 1rem',
                    fontFamily:'orbitron'
                }}>Tech Blog</Link></li>
              </ul>
            </li> */}

            <li className="nav-item">
              <Link className="nav-link" to="/contact" onClick={() => setMobileMenuOpen(false)} style={{
                color: 'rgba(255, 255, 255, 0.9)',
                padding: '0.75rem 0',
                borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
                fontFamily: 'orbitron'
              }}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Backdrop when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="offcanvas-backdrop fade show"
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            zIndex: 1040,
            width: '100vw',
            height: '100vh',
            backgroundColor: '#000',
            opacity: 0.5
          }}
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}

      {/* Add hover effects via style tag */}
      <style>{`
        .navbar-nav .nav-link:hover,
        .navbar-nav .nav-link:focus {
          color: white !important;
        }
        .navbar-nav .nav-link:hover span:last-child,
        .navbar-nav .nav-link:focus span:last-child {
          width: 100% !important;
        }
        .dropdown-item:hover,
        .dropdown-item:focus {
          background: rgba(79, 172, 254, 0.2) !important;
          color: white !important;
          padding-left: 1.75rem !important;
        }
        .dropdown-toggle:hover i,
        .dropdown-toggle:focus i {
          transform: rotate(180deg) !important;
        }
        .navbar-brand:hover {
          text-shadow: 0 0 15px rgba(79, 172, 254, 0.5) !important;
        }
      `}</style>
    </header>
  );
};

export default Header;