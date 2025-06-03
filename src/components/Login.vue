<template>
  <div class="login-container">
    <div class="login-box">
      <div class="login-header">
        <img :src="logo" alt="Logo" class="logo" />
        <h2>Welcome Back</h2>
        <p>Please enter your credentials to login</p>
      </div>

      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            required
            placeholder="Enter your email"
            :class="{ error: showError && !isValidEmail }"
          />
          <span class="error-message" v-if="showError && !isValidEmail">
            Please enter the correct email
          </span>
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
            :class="{ error: showError && !isValidPassword }"
          />
          <span class="error-message" v-if="showError && !isValidPassword">
            Please enter the correct password
          </span>
        </div>

        <div class="form-options">
          <label class="remember-me">
            <input type="checkbox" v-model="rememberMe" />
            Remember me
          </label>
          <a href="#" class="forgot-password">Forgot Password?</a>
        </div>

        <button type="submit" class="login-button">Login</button>

        <div class="signup-link">
          Don't have an account?
          <a href="#" @click.prevent="goToSignup">Sign up</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      logo: require("../../images/logo.png"),
      showError: false,
    };
  },
  computed: {
    isValidEmail() {
      return this.email === "ashadmughal884@gmail.com";
    },
    isValidPassword() {
      return this.password === "22sep2006";
    },
  },
  methods: {
    handleLogin() {
      this.showError = true;
      if (this.isValidEmail && this.isValidPassword) {
        localStorage.setItem("isAuthenticated", "true");
        this.$router.push("/");
      }
    },
    goToSignup() {
      this.$router.push("/signup");
    },
  },
};
</script>

<style scoped>
.login-container {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1);
  background-size: 400% 400%;
  animation: gradientBG 15s ease infinite;
  padding: 20px;
  position: relative;
  overflow: hidden;
}

@keyframes gradientBG {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}

.login-container::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  z-index: 1;
}

.login-box {
  background: rgba(255, 255, 255, 0.1);
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transform-style: preserve-3d;
  perspective: 1000px;
  transition: all 0.3s ease;
}

.login-box:hover {
  transform: scale(1.02);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.2);
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
  transform: translateZ(20px);
}

.logo {
  height: 80px;
  margin-bottom: 25px;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
  100% {
    transform: scale(1);
  }
}

.login-header h2 {
  font-size: 32px;
  background: linear-gradient(45deg, #2c3e50, #34495e);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 12px;
  font-weight: 700;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
}

.login-header p {
  color: #2c3e50;
  font-size: 16px;
  line-height: 1.5;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 24px;
  transform: translateZ(10px);
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
  position: relative;
}

.form-group label {
  font-size: 14px;
  color: #2c3e50;
  font-weight: 500;
  letter-spacing: 0.3px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.form-group input {
  padding: 14px;
  border: 2px solid rgba(44, 62, 80, 0.2);
  border-radius: 12px;
  font-size: 15px;
  transition: all 0.3s ease;
  background: rgba(255, 255, 255, 0.9);
  color: #2c3e50;
  backdrop-filter: blur(5px);
}

.form-group input::placeholder {
  color: rgba(44, 62, 80, 0.6);
}

.form-group input:focus {
  border-color: #ff6b6b;
  outline: none;
  box-shadow: 0 0 15px rgba(255, 107, 107, 0.3);
  transform: translateY(-2px);
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
  margin-top: -8px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #2c3e50;
  cursor: pointer;
}

.remember-me input[type="checkbox"] {
  width: 18px;
  height: 18px;
  border-radius: 4px;
  border: 2px solid #ff6b6b;
  cursor: pointer;
  background: rgba(255, 255, 255, 0.1);
}

.forgot-password {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.forgot-password:hover {
  color: #34495e;
  transform: translateY(-2px);
}

.login-button {
  background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
  color: white;
  padding: 16px;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
  position: relative;
  overflow: hidden;
}

.login-button::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.2),
    transparent
  );
  transition: 0.5s;
}

.login-button:hover::before {
  left: 100%;
}

.login-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(255, 107, 107, 0.4);
}

.login-button:active {
  transform: translateY(-1px);
}

.signup-link {
  text-align: center;
  font-size: 14px;
  color: #2c3e50;
  margin-top: 8px;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.1);
}

.signup-link a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 600;
  margin-left: 4px;
  transition: all 0.3s ease;
}

.signup-link a:hover {
  color: #34495e;
  transform: translateY(-2px);
}

.error-message {
  color: #e74c3c;
  font-size: 12px;
  margin-top: 4px;
  position: absolute;
  bottom: -20px;
  left: 0;
}

input.error {
  border-color: #e74c3c;
  background-color: rgba(231, 76, 60, 0.05);
}

input.error:focus {
  box-shadow: 0 0 0 3px rgba(231, 76, 60, 0.1);
}

@media (max-width: 375px) {
  .login-box {
    padding: 25px;
    margin: 15px;
  }

  .login-header h2 {
    font-size: 28px;
  }

  .form-group input {
    padding: 12px;
  }

  .login-button {
    padding: 14px;
  }
}
</style>
