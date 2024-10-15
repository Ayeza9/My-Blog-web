export default function Falafel() {
    return (
      <section className="my-[140px]">
        <div className="flex items-center justify-center flex-col gap-10  mx-10 lg:mx-0">
          <span className="text-3xl md:text-5xl font-bold text-gray-500 slide-top hover:text-yellow-400 text-center">
            Falafel: Crispy Bites of Mediterranean Goodness
          </span>
          <div className="w-full max-w-[800px]">
            <img
                src="/images/falafel.jpg"

              className="rounded-lg w-full h-auto object-cover"
              alt=""
            />
          </div>
          <div className="max-w-[800px] w-full min-w-[250px] text-sm sm:text-md xl:text-lg ">
            <p>
            Falafel is a popular Middle Eastern dish made from ground chickpeas,
fava beans, or a combination of both, seasoned with a mix of herbs
and spices. These flavorful balls are typically deep-fried to achieve
a crispy exterior while maintaining a soft and moist interior. Often
served in pita bread or as part of a mezze platter, falafel has won the hearts of food lovers around the globe.

            </p>
            <br />
            <p>
            The origins of falafel are debated, with various regions claiming
to be its birthplace. Whether served with tahini sauce, pickled vegetables,
or fresh salads, falafel offers a delightful burst of flavors that
satisfies both vegetarians and meat lovers alike. Its versatility
makes it a popular choice in street food markets and upscale restaurants.

            </p>
            <br />
            <p>
            In addition to being delicious, falafel is a nutritious option, packed
with protein and fiber, making it a healthy choice for those seeking
a satisfying meal. Its growing popularity has led to various adaptations,
including baked versions for a healthier twist. With its rich history
and global appeal, falafel continues to be a beloved staple in many cuisines.
                            
            </p>
            <br />
          </div>
        </div>
      </section>
    );
  }