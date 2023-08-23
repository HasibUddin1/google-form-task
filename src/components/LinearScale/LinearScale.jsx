import { useState } from "react";


const LinearScale = () => {

    const [selectedValue, setSelectedValue] = useState(null);

    const handleRadioChange = (event) => {
        setSelectedValue(event.target.value);
    };

    return (
        <div className="px-8 bg-white rounded-lg py-6">
            <h1 className="text-xl mb-5">Linear Scale <span className="text-red-500">*</span></h1>
            <div className="flex justify-between items-end">
                <p>Worst</p>
                <label className="flex flex-col items-center gap-3 text-lg">
                    1
                    <input
                        type="radio"
                        value="1"
                        checked={selectedValue === '1'}
                        onChange={handleRadioChange}
                        className="cursor-pointer"
                    />
                </label>
                <label className="flex flex-col items-center gap-3 text-lg">
                    2
                    <input
                        type="radio"
                        value="2"
                        checked={selectedValue === '2'}
                        onChange={handleRadioChange}
                        className="cursor-pointer"
                    />
                </label>
                <label className="flex flex-col items-center gap-3 text-lg">
                    3
                    <input
                        type="radio"
                        value="3"
                        checked={selectedValue === '3'}
                        onChange={handleRadioChange}
                        className="cursor-pointer"
                    />
                </label>
                <label className="flex flex-col items-center gap-3 text-lg">
                    4
                    <input
                        type="radio"
                        value="4"
                        checked={selectedValue === '4'}
                        onChange={handleRadioChange}
                        className="cursor-pointer"
                    />
                </label>
                <label className="flex flex-col items-center gap-3 text-lg">
                    5
                    <input
                        type="radio"
                        value="5"
                        checked={selectedValue === '5'}
                        onChange={handleRadioChange}
                        className="cursor-pointer"
                    />
                </label>
                <p>Best</p>
            </div>
        </div>
    );
};

export default LinearScale;