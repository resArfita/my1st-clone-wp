
const storyChapter = [
    {
        id: 1,
        chapter: "Chapter 1",
    },
    {
        id: 2,
        chapter: "Chapter 2",
    },
    {
        id: 3,
        chapter: "Chapter 3",
    },
    {
        id: 4,
        chapter: "Chapter 4",
    },
    {
        id: 5,
        chapter: "Chapter 5",
    },
    {
        id: 6,
        chapter: "Chapter 6",
    },
];

const SidebarRead = () => {
    return (
        <>
        <div className="bg-white border-l border-gray-300 h-full w-80 ml-31 top-0">
            <div className="flex flex-col">
                <div className="mx-auto flex flex-col items-center my-4">
                    <img src="https://img.freepik.com/free-photo/spring-blooming_93675-130564.jpg?t=st=1746692379~exp=1746695979~hmac=bffb618b226d41ed0d6492ac5b3f0037196d8d2311b9daf281320f0ae1df7926&w=740"
                    alt=""
                    width={150}
                    className="mt-2" />
                    <p className="mt-7 font-semibold text-xl">Title Story</p>
                    <p className="mt-6 font-semibold">author username</p>
                </div>
            </div>
            <hr className="text-gray-400 my-6" />
            <div className="text-lg ml-3">
                {storyChapter.map((chapter) => (
                    <p key={chapter.id} className="mb-8">{chapter.chapter}</p>
                ))}
                
            </div>
        </div>
        </>
    )
}

export default SidebarRead;