


const Dropdown = () => {
    return (
        <div className="px-8 bg-white rounded-lg py-6">
            <h1 className="text-xl mb-5">Dropdown <span className="text-red-500">*</span></h1>
            <select className="border p-4 rounded text-slate-500" id="">
                <option value="option1">Option 1</option>
                <option value="option2">Option 2</option>
                <option value="option3">Option 3</option>
            </select>
        </div>
    );
};

export default Dropdown;