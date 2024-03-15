<template>
  <div class="flex flex-col min-h-screen overflow-hidden supports-[overflow:clip]:overflow-clip">

    <!-- Site header -->
    <Header />

    <!-- Page content -->
    <main class="grow">

      <!-- Hero section -->
      <section class="bg-gradient-to-b from-gray-100 to-gray-200">
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1 mb-4" data-aos="zoom-y-out">Get in touch with our team</h1>
              <p class="text-xl text-gray-600" data-aos="zoom-y-out" data-aos-delay="150">Select a category to email the support team or contact us directly by using the form below.</p>
            </div>

            <!-- Items -->
            <div class="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none" data-aos-id-blocks>

              <!-- 1st item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-anchor="[data-aos-id-blocks]">
                <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <circle class="fill-current text-blue-600" cx="24" cy="24" r="24" />
                  <g transform="translate(8 8)" stroke-width="2">
                    <path class="stroke-current text-blue-300" d="M23.778 8.222l-4.242 4.242M23.778 23.778l-4.242-4.242M8.222 23.778l4.242-4.242M8.222 8.222l4.242 4.242" />
                    <circle class="stroke-current text-white" transform="rotate(-45 16 16)" cx="16" cy="16" r="11" fill="none" />
                    <circle class="stroke-current text-blue-300" transform="rotate(-45 16 16)" cx="16" cy="16" r="5" fill="none" />
                  </g>
                </svg>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Tech Support</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 2nd item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="150" data-aos-anchor="[data-aos-id-blocks]">
                <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle class="fill-current text-blue-600" cx="24" cy="24" r="24" />
                    <g stroke-width="2">
                      <path class="stroke-current text-blue-300" d="M24 19v16M13 25h3M16 17l2.1 2.1M32 17l-2.1 2.1M16 34l2.1-2.1M32 34l-2.1-2.1M32 25h3M21 15l-2-2M27 15l2-2" />
                      <path class="stroke-current text-white" d="M27.9 17.2c2.5 1.6 4.1 4.7 4.1 8.3 0 5.2-3.6 9.5-8 9.5s-8-4.3-8-9.5c0-3.6 1.7-6.7 4.1-8.3" />
                      <path class="stroke-current text-white" d="M24 14c-2 0-3.7 1.5-4 3.5 0 0 2 1.5 4 1.5s4-1.5 4-1.5c-.3-2-2-3.5-4-3.5z" stroke-linecap="square" />
                    </g>
                  </g>
                </svg>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Website Issue</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 3rd item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="300" data-aos-anchor="[data-aos-id-blocks]">
                <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle class="fill-current text-blue-600" cx="24" cy="24" r="24" />
                    <g stroke-width="2">
                      <path class="stroke-current text-blue-300" d="M33 16L22 27" />
                      <path class="stroke-current text-white" d="M33 16l-7 19-4-8-8-4z" />
                    </g>
                  </g>
                </svg>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Contact Sales</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 4th item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="450" data-aos-anchor="[data-aos-id-blocks]">
                <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle class="fill-current text-blue-600" cx="24" cy="24" r="24" />
                    <g stroke-width="2">
                      <path class="stroke-current text-blue-300" d="M19.799 29.601C21.092 31.61 23.826 33 27 33c.59 0 1.163-.051 1.716-.142L33 35v-4.04c1.241-1.057 2-2.44 2-3.96 0-1.552-.792-2.961-2.081-4.027" />
                      <path class="stroke-current text-white" d="M23 14c-5.523 0-10 3.582-10 8 0 1.797.75 3.45 2 4.785V32l4.833-2.416c.996.266 2.059.416 3.167.416 5.523 0 10-3.582 10-8s-4.477-8-10-8z" />
                    </g>
                  </g>
                </svg>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Live Chat</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 5th item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="600" data-aos-anchor="[data-aos-id-blocks]">
                <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle class="fill-current text-blue-600" cx="24" cy="24" r="24" />
                    <g stroke-width="2">
                      <path class="stroke-current text-blue-300" d="M26 20l-2.172 2.172a4 4 0 01-5.656 0L18 22l4.929-4.929A7.072 7.072 0 0134 25.7" />
                      <path class="stroke-current text-white" d="M27.266 23.266l3.613 3.613a3 3 0 010 4.242l-1.636 1.636a6 6 0 01-8.486 0l-5.686-5.686A7.072 7.072 0 0120 15" />
                      <path class="stroke-current text-white" d="M30.391 31.609l-3.891-3.89M27.513 33.965l-3.63-3.63" />
                    </g>
                  </g>
                </svg>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Affiliate Program</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

              <!-- 6th item -->
              <div class="relative flex flex-col p-6 bg-white rounded shadow-xl" data-aos="zoom-y-out" data-aos-delay="750" data-aos-anchor="[data-aos-id-blocks]">
                <svg class="w-12 h-12 mb-3" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <circle class="fill-current text-blue-600" cx="24" cy="24" r="24" />
                    <g stroke-width="2">
                      <path class="stroke-current text-blue-300" d="M29 22h6v11H13V22h5" />
                      <path class="stroke-current text-white" d="M21 25h-3v-3l9-9 3 3z" />
                    </g>
                  </g>
                </svg>
                <h4 class="text-xl font-bold leading-snug tracking-tight mb-1">Billing & Account</h4>
                <p class="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>

            </div>

          </div>
        </div>
      </section>

      <!-- Contact section -->
      <section>
        <div class="max-w-6xl mx-auto px-4 sm:px-6">
          <div class="pt-32 pb-12 md:pt-40 md:pb-20">

            <!-- Section header -->
            <div class="max-w-3xl mx-auto text-center pb-12 md:pb-16">
              <h1 class="h1">Have a question about Simple? Contact us directly</h1>
            </div>

            <!-- Contact form -->
            <form class="max-w-xl mx-auto">
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full md:w-1/2 px-3 mb-4 md:mb-0">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="first-name">First Name <span class="text-red-600">*</span></label>
                  <input id="first-name" type="text" class="form-input w-full text-gray-800" placeholder="Enter your first name" required />
                </div>
                <div class="w-full md:w-1/2 px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="last-name">Last Name <span class="text-red-600">*</span></label>
                  <input id="last-name" type="text" class="form-input w-full text-gray-800" placeholder="Enter your last name" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="email">Email <span class="text-red-600">*</span></label>
                  <input id="email" type="email" class="form-input w-full text-gray-800" placeholder="Enter your email address" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="subject">Subject <span class="text-red-600">*</span></label>
                  <input id="subject" type="text" class="form-input w-full text-gray-800" placeholder="How can we help you?" required />
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="country">Country</label>
                  <select id="country" class="form-select w-full text-gray-500">
                    <option>United States</option>
                    <option>United Kingdom</option>
                    <option>Germany</option>
                  </select>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mb-4">
                <div class="w-full px-3">
                  <label class="block text-gray-800 text-sm font-medium mb-1" for="message">Message</label>
                  <textarea id="message" rows="4" class="form-textarea w-full text-gray-800" placeholder="Write your message"></textarea>
                </div>
              </div>
              <div class="flex flex-wrap -mx-3 mt-4">
                <div class="w-full px-3">
                  <button class="btn text-white bg-blue-600 hover:bg-blue-700 w-full">Send</button>
                </div>
              </div>
              <div class="text-sm text-gray-600 mt-4">
                By clicking "send" you consent to allow Simple to store and process the personal information submitted above and agree to our <a class="underline" href="#0">terms and conditions</a> as well as our <a class="underline" href="#0">Privacy Policy</a>.
              </div>
            </form>

          </div>
        </div>
      </section>

    </main>

    <!-- Site footer -->
    <Footer />

  </div>
</template>

<script>
import Header from './../partials/Header.vue'

import Footer from './../partials/Footer.vue'

export default {
  name: 'Support',
  components: {
    Header,
    Footer,
  },
}
</script>
