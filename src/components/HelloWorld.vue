<template>
  <section
    id="shopify-section-template--14968922243132__product-highlights"
    class="
      shopify-section
      bg-lifeboost-blue-light
      relative
      flex
      w-full
      flex-wrap
      justify-end
      overflow-hidden
    "
  >
    <section
      class="
        bg-lifeboost-blue-light
        relative
        flex
        w-full
        flex-wrap
        justify-end
        overflow-hidden
      "
      data-section-type=""
      data-section-id="template--14968922243132__product-highlights"
    >
      <div
        class="
          bg-lifeboost-blue-light
          justify-right
          flex
          w-full
          flex-col
          items-center
          lg:w-7/12
          xl:flex-row
          2xl:w-6/12
        "
      >
        <div
          class="
            listec
            max-w-lg
            grow
            space-y-2
            py-9
            px-6
            text-center
            sm:space-y-3.5 sm:px-10 sm:text-left
            md:py-20
            xl:ml-auto xl:max-w-lg xl:space-y-6
          "
        >
          <h3 class="text-3xl">{{ texta }}</h3>

          <p>
            Careful selection of mature coffee cherries, meticulous processing
            from fermentation, to spring water washing, to drying and rigorous
            testing for toxins, to a perfected roasting process makes our low
            acid coffee beans the healthiest, best tasting, most smooth coffee
            you’ll ever try.&nbsp;
          </p>
          <p>
            From the local Nicaraguan coffee farmers, to our new and even long
            time customers, our certified medium roasted Arabica coffee is, by
            far, our most popular coffee selection.
          </p>
          <ul>
            <li>Hand-picked, Spring water washed, Sun Dried</li>
            <li>Freshly roasted each time you order.</li>
            <li>
              3rd party tested for mycotoxins, heavy metals, pesticides + 400
              other toxins!
            </li>
            <li>Mountain Shade Grown</li>
            <li>Fairly Traded</li>
            <li>Single Origin, 100% Arabica Bean</li>
          </ul>
        </div>
        <div
          class="
            mx-4
            max-w-lg
            space-y-3.5
            px-10
            py-9
            text-center text-gray-700
            sm:px-10 sm:text-left
            md:mx-auto md:py-20 md:pl-14
            xl:max-w-sm xl:space-y-6
          "
        >
          <h3 class="text-3xl text-black">Product Facts</h3>

          <p class="text-base">Net Weight: 12 oz</p>

          <h3 class="pt-6 text-3xl text-black">Dietary Restrictions</h3>

          <p class="text-base font-medium underline">
            Non-GMO, Dairy Free, 0 Sugars or carbs
          </p>
        </div>
      </div>
      <!--image-->
      <div class="w-full lg:w-5/12">
        <img
          data-image-id="23291304017980"
          class="lazyautosizes lazyloaded h-full"
          style="object-fit: cover"
          src="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
          data-widths="[120,180,280,360,540,600,768,792]"
          data-aspectratio="1.0"
          data-parent-fit="cover"
          data-sizes="auto"
          width="792"
          height="792"
          alt=""
          data-srcset="//cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_120x120.jpg?v=1656477907 120w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_180x180.jpg?v=1656477907 180w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_280x280.jpg?v=1656477907 280w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_360x360.jpg?v=1656477907 360w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_540x540.jpg?v=1656477907 540w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_600x600.jpg?v=1656477907 600w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_768x768.jpg?v=1656477907 768w, //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_792x792.jpg?v=1656477907 792w"
          sizes="1024px"
          srcset="
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_120x120.jpg?v=1656477907 120w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_180x180.jpg?v=1656477907 180w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_280x280.jpg?v=1656477907 280w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_360x360.jpg?v=1656477907 360w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_540x540.jpg?v=1656477907 540w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_600x600.jpg?v=1656477907 600w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_768x768.jpg?v=1656477907 768w,
            //cdn.shopify.com/s/files/1/0838/4525/files/CoffeeLeft_792x792.jpg?v=1656477907 792w
          "
        />
      </div>
    </section>
  </section>
</template>

<script>
export default {
  props: {
    texta: {
      type: String,
      default: 'Highlights',
    },
  },
};
</script>

<style scoped>
.listec > ul {
  display: grid;
  margin-left: 1.5rem;
  color: #374151;
  font-size: 1rem;
  line-height: 1.5rem;
  list-style-type: disc;
  list-style-position: outside;
  text-align: justify;
  row-gap: 0.5rem;
}
</style>
