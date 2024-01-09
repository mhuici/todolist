<template>
  <section class="text-gray-600 body-font">
    <div class="container px-5 py-24 mx-auto">
      <div class="text-center mb-20">
        <h1 class="sm:text-3xl text-2xl font-medium title-font text-gray-900 mb-4">
          About My Code
        </h1>
        <p class="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          A brief overview of my coding practices and principles.
        </p>
        <div class="flex mt-6 justify-center">
          <div class="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
        </div>
      </div>
      <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
        <div class="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          <div class="px-2 sm:w-1/2" v-for="point in points" :key="point.id">
            <div class="flex relative pb-12">
              <div
                class="h-full text-center w-10 absolute inset-0 flex items-center justify-center"
              >
                <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
              </div>
              <div
                class="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-500 inline-flex items-center justify-center text-white relative z-10 font-medium text-sm"
              >
                {{ point.id }}
              </div>
              <div class="flex-grow pl-4">
                <h2 class="font-medium title-font text-sm text-gray-900 mb-1 tracking-wider">
                  {{ point.title }}
                </h2>
                <p class="leading-relaxed">{{ point.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const points = [
  {
    id: 1,
    title: "Use of Vue 3's Composition API",
    description:
      'I have used the Vue 3 Composition API in my component, which is a good practice as it provides better code organization and improves reusability and composition logic.'
  },
  {
    id: 2,
    title: 'Error handling in API calls',
    description:
      'I have implemented error handling in my asynchronous functions. This is crucial for the robustness of my application, as it allows me to handle and notify the user if something goes wrong during API calls.'
  },
  {
    id: 3,
    title: 'Use of ref for reactivity',
    description:
      "I have used Vue 3's ref to manage the reactive state of my application. This is a good practice in Vue 3 and is essential for state management in Vue applications."
  },
  {
    id: 4,
    title: 'Use of components and props',
    description:
      'I have divided my application into smaller components and managed communication between them using props and custom events. This improves the readability and maintainability of the code.'
  },
  {
    id: 5,
    title: 'Use of data-testid attributes for testing',
    description:
      'I have used data-testid attributes in my markup, indicating that I am writing tests for my application. Writing tests is an excellent practice to ensure that my code works as expected.'
  },
  {
    id: 6,
    title: 'Clean and easy-to-maintain code',
    description:
      'My code is well organized, functions are clearly defined, and each has a unique responsibility. This makes my code easier to read and maintain.'
  }
]
</script>

<style></style>
