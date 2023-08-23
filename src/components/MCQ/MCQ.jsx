

const MCQ = () => {
    return (
        <div className="px-8 bg-white rounded-lg py-6">
            <h1 className="text-xl">MCQ <span className="text-red-500">*</span></h1>
            <div className="mt-5">
                <div>
                    <label className="flex gap-2 text-lg">
                        <input className="w-[18px]" type="radio" name="fruit" value="option1" /> Option 1
                    </label>
                </div>
                <div>
                    <label className="flex gap-2 text-lg">
                        <input className="w-[18px]" type="radio" name="fruit" value="banana" /> Option 2
                    </label>
                </div>
                <div>
                    <label className="flex gap-2 text-lg">
                        <input className="w-[18px]" type="radio" name="fruit" value="orange" /> Option 3
                    </label>
                </div>
            </div>
        </div>
    );
};

export default MCQ;