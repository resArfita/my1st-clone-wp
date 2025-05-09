const Tag = ({ name }) => {
  return (
    <>
      <p className="text-sm font-bold mt-2 bg-gray-100 rounded-md py-1 px-2 cursor-pointer">
        {name}
      </p>
    </>
  );
};

export default Tag;
