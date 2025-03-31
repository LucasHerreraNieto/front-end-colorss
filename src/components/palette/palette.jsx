const Palette = ({ palette, num, randomNum }) => {
    const sizeClass = num >= randomNum ? "w-24" : "w-12";

    return (
        <div className="flex border rounded-2xl shadow-md w-auto h-28 overflow-hidden">
            {palette.colors.map((color, index) => (
                <div 
                    key={index} 
                    className={`${sizeClass} h-full border border-black`} 
                    style={{ backgroundColor: color }}
                    title={color}
                />
            ))}
        </div>
    );
};

export default Palette;