<template>
  <div class="relative bg-white">
    <div class="max-w-7xl mx-auto lg:grid lg:grid-cols-2">
      <!-- Left Column -->
      <div class="bg-yellow  lg:col-span-1 ">
        <div class="flex h-full items-center">
          <div class="relative">
            <div class="container">
              <div class="py-16 px-4 sm:px-6 lg:px-24 lg:pyx-16 lg:py-0 xl:pr-12">
                <div class="max-w-lg mx-auto h-full">
                  <h2 class="text-2xl md:text-3xl lg:text-6xl font-bold tracking-tight">
                    Let us know what you think!
                  </h2>
                </div>
              </div>
            </div>
            <span
              class="absolute -bottom-1 lg:-bottom-28 transform scale-50 lg:scale-100 origin-left"
              style="left: 0px;"
            ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="329.4"
                height="43"
              >
                <path
                  fill="#E6EAF1"
                  d="M39 43L0 10l6-7 33 27L75 0l36 30 36-30 36 30 36-30 35 30 36-30 39 33-6 7-33-27-36 30-35-30-36 30-36-30-36 30-36-30z"
                ></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="329.4"
                height="43"
              >
                <path
                  fill="#E6EAF1"
                  d="M39 43L0 10l6-7 33 27L75 0l36 30 36-30 36 30 36-30 35 30 36-30 39 33-6 7-33-27-36 30-35-30-36 30-36-30-36 30-36-30z"
                ></path>
              </svg>
            </span>

          </div>
        </div>
      </div>

      <!-- Right Column -->
      <div class="bg-white lg:col-span-1">
        <div class="relative">
          <span
            class="absolute -top-10 lg:-top-20 transform scale-50 lg:scale-100 origin-right"
            style="right: 0px;"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              width="329.4"
              height="43"
            >
              <path
                fill="#E6EAF1"
                d="M39 43L0 10l6-7 33 27L75 0l36 30 36-30 36 30 36-30 35 30 36-30 39 33-6 7-33-27-36 30-35-30-36 30-36-30-36 30-36-30z"
              ></path>
            </svg>
          </span>

          <div class="container relative mt-29">
            <div class="pyy-16 px-4 sm:px-6  lg:pyy-24 lg:px-8 xl:pl-12">
              <div class="max-w-lg mx-auto lg:max-w-sm z-10 relative">
                <div class="bg-yellow px-4 py-2 mb-4">
                  <div class="text-md">
                    <p>
                      Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                    </p>
                  </div>
                </div>
                <client-feedback-form></client-feedback-form>
              </div>
            </div>
          </div>

          <span
            class="bg-dots absolute z-10 bottom-0 left-5 lg:left-10"
            style="width: 200px; height: 120px;"
          ></span>

        </div>

        <div class="my-10 flex justify-center items-end w-full lg:w-auto text-primary"><a
            href="https://cloudartisans.co.uk"
            id="logo"
            class="block w-40 py-1 fill-current transition duration-300 delay-150 ease-in-out"
          ><svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 546.81 92"
              class="svg"
            >
              <path
                d="M517.25,25.12A31.17,31.17,0,0,0,461.13,14a32.55,32.55,0,0,0-35.49,4.23,32.62,32.62,0,0,0-45.93,7c-.44,0-.88,0-1.31,0a32.37,32.37,0,0,0-16.56,4.52l6,6.82a23.63,23.63,0,0,1,16.54-1.72A23.79,23.79,0,0,1,426,31.29a23.77,23.77,0,0,1,38.82-3.39,22.28,22.28,0,0,1,44.07,6.59,35.12,35.12,0,0,1,6.29-.56A32.86,32.86,0,0,1,539.6,44.38L545.72,38A41.67,41.67,0,0,0,517.25,25.12Z"
                class="cls-1"
              ></path>
              <path
                d="M395.81,79.12C395.81,86,390,91.78,379,91.78c-7.68,0-13.5-2.79-17-6.84l5.74-6.58a15.1,15.1,0,0,0,11.81,5.15c4,0,6-1.69,6-4.22,0-7.26-21.69-3.72-21.69-18.23,0-6.16,5.24-12.07,15.53-12.07,7.26,0,13,2.45,16,6.67l-5.83,6.07a12.29,12.29,0,0,0-9.95-4.47c-3.55,0-5.66,1.6-5.66,3.8C374,68.15,395.81,64,395.81,79.12Z"
                class="cls-1"
              ></path>
              <path
                d="M433,86.21a15.66,15.66,0,0,1-12.33,5.57c-10.71,0-19.41-8.78-19.41-21.35,0-12.24,8.19-21.44,19.41-21.44A15.71,15.71,0,0,1,433,54.22v-4h10.38V90.6H433Zm0-15.87c0-6.5-4.48-11.64-10.64-11.64s-10.8,5.14-10.8,11.64,4.56,11.73,10.8,11.73S433,76.84,433,70.34Z"
                class="cls-1"
              ></path>
              <path
                d="M462.75,90.6H452.46V50.17h10.29v4c2.53-3.29,6.42-5.15,11.39-5.15,9.37,0,15.36,6.58,15.36,17.13V90.6H479.21v-23c0-5.48-3.21-8.94-8.19-8.94-5.15,0-8.27,3.46-8.27,8.94Z"
                class="cls-1"
              ></path>
              <path
                d="M529.12,79.12c0,6.83-5.82,12.66-16.79,12.66-7.68,0-13.5-2.79-17-6.84l5.73-6.58a15.14,15.14,0,0,0,11.82,5.15c4,0,6-1.69,6-4.22,0-7.26-21.69-3.72-21.69-18.23,0-6.16,5.23-12.07,15.53-12.07,7.26,0,13,2.45,16,6.67L523,61.73a12.3,12.3,0,0,0-10-4.47c-3.54,0-5.65,1.6-5.65,3.8C507.35,68.15,529.12,64,529.12,79.12Z"
                class="cls-1"
              ></path>
              <path
                d="M344.42,38.92a6,6,0,1,1,12.07,0,6,6,0,0,1-12.07,0Zm11.23,51.9h-10.3V50.39h10.3Z"
                class="cls-1"
              ></path>
              <path
                d="M307.38,50.39h7.17V39.93h10.3V50.39h11v9.12H324.93V76.64c0,3.8,1.6,5.65,4.64,5.65a6.47,6.47,0,0,0,4.73-2L338.94,88a15.87,15.87,0,0,1-11.06,4c-8.18,0-13.41-5.15-13.41-15V59.51h-7.09Z"
                class="cls-1"
              ></path>
              <path
                d="M22.06,58.64c-6.75,0-11.31,5.15-11.31,11.65S15.39,82,22,82a13.53,13.53,0,0,0,10-4l5.23,7.6c-3.21,3.54-9,6.08-15.45,6.08a21.4,21.4,0,0,1-.17-42.79c6.92,0,12.41,2.36,16,6.08l-5.9,7.34A13,13,0,0,0,22.06,58.64Z"
                class="cls-1"
              ></path>
              <path
                d="M44.4,32.48H54.69V90.54H44.4Z"
                class="cls-1"
              ></path>
              <path
                d="M61.78,70.44a21.06,21.06,0,1,1,21,21.35A21.16,21.16,0,0,1,61.78,70.44Zm31.73-.09c0-6.5-4.47-11.64-10.63-11.64S72.07,63.85,72.07,70.35s4.56,11.73,10.81,11.73S93.51,76.85,93.51,70.35Z"
                class="cls-1"
              ></path>
              <path
                d="M120.43,72.08C120.43,78,123.89,82,129,82s8.61-4,8.61-9.87V50.22h10.29V72.84c0,11.31-7.51,18.82-18.9,18.82s-18.9-7.51-18.9-18.82V50.22h10.29Z"
                class="cls-1"
              ></path>
              <path
                d="M196.76,32.76V90.82H186.38V86.43A15.66,15.66,0,0,1,174.06,92c-10.72,0-19.41-8.78-19.41-21.35,0-12.24,8.18-21.44,19.41-21.44a15.7,15.7,0,0,1,12.32,5.23V32.76Zm-10.38,37.8c0-6.5-4.48-11.64-10.64-11.64s-10.8,5.14-10.8,11.64,4.56,11.73,10.8,11.73S186.38,77.06,186.38,70.56Z"
                class="cls-1"
              ></path>
              <path
                d="M256.58,86.43A15.64,15.64,0,0,1,244.26,92c-10.72,0-19.41-8.78-19.41-21.35,0-12.24,8.19-21.44,19.41-21.44a15.69,15.69,0,0,1,12.32,5.23v-4H267V90.82H256.58Zm0-15.87c0-6.5-4.47-11.64-10.63-11.64s-10.8,5.14-10.8,11.64S239.7,82.29,246,82.29,256.58,77.06,256.58,70.56Z"
                class="cls-1"
              ></path>
              <path
                d="M286,90.82h-10.3V50.39H286v4.39a11.74,11.74,0,0,1,9.87-5.57,10.27,10.27,0,0,1,6.5,2L298.1,61a8.75,8.75,0,0,0-5.32-1.78c-4.14,0-6.75,3.46-6.75,9Z"
                class="cls-1"
              ></path>
            </svg></a>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
import ClientFeedbackForm from "./ClientFeedbackForm.vue";

export default {
  components: {
    ClientFeedbackForm,
  },
};
</script>

<style scoped>
.bg-dots {
  position: absolute;
  background-repeat: repeat;
  background-position: 0 0;
  background-image: url(https://cloudartisans.co.uk/img/decor-dot.svg);
  z-index: 0;
  background-size: 40px;
}
</style>