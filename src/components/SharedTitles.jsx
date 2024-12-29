
const SharedTitles = ({title,subtitle,classStyle}) => {
    return (
        <div className="my-8">
            <h3 className="text-center mb-2 text-[#D99904]">---{title}---</h3>
            <p className={`${classStyle?classStyle:''} text-3xl uppercase border-y-4 mx-auto w-4/12 text-center py-3 text-[#151515]`}>{subtitle}</p>
        </div>
    );
};

export default SharedTitles;