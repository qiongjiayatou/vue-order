<template>
  <div class="pt-8 text-left">
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Delivery Information
      </h3>
    </div>

    <form
      @submit.prevent="onSubmit"
      class="mt-6 grid grid-cols-2 gap-y-3 gap-x-4"
    >
      <div class="col-span-2">
        <p>Recipient</p>

        <input
          v-model="fullName"
          type="text"
          placeholder="Full Name"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('fullName') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
        <!-- <p v-if="getError('fullName')" class="text-sm text-red-600 mt-2">
          {{ getError("fullName") }}
        </p> -->
      </div>

      <div class="col-span-2 mt-4">
        <p>Address</p>

        <input
          v-model="city"
          type="text"
          placeholder="City"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('city') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
      </div>

      <div class="col-span-2">
        <input
          v-model="streetAddress"
          type="text"
          placeholder="Street address"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('streetAddress') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
      </div>

      <div class="col-span-1">
        <select
          v-model="country"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('country') ? 'border-red-300' : 'border-gray-300',
          ]"
        >
          <option value="0" selected>Country</option>
          <option value="1">Canada</option>
          <option value="2">Russia</option>
          <option value="3">United Kingdom</option>
        </select>
      </div>

      <div class="col-span-1">
        <input
          v-model="postcode"
          type="text"
          placeholder="Postal Code"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('postcode') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
      </div>

      <button
        type="submit"
        class="mt-4 px-4 py-2 border border-transparent text-center font-medium rounded-md shadow-sm text-white bg-green-600 hover:bg-green-700"
      >
        Next
      </button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      city: "",
      streetAddress: "",
      country: "",
      postcode: "",
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      this.validateForm();

      if (!this.errors.length) {
        console.log("success");
        // here data will be processed
        this.$router.push({ name: "Payment" });
      } else {
        console.log(this.errors);
      }
    },

    validateForm() {
      if (!this.fullName) {
        this.errors.push({
          key: "fullName",
          text: "Full Name cannot be empty",
        });
      }

      if (!this.city) {
        this.errors.push({
          key: "city",
          text: "City cannot be empty",
        });
      }

      if (!this.streetAddress) {
        this.errors.push({
          key: "streetAddress",
          text: "Street Address cannot be empty",
        });
      }

      if (this.country <= 0) {
        this.errors.push({
          key: "country",
          text: "Country cannot be empty",
        });
      }

      if (!this.postcode) {
        this.errors.push({
          key: "postcode",
          text: "Post Code cannot be empty",
        });
      }
    },

    getError(field) {
      // console.log(field);
      let error = this.errors.find((el) => el.key === field);
      return error ? error.text : false;
    },
  },
};
</script>
