export default function IceCream() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Ice Cream: Sweet Treats
          </span>
          <div className="w-full max-w-[800px]">
            <img
               src="/images/icecream.jpg"

              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Ice cream is a delightful frozen dessert that has captivated
taste buds around the world for centuries. Made from a
creamy blend of milk, cream, sugar, and flavorings, it
offers a smooth, rich texture that melts in your mouth.
Available in countless flavors—from classic vanilla and chocolate
to innovative combinations like lavender honey and matcha—ice cream
can satisfy any craving.

            </p>
            <br />
            <p>
            The history of ice cream dates back to ancient civilizations,
where frozen desserts were created using snow or ice mixed
with fruit and honey. Today, it has evolved into a beloved
treat enjoyed year-round, often served in cones, cups, or
as a topping for various desserts. Ice cream parlors and
restaurants offer a wide variety of options, making it
easy for everyone to find their perfect scoop.

            </p>
            <br />
            <p>
            Ice cream is not just a sweet indulgence; it also brings
people together during celebrations and special occasions.
From birthday parties to summer gatherings, sharing ice cream
is a joyful experience that evokes nostalgia and happiness.
With the rise of dairy-free and vegan options, ice cream
continues to evolve, ensuring that everyone can enjoy this
timeless treat regardless of dietary preferences.

            </p>
            <br />
          </div>
        </div>
      </section>
    );
  }