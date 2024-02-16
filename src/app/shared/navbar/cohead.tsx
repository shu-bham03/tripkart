const CoHead = () => {
  return (
    <div className="mx-auto sm:mx-4 md:mx-4 xl:mx-32 lg:mx-32 mt-[30px]">
      <div className="flex justify-between flex-wrap">
        <div>
          <p>support@thetripkart.com</p>
        </div>
        <div className="flex justify-end gap-[20px]">
          <h3 className="whitespace-nowrap text-[14px] md:text-[14px]">
            +91 8808869169
          </h3>
          <span>|</span>
          <h3>INR</h3>
          <span>|</span>
          <h3 className="whitespace-nowrap text-[14px] sm:text-[14px]">
            Sign in or Register
          </h3>
        </div>
      </div>
    </div>
  );
};

export default CoHead;
