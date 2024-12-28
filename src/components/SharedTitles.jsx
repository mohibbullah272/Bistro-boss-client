
const SharedTitles = ({title,subtitle}) => {
    return (
        <div className="my-8">
            <h3 className="text-center mb-2 text-[#D99904]">---{title}---</h3>
            <p className="text-3xl border-y-4 mx-auto w-4/12 text-center py-3 text-[#151515]">{subtitle}</p>
        </div>
    );
};

export default SharedTitles;