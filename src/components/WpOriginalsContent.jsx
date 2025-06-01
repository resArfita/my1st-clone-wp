import WpOriSection from "../utils/WpOriSection";
import originalsbook from "../data/OriginalsBook";

const WpOriginalsContent = () => {
  const getThreeItem = originalsbook.slice(0, 3);
  const getThreeItem2 = originalsbook.slice(3, 6);
  const getThreeItem3 = originalsbook.slice(5, 8);


  return (
    <>
      <div className="flex flex-col mt-6 mx-5 mb-6">
        
        <WpOriSection
        heading="lengkap"
        wpBooksList={getThreeItem} />

        <WpOriSection
        heading="baru_rilis"
        wpBooksList={getThreeItem2} />

        <WpOriSection
        heading="cerita_terjemahan"
        wpBooksList={getThreeItem3} />

      </div>
    </>
  );
};

export default WpOriginalsContent;
