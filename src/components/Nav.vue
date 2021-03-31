<template>
  <nav class="flex">
    <ol class="bg-white rounded-md shadow px-6 flex space-x-4">
      <li class="flex">
        <div class="flex items-center">
          <router-link
            :to="{ name: 'Delivery' }"
            class="ml-4 text-sm font-medium text-gray-500 pointer-events-none"
            >Delivery</router-link
          >
        </div>
      </li>

      <li class="flex">
        <div class="flex items-center">
          <svg
            class="flex-shrink-0 w-6 h-full text-gray-200"
            viewBox="0 0 24 44"
            preserveAspectRatio="none"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <path d="M.293 0l22 22-22 22h1.414l22-22-22-22H.293z" />
          </svg>
          <router-link
            :to="{ name: 'Payment' }"
            class="ml-4 text-sm font-medium text-gray-500 pointer-events-none"
            >Payment</router-link
          >
        </div>
      </li>
    </ol>
  </nav>
</template>