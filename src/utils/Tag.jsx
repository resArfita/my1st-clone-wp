const Tag = ({ name }) => {
  return (
    <>
    <div className="flex flex-wrap">
      <p className="text-sm font-bold mt-2 bg-gray-100 rounded-md py-1 px-2">
        {name}
      </p>
    </div>
      
    </>
  );
};

export default Tag;
