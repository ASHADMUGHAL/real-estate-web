<template>
  <div class="signup-container">
    <div class="signup-box">
      <div class="signup-header">
        <img :src="logo" alt="Logo" class="logo" />
        <h2>Create Account</h2>
        <p>Please fill in your details to sign up</p>
      </div>

      <form @submit.prevent="handleSignup" class="signup-form">
        <div class="form-group">
          <label for="name">Full Name</label>
          <input
            type="text"
            id="name"
            v-model="name"
            required
            placeholder="Enter your full name"
          />
        </div>

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
            placeholder="Create a password"
          />
        </div>

        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            required
            placeholder="Confirm your password"
          />
        </div>

        <div class="terms">
          <label class="terms-label">
            <input type="checkbox" v-model="agreeToTerms" required />
            I agree to the <a href="#">Terms of Service</a> and
            <a href="#">Privacy Policy</a>
          </label>
        </div>

        <button type="submit" class="signup-button">Create Account</button>

        <div class="login-link">
          Already have an account?
          <a href="#" @click.prevent="goToLogin">Login</a>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "Signup",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      agreeToTerms: false,
      logo: require("../../images/logo.png"),
    };
  },
  methods: {
    handleSignup() {
      if (this.password !== this.confirmPassword) {
        alert("Passwords do not match!");
        return;
      }

      // Here you would typically make an API call to your backend
      console.log("Signup attempt:", {
        name: this.name,
        email: this.email,
        password: this.password,
      });

      // For demo purposes, we'll just redirect to login
      this.$router.push("/login");
    },
    goToLogin() {
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.signup-container {
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

.signup-box {
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

.signup-header {
  text-align: center;
  margin-bottom: 30px;
}

.logo {
  height: 60px;
  margin-bottom: 20px;
}

.signup-header h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
}

.signup-header p {
  color: #666;
  font-size: 14px;
}

.signup-form {
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

.terms {
  font-size: 14px;
  color: #666;
}

.terms-label {
  display: flex;
  align-items: center;
  gap: 8px;
}

.terms a {
  color: #2a6c3b;
  text-decoration: none;
}

.signup-button {
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

.signup-button:hover {
  background-color: #21522e;
}

.login-link {
  text-align: center;
  font-size: 14px;
  color: #666;
}

.login-link a {
  color: #2a6c3b;
  text-decoration: none;
  font-weight: 500;
}

@media (max-width: 375px) {
  .signup-box {
    padding: 20px;
  }

  .signup-header h2 {
    font-size: 20px;
  }

  .form-group input {
    padding: 10px;
  }

  .signup-button {
    padding: 10px;
  }
}
</style>
