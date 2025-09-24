import pagenotfound from '../../../public/img/page-not-found.png';

export const PageNotFound = () => {
  return (
    <>
      <h1 className="title">
        <img
          src={pagenotfound}
          className="size-[700px] m-auto object-fill"
        />
      </h1>
    </>
  );
};
