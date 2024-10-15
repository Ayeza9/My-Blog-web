import Link from "next/link";

export default function Blogs() {
  return (
    <section className="flex items-center justify-center">
      <div className="mx-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-rows-2 gap-2 sm:gap-10 mt-[100px] xl:grid-cols-3 ">
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/pasta.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Pasta: The comfort Food
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/pasta">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/pizza.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Pizza: A Slice of Joy
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/pizza">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/burger.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Burger: A classic Favourite
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/burger">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/salad.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Salad: Fresh and Healthy
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/salad">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/icecream.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Ice Cream: Sweet Treats
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/icecream">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/smoothies.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Smoothies: A Burst of Energy
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/smoothies">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/biryani.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Biryani: A Fragrant Treasure of Spices
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/biryani">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/falafel.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Falafel: Crispy Bites of Mediterranean Goodness
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/falafel">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>


        <div className="shadow-inset-center h-80 w-30 sm:w-60 md:w-80 bg-white shadow-drop-center rounded-2xl">
          <div>
            <div className="w-full h-44">
              <img
                src="/images/garlicbread.jpg"
                className="h-full w-full rounded-2xl object-cover"
                alt=""
              />
            </div>
            <p className="m-3 text-center font-bold text-gray-500 text-md md:text-xl leading-tight">
              Garlic Bread: The Crispy, Buttery Delight
            </p>
            <div className="flex items-center justify-center md:mt-5">
              <Link href="/blogs/garlicbread">
                <button className="w-20 h-8 md:w-24 md:h-9 bg-teal-500 text-white font-semibold rounded-3xl hover:bg-white hover:border-2 border-yellow-500 hover:text-yellow-400 text-sm">
                  Read Blog
                </button>
              </Link>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
