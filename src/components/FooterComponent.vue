<template>
  <footer class="footer">
    <div class="footer-content">
      <div class="footer-top">
        <div class="footer-header">
          <h1>Join Our Team</h1>
          <p>
            Let's build better! Work with us to evolve your career and digitally
            transform construction.
          </p>
        </div>
        <div class="join-button">
          <button>
            Join Now
            <span class="arrow-icon">
              <!-- External arrow SVG -->
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M7 17L17 7M17 7H7M17 7V17"
                  stroke="white"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>

      <div class="footer-divider"></div>

      <div class="footer-bottom">
        <div class="company-info">
          <div class="logo">
            <img :src="footerImage" alt="RaaP Logo" />
          </div>
          <p class="tagline">
            Transforming Hotel<br />
            and Housing Construction
          </p>
        </div>

        <div class="contact-info">
          <div class="phone">
            <span>📞 +1 (415) 992-1015</span>
          </div>
          <div class="email">
            <span>📨 info@raap.builders</span>
          </div>
        </div>

        <div class="social-icons">
          <span class="social-img-bg">
            <img :src="twitterIcon" title="twitter" />
          </span>
          <span class="social-img-bg">
            <img :src="linkedinIcon" title="linkedin" />
          </span>
          <span class="social-img-bg">
            <img :src="youtubeIcon" title="YouTube" />
          </span>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      footerImage: require("../../images/logo.png"),
      youtubeIcon: require("../../images/Group.png"),
      linkedinIcon: require("../../images/Frame_2.png"),
      twitterIcon: require("../../images/Frame.png"),
    };
  },
};
</script>

<style scoped>
.footer {
  background-color: #0a1529;
  color: white;
  padding: 2.5rem 1rem 2rem 1rem;
  font-family: Arial, sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.footer-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  margin-bottom: 2.5rem;
}

.footer-header h1 {
  font-size: 2.8rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  letter-spacing: -1px;
}

.footer-header p {
  font-size: 1.15rem;
  max-width: 700px;
  color: #fff;
  opacity: 0.95;
}

.join-button button {
  background-color: #2a6a3c;
  color: white;
  border: none;
  border-radius: 2rem;
  padding: 0.9rem 2.2rem;
  font-size: 1.1rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-weight: 500;
  transition: background 0.2s;
}

.join-button button:hover {
  background-color: #21522e;
}

.arrow-icon {
  margin-left: 12px;
  display: flex;
  align-items: center;
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.18);
  margin: 2.5rem 0 2rem 0;
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 1rem;
  gap: 2rem;
}

.company-info {
  display: flex;
  flex-direction: column;
  min-width: 200px;
}

.logo img {
  height: 40px;
  margin-bottom: 1rem;
}

.tagline {
  font-size: 1rem;
  line-height: 1.4;
  color: #e0e6ed;
}

.contact-info {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
}

.phone,
.email {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #fff;
}

.phone-icon,
.email-icon {
  display: flex;
  align-items: center;
}

.social-icons {
  display: flex;
}

.social-img-bg {
  background: #fff;
  border-radius: 50%;
  width: 56px;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(138, 142, 150, 0.08);
  margin-right: 1.5rem;
  transition: box-shadow 0.2s;
}

.social-img-bg img {
  width: 24px;
  height: 24px;
}

.social-img-bg:hover {
  transform: scale(1.05);
  border: #a53e15 2px solid;
  cursor: pointer;
}

@media (max-width: 768px) {
  .footer-top {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    gap: 2rem;
    text-align: center;
  }
  .company-info {
    align-items: center;
  }
  .contact-info {
    align-items: center;
  }
}
</style>
