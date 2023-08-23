

const TickBoxGrid = () => {
    return (
        <div className="px-8 bg-white rounded-lg py-6">
            <h1 className="text-xl mb-5">Tick Box Grid <span className="text-red-500">*</span></h1>
            <table className="w-full">
                <tr>
                    <th></th>
                    <th className="font-normal">Column 1</th>
                    <th className="font-normal">Column 2</th>
                    <th className="font-normal">Column 3</th>
                </tr>
                <tr className="bg-slate-100 border-b-4 border-white">
                    <td className="p-2">Row 1</td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row1" id="" />
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row1" id="" />
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row1" id="" />
                        </div>
                    </td>
                </tr>
                <tr className="bg-slate-100 border-b-4 border-white">
                    <td className="p-2">Row 2</td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row2" id="" />
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row2" id="" />
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row2" id="" />
                        </div>
                    </td>
                </tr>
                <tr className="bg-slate-100 border-b-4 border-white">
                    <td className="p-2">Row 3</td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row3" id="" />
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row3" id="" />
                        </div>
                    </td>
                    <td className="p-2">
                        <div className="text-center">
                            <input className="w-[20px] h-[20px] cursor-pointer" type="checkbox" name="row3" id="" />
                        </div>
                    </td>
                </tr>
            </table>
        </div>
    );
};

export default TickBoxGrid;