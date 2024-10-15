export default function Burger() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Burger: A Classic Favourite
          </span>
          <div className="w-full max-w-[800px]">
            <img
             src="/images/burger.jpg"

              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Burgers have grown into a worldwide favorite, appreciated for
            their juicy patties, crisp toppings, and soft, freshly baked
            buns. From the classic cheeseburger to more gourmet versions
            with unique flavors and sauces, each variation offers a
            satisfying meal that can be tailored to individual tastes.

            </p>
            <br />
            <p>
            Across the world, the burger has been reinvented in countless
            ways, with beef, chicken, and even plant-based patties. It's
            often paired with fries or onion rings, making it a go-to
            choice for a quick and hearty meal that pleases everyone
            looking for a filling, delicious dish to enjoy.

            </p>
            <br />
            <p>
            Burgers are beloved for their versatility, whether enjoyed
            as street food or in upscale restaurants. They continue to
            adapt to modern preferences, ensuring that everyone, from
            meat lovers to vegans, can enjoy this iconic comfort food.
              
            </p>
            <br />
          </div>
        </div>
      </section>
    );
  }