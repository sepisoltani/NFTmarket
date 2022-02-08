<template>
  <div id="app" class="container">
    <div>
      <b-card class="mb-2" title="Card Title" no-body>
        <b-card-header header-tag="nav">
          <b-nav>
            <b-nav-item active>
              <router-link to="/">Home</router-link></b-nav-item
            >
            <b-nav-item>
              <router-link to="/createNft">Create NFT</router-link></b-nav-item
            >
            <b-nav-item>
              <router-link to="/myNFTs">My NFTs</router-link></b-nav-item
            >
          </b-nav>
        </b-card-header>
      </b-card>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
