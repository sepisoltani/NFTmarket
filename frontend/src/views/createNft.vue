<template>
  <div>
    <div>
      <b-form-file
        @submit="onSubmit"
        v-model="file2"
        class="mt-3"
        plain
      ></b-form-file>
      <div class="mt-3">Selected file: {{ file2 ? file2.name : "" }}</div>

      <b-form-group
        class="mt-3"
        id="input-group-1"
        label="NFT title:"
        label-for="input-1"
      >
        <b-form-input
          id="input-1"
          type="text"
          placeholder="Enter NFT title"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-3"
        id="input-group-2"
        label="NFT description"
        label-for="input-2"
      >
        <b-form-input
          id="input-2"
          type="text"
          placeholder="Enter NFT description"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group
        class="mt-3"
        id="input-group-1"
        label="NFT price"
        label-for="input-3"
      >
        <b-form-input
          id="input-3"
          type="number"
          placeholder="Enter NFT price in ETH"
          required
        ></b-form-input>
      </b-form-group>

      <b-button class="mt-3" type="submit" variant="primary">Submit</b-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CreateNft",
};
</script>

<style scoped>
</style>
