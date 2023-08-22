import { BsCloudCheck } from "react-icons/bs";

const FormHeading = () => {
    return (
        <div className="rounded-lg bg-white border-t-[10px] border-purple-700">
            <h1 className="text-3xl font-semibold px-4 py-4">Assignment Task</h1>
            <hr className="mt-3 mb-3" />
            <div className="px-4 py-2 flex items-center justify-between">
                <p className="text-xl"><span className="font-semibold">example@gmail.com</span> <span className="text-blue-500 cursor-pointer">Switch account</span></p>
                <p className="flex items-center gap-3"><span className="text-xl"><BsCloudCheck></BsCloudCheck></span> Draft Saved</p>
            </div>
            <p className="px-4 py-2">The name and photo associated with your Google account will be recorded when you upload files and submit this form. Your email is not part of your response.</p>
            <hr className="mt-3 mb-3" />
            <p className="text-red-500 px-4 py-2">* Indicates required question</p>
        </div>
    );
};

export default FormHeading;