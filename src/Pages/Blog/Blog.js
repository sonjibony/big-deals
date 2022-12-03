import React from "react";

const Blog = () => {
  return (
<div className="my-7 w-11/12 mx-auto">
      <div>
        <h1 className="text-5xl mb-4">THE BLOG</h1>
        <h1 className="text-xl mb-7">
        Stay informed with the latest news, gear and technology on the used furniture and decoration  blog, featuring guest posts, images from the <span className="text-primary">Big Deal</span> community.        </h1>
      </div>
      <div className="card lg:card-side bg-base-100  rounded-none">
        <figure>
          <img
            src="https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?cs=srgb&dl=pexels-huseyn-kamaladdin-667838.jpg&fm=jpg&w=640&h=443&_gl=1*nzsqni*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA2OTQ5Mi4yOS4xLjE2NzAwNjk1MTEuMC4wLjA."
            alt="Album"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">
          NESTING PLACE
          </h2>
          <p className="text-sm text-gray-500">December 1, 2022 | By Staff</p>
          <p>
          Besides loving the Nester because she’s the Nester, I love that she is a fellow renter who loves where she is. She has created a beautiful home and she craves simplicity which I adore. Her solution for a renter’s kitchen backsplash is brilliant…and yes, it includes hot glue...
          </p>

          <div className="card-actions justify-end">
            <button className="btn btn-outline btn-primary btn-sm rounded">
              Read More
            </button>{" "}
          </div>
        </div>
      </div>
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6 mt-11">
        <div className="card card-compact w-96 bg-base-100 rounded-none">
          <figure>
            <img
              src="https://images.pexels.com/photos/139764/pexels-photo-139764.jpeg?cs=srgb&dl=pexels-tim-gouw-139764.jpg&fm=jpg&w=640&h=431&_gl=1*egol53*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA2OTQ5Mi4yOS4xLjE2NzAwNjk3OTAuMC4wLjA."
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">THE LETTERED COTTAGE</h2>
            <p className="text-sm text-gray-500">December 1, 2022 | By Staff</p>
            <p>Kevin and Layla have such a passionate creativity for life and home design that it’s impossible to not catch the fever while perusing their blog. They are expert stylists and I love how they infuse every project with a vintage vibe. Using old,...
            </p>
            <div className="card-actions justify-start mt-3 ">
              <button className="btn btn-outline btn-primary btn-sm rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 rounded-none">
          <figure>
            <img
              src="https://images.pexels.com/photos/2098691/pexels-photo-2098691.jpeg?cs=srgb&dl=pexels-hu%E1%BB%B3nh-%C4%91%E1%BA%A1t-2098691.jpg&fm=jpg&w=640&h=443&_gl=1*1mqd96f*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA2OTQ5Mi4yOS4xLjE2NzAwNjk2NjIuMC4wLjA."
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            PERFECTLY IMPERFECT
            </h2>
            <p className="text-sm text-gray-500">
              November 23, 2022 | By Staff
            </p>
            <p>
            If you have a piece of furniture that’s been begging for a coat of paint, but you’re not quite sure where to start, let me tell ya…my friend Shaunna can hook you right up. She inspires...
            </p>
            <div className="card-actions justify-start mt-3 ">
              <button className="btn btn-outline btn-primary btn-sm rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
        <div className="card card-compact w-96 bg-base-100 rounded-none">
          <figure>
            <img
              src="https://images.pexels.com/photos/1910472/pexels-photo-1910472.jpeg?cs=srgb&dl=pexels-christa-grover-1910472.jpg&fm=jpg&w=640&h=427&_gl=1*1sq1z2t*_ga*NDAwNTIyNDM1LjE2NTg5OTQ3NzI.*_ga_8JE65Q40S6*MTY3MDA2OTQ5Mi4yOS4xLjE2NzAwNjk4ODMuMC4wLjA."
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
            THRIFTY DECOR CHICK
            </h2>
            <p className="text-sm text-gray-500">October 14, 2022 | By Staff</p>
            <p>
            Today we are excited to share with you our upstairs bathroom makeover which we generally refer to as "the girls' bathroom". Along with five other bloggers, we partnered up with Wayfair for this transformation and it was so much fun! Wayfair has super fast shipping on the majority of their items and from ...
            </p>
            <div className="card-actions justify-start mt-3 ">
              <button className="btn btn-outline btn-primary btn-sm rounded">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
