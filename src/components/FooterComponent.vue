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
          <button @click="openJoinForm">
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
            <span>📞 +92 3197530595</span>
          </div>
          <div class="email">
            <span>📨 ashadmughal884@gmail.com</span>
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

    <!-- Join Form Modal -->
    <div class="modal-overlay" v-if="showJoinForm" @click="closeJoinForm">
      <div class="modal-content" @click.stop>
        <button class="close-button" @click="closeJoinForm">&times;</button>
        <h3>Join Our Team</h3>
        <form @submit.prevent="handleJoin" class="join-form">
          <div class="form-group">
            <label for="fullName">Full Name</label>
            <input
              type="text"
              id="fullName"
              v-model="joinForm.fullName"
              required
              placeholder="Enter your full name"
            />
          </div>

          <div class="form-group">
            <label for="joinEmail">Email</label>
            <input
              type="email"
              id="joinEmail"
              v-model="joinForm.email"
              required
              placeholder="Enter your email"
            />
          </div>

          <div class="form-group">
            <label for="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              v-model="joinForm.phone"
              required
              placeholder="Enter your phone number"
            />
          </div>

          <div class="form-group">
            <label for="position">Position Interested In</label>
            <select id="position" v-model="joinForm.position" required>
              <option value="">Select a position</option>
              <option value="developer">Software Developer</option>
              <option value="designer">UI/UX Designer</option>
              <option value="manager">Project Manager</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div class="form-group">
            <label for="message">Why do you want to join us?</label>
            <textarea
              id="message"
              v-model="joinForm.message"
              placeholder="Tell us about yourself and why you'd be a great fit"
              rows="4"
              required
            ></textarea>
          </div>

          <button type="submit" class="submit-button">
            Submit Application
          </button>
        </form>
      </div>
    </div>

    <!-- Notification -->
    <div class="notification" :class="{ show: showNotification }">
      <div class="notification-content">
        <span class="notification-icon">✓</span>
        <span class="notification-message">{{ notificationMessage }}</span>
      </div>
    </div>
  </footer>
</template>

<script>
import emailjs from "@emailjs/browser";

export default {
  name: "FooterComponent",
  data() {
    return {
      footerImage: require("../../images/logo.png"),
      youtubeIcon: require("../../images/Group.png"),
      linkedinIcon: require("../../images/Frame_2.png"),
      twitterIcon: require("../../images/Frame.png"),
      showJoinForm: false,
      showNotification: false,
      notificationMessage: "",
      joinForm: {
        fullName: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      },
    };
  },
  mounted() {
    // Initialize EmailJS with your public key
    emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual public key
  },
  methods: {
    openJoinForm() {
      this.showJoinForm = true;
    },
    closeJoinForm() {
      this.showJoinForm = false;
      this.joinForm = {
        fullName: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      };
    },
    async handleJoin() {
      try {
        // Show loading state
        this.showNotification = true;
        this.notificationMessage = "Sending your application...";

        // Prepare email template parameters
        const templateParams = {
          to_email: "ashadmughal884@gmail.com",
          from_name: this.joinForm.fullName,
          from_email: this.joinForm.email,
          phone: this.joinForm.phone,
          position: this.joinForm.position,
          message: this.joinForm.message,
          reply_to: this.joinForm.email, // This allows you to reply directly to the applicant
        };

        // Send email using EmailJS
        const response = await emailjs.send(
          "service_xxxxxxx", // Replace with your service ID
          "template_xxxxxxx", // Replace with your template ID
          templateParams
        );

        console.log("Email sent successfully:", response);

        // Show success notification
        this.showNotification = true;
        this.notificationMessage =
          "Thank you for your interest! We'll review your application and get back to you soon.";

        // Close the form
        this.closeJoinForm();

        // Hide notification after 3 seconds
        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      } catch (error) {
        console.error("Error sending email:", error);
        this.showNotification = true;
        this.notificationMessage =
          "Sorry, there was an error submitting your application. Please try again later.";

        setTimeout(() => {
          this.showNotification = false;
        }, 3000);
      }
    },
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

@media (max-width: 375px) {
  .footer-container {
    padding: 20px 15px;
  }

  .footer-content {
    flex-direction: column;
    gap: 20px;
  }

  .footer-section {
    width: 100%;
  }

  .footer-section h3 {
    font-size: 18px;
  }

  .footer-section p,
  .footer-section a {
    font-size: 14px;
  }

  .social-links {
    justify-content: center;
  }
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(10, 21, 41, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  backdrop-filter: blur(5px);
}

.modal-content {
  background: white;
  padding: 30px;
  border-radius: 20px;
  width: 90%;
  max-width: 500px;
  position: relative;
  animation: slideIn 0.3s ease-out;
  color: #0a1529;
}

@keyframes slideIn {
  from {
    transform: translateY(-50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

.close-button {
  position: absolute;
  top: 15px;
  right: 15px;
  background: none;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #0a1529;
  transition: all 0.3s ease;
}

.close-button:hover {
  color: #2a6a3c;
  transform: rotate(90deg);
}

.join-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-top: 20px;
}

.join-form .form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.join-form label {
  font-size: 14px;
  color: #0a1529;
  font-weight: 500;
}

.join-form input,
.join-form select,
.join-form textarea {
  padding: 12px;
  border: 2px solid #e1e1e1;
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: white;
}

.join-form input:focus,
.join-form select:focus,
.join-form textarea:focus {
  border-color: #2a6a3c;
  outline: none;
  box-shadow: 0 0 0 3px rgba(42, 106, 60, 0.1);
}

.join-form textarea {
  resize: vertical;
  min-height: 100px;
}

.submit-button {
  background: #2a6a3c;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.submit-button:hover {
  background: #21522e;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(42, 106, 60, 0.2);
}

.notification {
  position: fixed;
  top: 20px;
  right: 20px;
  background: #2a6a3c;
  color: white;
  padding: 15px 25px;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transform: translateX(120%);
  transition: transform 0.3s ease;
  z-index: 1001;
}

.notification.show {
  transform: translateX(0);
}

.notification-content {
  display: flex;
  align-items: center;
  gap: 10px;
}

.notification-icon {
  font-size: 20px;
  font-weight: bold;
}

@media (max-width: 375px) {
  .modal-content {
    padding: 20px;
    margin: 15px;
  }

  .notification {
    left: 20px;
    right: 20px;
    text-align: center;
  }
}
</style>
