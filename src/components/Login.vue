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
          />
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Enter your password"
          />
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
  name: "Login",
  data() {
    return {
      email: "",
      password: "",
      rememberMe: false,
      logo: require("../../images/logo.png"),
    };
  },
  methods: {
    handleLogin() {
      // Here you would typically make an API call to your backend
      console.log("Login attempt:", {
        email: this.email,
        password: this.password,
        rememberMe: this.rememberMe,
      });

      // For demo purposes, we'll just redirect to home
      this.$router.push("/");
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
  background: linear-gradient(
    2100deg,
    rgba(13, 28, 64, 0.9),
    rgba(18, 44, 92, 0.8),
    rgba(26, 58, 106, 0.7)
  );
  padding: 20px;
}

.login-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.login-header {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  height: 60px;
  margin-bottom: 20px;
}

.login-header h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.login-header p {
  color: #666;
  font-size: 14px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.form-group label {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}

.form-group input {
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 6px;
  font-size: 14px;
  transition: border-color 0.3s;
}

.form-group input:focus {
  border-color: #2a6c3b;
  outline: none;
}

.form-options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 14px;
}

.remember-me {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #666;
}

.forgot-password {
  color: #2a6c3b;
  text-decoration: none;
}

.login-button {
  background-color: #2a6c3b;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s;
}

.login-button:hover {
  background-color: #21522e;
}

.signup-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.signup-link a {
  color: #2a6c3b;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 375px) {
  .login-box {
    padding: 20px;
  }

  .login-header h2 {
    font-size: 20px;
  }

  .form-group input {
    padding: 10px;
  }

  .login-button {
    padding: 10px;
  }
}
</style>
