export default function Pizza() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Pizza: A Slice of Joy
          </span>
          <div className="w-full max-w-[800px]">
            <img
              src="/images/pizza.jpg"
              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Pizza is a delicious and versatile dish that has won the hearts
of people around the world. Originating in Italy, it consists
of a round, flat base of dough topped with sauce, cheese,
and an array of toppings that can range from traditional
pepperoni to gourmet ingredients like arugula and prosciutto. Each
region has its own style, whether it’s the classic Neapolitan,
deep-dish Chicago, or New York-style slices.
              
            </p>
            <br />
            <p>
            The beauty of pizza lies in its endless customization options.
From the crust thickness to the choice of sauces and toppings,
everyone can create their perfect pie. Vegetarian, vegan,
and gluten-free options have also become popular, ensuring
that pizza can be enjoyed by all. Pizza is often shared
among friends and family, making it a communal experience
that fosters connection.

            </p>
            <br />
            <p>
            Whether enjoyed at a casual pizzeria, a food truck, or
a fine dining restaurant, pizza is a beloved comfort food
that fits any occasion. Its popularity has led to various
innovative recipes and flavor combinations, showcasing the
creativity of chefs and home cooks alike. With its satisfying
combination of flavors and textures, pizza continues to
be a go-to dish for gatherings, celebrations, and everyday meals.
            </p>
            <br />
          </div>
        </div>
      </section>
    );
  }