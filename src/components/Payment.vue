  <template>
  <div class="pt-8 text-left">
    <div>
      <h3 class="text-lg leading-6 font-medium text-gray-900">Payment</h3>
    </div>

    <form
      @submit.prevent="onSubmit"
      class="mt-6 grid grid-cols-2 gap-y-3 gap-x-4"
    >
      <div class="col-span-2">
        <label for="cardholder" class="block text-sm font-medium text-gray-700"
          >Cardholder Name</label
        >

        <input
          v-model="cardholder"
          type="text"
          id="cardholder"
          placeholder="Alison Green"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('cardholder') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
        <!-- <p v-if="getError('cardholder')" class="text-sm text-red-600 mt-2">
          {{ getError("cardholder") }}
        </p> -->
      </div>

      <div class="col-span-2">
        <label for="cardNumber" class="block text-sm font-medium text-gray-700"
          >Card Number</label
        >

        <input
          v-model="cardNumber"
          type="text"
          id="cardNumber"
          placeholder="XXXX XXXX XXXX XXXX"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('cardNumber') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
      </div>

      <div class="col-span-1">
        <label for="expiry" class="block text-sm font-medium text-gray-700"
          >Expiry</label
        >

        <input
          v-model="expiry"
          type="text"
          id="expiry"
          placeholder="03/24"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('expiry') ? 'border-red-300' : 'border-gray-300',
          ]"
        />
      </div>
      <div class="col-span-1">
        <label for="cvv" class="block text-sm font-medium text-gray-700"
          >CVV</label
        >

        <input
          v-model="cvv"
          type="text"
          id="cvv"
          placeholder="000"
          :class="[
            'shadow-sm block w-full sm:text-sm rounded-md',
            getError('cvv') ? 'border-red-300' : 'border-gray-300',
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
      cardholder: "",
      cardNumber: "",
      expiry: "",
      cvv: "",
      errors: [],
    };
  },
  methods: {
    onSubmit() {
      this.errors = [];
      this.validateForm();

      if (!this.errors.length) {
        // process the form data
        this.$router.push({ name: "Success" });
      } else {
        console.log(this.errors);
      }
    },
    validateForm() {
      if (!this.cardholder) {
        this.errors.push({
          key: "cardholder",
          text: "Cardholder Name cannot be empty",
        });
      }

      if (!this.cardNumber) {
        this.errors.push({
          key: "cardNumber",
          text: "Card Number cannot be empty",
        });
      }

      if (!this.expiry) {
        this.errors.push({
          key: "expiry",
          text: "Expiry cannot be empty",
        });
      }

      if (!this.cvv) {
        this.errors.push({
          key: "cvv",
          text: "CVV Name cannot be empty",
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