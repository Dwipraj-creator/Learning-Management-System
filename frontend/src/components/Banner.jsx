import React, { useState } from "react";
import { bannerStyles, customStyles } from "../assets/dummyStyles";
import { features, floatingIcons } from "../assets/dummyBanner";
import { CircleCheckBig, Sparkle, X } from "lucide-react";
import bannerImg from "../assets/Bannerimage.jpg";
import video from "../assets/BannerVideo.mp4";
import { useUser } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
const Banner = () => {
  const [showVideo, setShowVideo] = useState(false);
  const { isSignedIn } = useUser();
  const navigate = useNavigate();

  const handleGetStarted = () => {
    if (isSignedIn) {
      navigate("/courses");
    } else {
      toast.error("Please login first to access courses", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
      });
    }
  };

  return (
    <div className={bannerStyles.container}>
      {/* Floating Icons Wrapper */}
      <div className={bannerStyles.floatingIconsWrapper}>
        {floatingIcons.map((icon, i) => (
          <img
            key={i}
            src={icon.src}
            alt={icon.alt || ""}
            className={`${bannerStyles.floatingIcon} ${icon.pos}`}
            style={{
              animationDelay: `${i * 0.35}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>

      <div className={bannerStyles.mainContent}>
        <div className={bannerStyles.grid}>
          <div className={bannerStyles.leftContent}>
            <span className={bannerStyles.badge}>
              <Sparkle className={bannerStyles.badgeIcon} />
              New Features Available
            </span>

            <h1 className={bannerStyles.heading}>
              <span className={bannerStyles.headingSpan1}>
                Building Amazing
              </span>
              <span className={bannerStyles.headingSpan2}>
                Digital Products
              </span>
            </h1>
            <p className={bannerStyles.description}>
              Create beautiful, responsive web applications with our powerful
              tools and components. Start building your next project today.
            </p>

            {/* Features */}
            <div className={bannerStyles.featuresGrid}>
              {features.map((feature, i) => (
                <div key={i} className={bannerStyles.featureItem}>
                  <div className={bannerStyles.featureIconContainer}>
                    <span
                      className={`${bannerStyles.featureIcon} text-${feature.color}-500`}
                    >
                      <CircleCheckBig size={16} />
                    </span>
                  </div>
                  <span className={bannerStyles.featureText}>
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
            {/* btns */}
            <div className={bannerStyles.buttonsContainer}>
              <button
                onClick={handleGetStarted}
                className={bannerStyles.buttonGetStarted}
              >
                Get Started
              </button>
              <button
                className={bannerStyles.buttonViewDemo}
                onClick={() => setShowVideo(true)}
              >
                View Demo
              </button>
            </div>
          </div>

          <div className={bannerStyles.imageContainer}>
            <img
              src={bannerImg}
              alt="bannerImg"
              className={bannerStyles.image}
            />
          </div>
        </div>
      </div>

      {/* video modal */}
      {showVideo && (
        <div className={bannerStyles.videoModal.overlay}>
          <div className={bannerStyles.videoModal.container}>
            <iframe
              src={video}
              className={bannerStyles.videoModal.iframe}
              title="Demo Video"
              allow="autoplay; encrypted-media"
              allowFullScreen
            ></iframe>
            <button
              onClick={() => setShowVideo(false)}
              className={bannerStyles.videoModal.closeButton}
            >
              <span>
                <X className={bannerStyles.videoModal.closeIcon} />
              </span>
            </button>
          </div>
        </div>
      )}

      <style jsx>{customStyles}</style>

      {/* Inline Animations */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out forwards;
        } */}
      `}</style>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Banner;
