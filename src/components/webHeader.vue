<template>
  <div class="web-header-root">
    <div class="main-header">
      <div class="logo">
        <img :src="headerImage" alt="Header Logo" />
      </div>
      <nav class="nav-links">
        <a href="#">How it works</a>
        <a href="#about-us">About us</a>
        <a href="#login">Login</a>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: "webHeader",
  data() {
    return {
      headerImage: require("../../images/logo.png"),
    };
  },
};
</script>

<style scoped>
.web-header-root {
  width: 100%;
  height: 100px;
  background: linear-gradient(
    190deg,
    rgba(13, 28, 64, 0.9),
    rgba(18, 44, 92, 0.8),
    rgba(26, 58, 106, 0.7)
  );

  display: flex;
  align-items: center;
  justify-content: center;
}

.main-header {
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo img {
  height: 80px;
}

.nav-links {
  display: flex;
  gap: 60px;
}

.nav-links a {
  color: white;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
}

.nav-links a:hover {
  text-decoration: underline;
}

@media (max-width: 375px) {
  .header {
    padding: 10px 15px;
  }

  .logo {
    font-size: 20px;
  }

  .nav-links {
    display: none;
  }

  .mobile-menu-button {
    display: block;
  }

  .mobile-menu {
    width: 100%;
  }
}
</style>
