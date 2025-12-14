export default function Toast({
    type = "success",
    message = "Something happened",
}) {
    const styles = {
        success: "bg-green-100 text-green-700 border-green-400",
        error: "bg-red-100 text-red-700 border-red-400",
        info: "bg-blue-100 text-blue-700 border-blue-400",
        warning: "bg-yellow-100 text-yellow-700 border-yellow-400",
    };

    return (
        <div
            className={`
        flex items-center gap-3
        px-4 py-3
        border-l-4
        rounded-md
        shadow-md absolute
        ${styles[type]}
      `}
        >
            <span className=" font-semibold capitalize"></span>
            <span className="text-sm">{message}</span>
        </div>
    );
}

// <Toast type="success" message="Item added to cart!" />
