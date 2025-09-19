import Link from "next/link";

const PostCard = () => {
  return (
    <>
      <section className="grid place-items-center space-y-10 bg-[url(/call-to-action.jpg)] bg-cover bg-center px-48 py-28">
        <div className="grid place-items-center justify-center space-y-10 text-5xl font-semibold uppercase">
          Give the Gift of a Postcard
        </div>
        <div className="text-lg">
          Give the gift of a lasting memory with a postcard
        </div>
        <Link
          href=""
          className="rounded-sm bg-lime-700 px-6 py-2 text-xl text-white uppercase hover:bg-lime-900">
          Purchase A Postcard
        </Link>
      </section>
    </>
  );
};

export default PostCard;
