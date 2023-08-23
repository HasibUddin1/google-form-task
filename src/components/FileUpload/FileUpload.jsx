

const FileUpload = () => {
    return (

        <div className="px-8 bg-white rounded-lg py-6">
            <h1 className="mb-5">File Upload <span className="text-red-500">*</span></h1>
            <div className="flex">
                <label htmlFor="dropzone-file" className="flex items-center justify-center border border-gray-300 rounded cursor-pointer bg-gray-50  hover:bg-blue-50 p-2">
                    <div className="flex items-center justify-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-upload text-blue-500" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" /> <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z" /> </svg>
                        <p className="text-blue-500 ms-1">Add File</p>
                    </div>
                    <input id="dropzone-file" type="file" className="hidden" />
                </label>
            </div>
        </div>

    );
};

export default FileUpload;