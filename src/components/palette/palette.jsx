const Palette = ({ palette }) => {
    return (
        <div className="flex border rounded-2xl shadow-md w-auto h-28 overflow-hidden">
            {palette.colors.map((color, index) => (
                <div 
                    key={index} 
                    className="w-12 h-full border border-black" 
                    style={{ backgroundColor: color }}
                    title={color}
                />
            ))}
        </div>
    );
};

export default Palette;
