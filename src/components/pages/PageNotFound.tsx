import { BannerSlider } from '../organisms/BannerSlider/BannerSlider';

export const PageNotFound = () => {
  return (
    <>
      <h1 className="title">Page not found</h1>
      <section className=" bg-white w-screen-1 relative flex flex-col">
        <h2>Gadget store</h2>
        <div className="w-full h-full max-h-screen relative z-0">
          <BannerSlider className="" />
        </div>
      </section>
    </>
  );
};
