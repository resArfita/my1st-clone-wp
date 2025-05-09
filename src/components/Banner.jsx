// import mockupBanner from "../data/mockupBanners";
const Banner = () => {
    return (
        <>
        <div className="flex flex-col mx-5">
            <p className="text-lg font-bold">Kembali ke cerita, lebih cepat</p>
            <p className="text-gray-400 font-semibold">Lewati iklan−ritme bacamu tidak pernah selancar ini</p>
            <img
            src="https://img.freepik.com/free-photo/fuji-mountain-kawaguchiko-lake-sunset-autumn-seasons-fuji-mountain-yamanachi-japan_335224-5.jpg?t=st=1746690945~exp=1746694545~hmac=8f524386020dde0e3ffb29277dc1d82f1b9f1e197f780054879dd48ef94d1ac3&w=1380"
            alt=""
            width={400}
            className="rounded-md mt-6 mb-6 cursor-pointer"
            />
        </div>
        </>
    )
}

export default Banner;